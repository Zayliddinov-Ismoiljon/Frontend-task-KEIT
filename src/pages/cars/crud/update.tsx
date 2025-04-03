import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";
import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useGetOneData from "../../../hooks/useGetOneData";
import { Notification } from "../../../utils/notification";
import { AxiosError } from "axios";
import { validationErrors } from "../../../utils/validation_error";
import dayjs from "dayjs";
import { updateData } from "./update_request";

interface ValueDetail {
  defineId: number;
  value: string | number;
}

const CarUpdate: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [form] = useForm();
  const navigate = useNavigate()

  const { data } = useGetOneData<any>({
    queryKey: ["car-value-id", id],
    url: `car-value?objectUUID=${id}`,
    options: {
      refetchOnWindowFocus: false,
      retry: 0,
      enabled: !!id,
    },
  });

  useEffect(() => {
    if (data?.dataSource?.valueDetails) {
      form.setFieldsValue({
        users: data.dataSource.valueDetails.map(({ defineId, value, columnType }: ValueDetail & { columnType: string }) => ({
          defineId,
          last: columnType === "DATE" ? dayjs(value) : value,
        })),
      });
      
    }
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: (newValues) => updateData(newValues),
    onSuccess: async (res) => {
      Notification('success', 'update', res?.message);
    },
    onError: (error: AxiosError) => {
      Notification('error', 'update', error?.message);
      validationErrors(form, error?.response?.data);
    },
    retry: 0,
  });

  const onFinish = (values: any) => {
    const formattedData = values.users.map((item: any) => {
      const selectedOption = data?.dataSource?.valueDetails.find((option: any) => option.defineId === item.defineId);
      return {
        defineId: item.defineId,
        name: selectedOption?.dataIndex || "unknown",
        value: item.last
      };
    });

    const lastFormattedData = {
      objectUUID: id,
      values: formattedData
    }
    mutate(lastFormattedData as any);
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
        {(fields) => (
          <>
            {fields.map(({ key, name, ...restField }) => {
              const selectedOption = data?.dataSource?.valueDetails.find(
                (item: any) => item.defineId === form.getFieldValue(["users", name, "defineId"])
              );
              return (
                <Row gutter={[12, 12]} key={key}>
                  <Col span={12}>
                    <Form.Item {...restField} name={[name, "defineId"]} rules={[{ required: true, message: "Missing defineId" }]}> 
                      <Select className="w-full" placeholder="Select Car Type">
                        {data?.dataSource?.valueDetails.map((item: any) => (
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
                </Row>
              );
            })}
            <Row gutter={[12,12]}>
              <Col span={12}>
                <Form.Item><Button className="bg-red-500 text-white w-full" htmlType="reset" onClick={() => form.resetFields()}>{t('초기화')}</Button></Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item><Button htmlType="submit" className="bg-[#07DA83] text-white w-full">{t('편집')}</Button></Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default CarUpdate;
