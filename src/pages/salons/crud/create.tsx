import { Col, Form, Row } from "antd"
import { ITypeFormUIBuilder } from "../../../models/formUIBuilder"
import PageLayout from "../../../components/layout/page_layout"
import AvatarUpload from "../../../components/avatar_upload"
import FormUIBuilder from "../../../components/formUIBuilder"
import IndexMap from "./index_map"
import { useState } from "react"

const SalonCreate : React.FC = () : JSX.Element => {
  const [form] = Form.useForm()

  const formUIData: ITypeFormUIBuilder['formUIData'] = [
    {
      name: 'Name',
      type: 'text',
      required: true,
      col: 24
    },
    {
      name: 'Specialistion',
      type: 'text',
      required: true,
      col: 24
    },
    {
      name: 'Address',
      type: 'text',
      required: false,
      col: 24
    },
    {
      name: 'Phone',
      type: 'text',
      required: true,
      col: 24
    },
    {
      name: 'About salon',
      type: 'textarea',
      required: false,
      col: 24
    },
  ]

  const additionalformUIData: ITypeFormUIBuilder['formUIData'] = [
    {
      name: 'Employees count',
      type: 'number',
      required: true,
      col: 24
    },
    {
      name: 'Services',
      type: 'multiselect',
      required: false,
      options: [
        {label: 'Soch kesish', value: 1},
        {label: 'Sochni parvarishlash', value: 2},
        {label: 'Kiprik terish', value: 3},
      ],
      col: 24
    },
  ]

  const [location, setLocation] = useState<{ lat: 41.326158154854866; lng: 69.2935293679735 } | null>(null);

  const onFinish = (values: any) => {
    console.log({ ...values, location });
  };

  return(
    <PageLayout title="Salon create" create_permession="" url="" isButton>
      <Form name="basic" layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item name='avatar' valuePropName="value" className="w-[50%] mx-auto text-center">
              <AvatarUpload onChange={(value) => form.setFieldsValue({ avatar: value })}/>
            </Form.Item>
            <Row gutter={12}><FormUIBuilder formUIData={formUIData}/></Row>
          </Col>
          <Col span={12}>
            <FormUIBuilder formUIData={additionalformUIData}/>
            <IndexMap onLocationSelect={setLocation}/>
          </Col>
        </Row>
      </Form>
    </PageLayout>
  )
}

export default SalonCreate