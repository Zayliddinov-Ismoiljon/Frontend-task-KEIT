import dayjs from "dayjs";
import { useEffect } from "react";
import useGetOneData from "../../../hooks/useGetOneData";
import { useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";

interface ValueDetail {
  defineId: number;
  value: string | number;
}

const CarView : React.FC = () : JSX.Element => {
  const { id } = useParams();
  const [form] = useForm();

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


  const renderInputField = (columnType: string) => {
    switch (columnType) {
      case "STRING":
        return <Input disabled className="w-full" placeholder="Enter value" />;
      case "DATE":
        return <DatePicker disabled className="w-full" />;
      case "DOUBLE":
        return <Input disabled type="number" step="0.01" className="w-full" placeholder="Enter number" />;
      default:
        return <Input disabled className="w-full" placeholder="Enter value" />;
    }
  };


  return(
    <Form form={form} layout="vertical">
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
                      <Select className="w-full" placeholder="Select Car Type" disabled>
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
          </>
        )}
      </Form.List>
    </Form>
  )
}

export default CarView