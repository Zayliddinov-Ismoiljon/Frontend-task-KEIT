import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";
import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";
import useGetAllData from "../../../hooks/useGetAllData";
import { PlusOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { submitData } from "./request";
import { Notification } from "../../../utils/notification";
import { AxiosError } from "axios";
import { validationErrors } from "../../../utils/validation_error";
import { useNavigate } from "react-router-dom";

const CarCreate: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [form] = useForm();
  const navigate = useNavigate()

  const { data } = useGetAllData<any>({
    queryKey: ["car-define/create-headers"],
    url: "car-define/create-headers",
  });

  useEffect(() => {
    if (data?.dataSource) {
      form.setFieldsValue({
        users: data.dataSource.filter((item: any) => item.createRequired).map((item: any) => ({ defineId: item.defineId, last: "" }))
      });
    }
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: (newValues) => submitData(newValues),
    onSuccess: async (res) => {
      Notification('success', 'create', res?.message);
      form.resetFields();
    },
    onError: (error: AxiosError) => {
      Notification('error', 'create', error?.message);
      validationErrors(form, error?.response?.data);
    },
    retry: 0,
  });

  const onFinish = (values: any) => {
    const formattedData = values.users.map((item: any) => {
      const selectedOption = data?.dataSource?.find((option: any) => option.defineId === item.defineId);
      return {
        defineId: item.defineId,
        name: selectedOption?.dataIndex || "unknown",
        value: item.last
      };
    });

    mutate(formattedData);
    navigate('/cars')
  };

  const renderInputField = (columnType: string) => {
    switch (columnType) {
      case "STRING":
        return <Input className="w-full" placeholder="Enter value" />;
      case "DATE":
        return <DatePicker className="w-full" />;
      case "DOUBLE":
        return <Input type="number" step="0.01" className="w-full" placeholder="Enter number" />;
      default:
        return <Input className="w-full" placeholder="Enter value" />;
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => {
              const selectedOption = data?.dataSource?.find((item: any) => item.defineId === form.getFieldValue(["users", name, "defineId"]));
              return (
                <Row gutter={[12, 12]} key={key}>
                  <Col span={11}>
                    <Form.Item {...restField} name={[name, "defineId"]} rules={[{ required: true, message: "Missing defineId" }]}> 
                      <Select className="w-full" placeholder="Select Car Type">
                        {data?.dataSource?.map((item: any) => (
                          <Select.Option key={item?.defineId} value={item?.defineId}>{item?.title}</Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item {...restField} name={[name, "last"]} rules={[{ required: true, message: "Missing value" }]}> 
                      {renderInputField(selectedOption?.columnType)}
                    </Form.Item>
                  </Col>
                  <Col span={1}>
                    {fields.length === 1 ? null : (
                      <IoMdClose size={24} color="red" className="hover:cursor-pointer" onClick={() => remove(name)} />
                    )}
                  </Col>
                </Row>
              );
            })}
            <Row gutter={[12,12]}>
              <Col span={8}>
                <Form.Item><Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>{t('추가')}</Button></Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item><Button className="bg-red-500 text-white w-full" htmlType="reset" onClick={() => form.resetFields()}>{t('초기화')}</Button></Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item><Button htmlType="submit" className="bg-[#07DA83] text-white w-full">{t('추가 정보')}</Button></Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default CarCreate;
