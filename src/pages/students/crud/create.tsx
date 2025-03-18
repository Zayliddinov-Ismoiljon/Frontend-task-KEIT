import { Button, Col, Form, Input, Row, Space} from "antd"
import PageLayout from "../../../components/layout/page_layout"
import { useTranslation } from "react-i18next"
import FormUIBuilder from "../../../components/formUIBuilder"
import { ITypeFormUIBuilder } from "../../../models/formUIBuilder"
import { FaPlusCircle } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import AvatarUpload from "../../../components/avatar_upload"

const BarbersCreate: React.FC = () : JSX.Element => {
    const {t} = useTranslation()
    const [form] = Form.useForm()

    const formUIData: ITypeFormUIBuilder['formUIData'] = [
        {
            name: 'first_name',
            type: 'text',
            required: true,
            col: 12
        },
        {
            name: 'last_name',
            type: 'text',
            required: true,
            col: 12
        },
        {
            name: 'birthday',
            type: 'date',
            required: true,
            col: 12
        },
        {
            name: 'phone',
            type: 'text',
            required: true,
            col: 12
        },
        {
            name: 'email',
            type: 'text',
            required: false,
            col: 12
        },
        {
            name: 'telegram',
            type: 'text',
            required: false,
            col: 12      
        },
        {
            name: 'full_address',
            type: 'textarea',
            required: false,
            col: 24
        },
    ]

    const onFinish = (values:any) => {
        console.log(values)
    } 

    return(
        <PageLayout title="Barber create" create_permession="" url="" isButton>
            <Form name="basic" layout="vertical" form={form} onFinish={onFinish}
            initialValues={{
                avatar: '',
                experience: [{ company: '', position: '', startDate: '', endDate:'', description: '' }], 
            }}>
                <Row gutter={12}>
                    <Col span={12}>
                        <Form.Item name='avatar' valuePropName="value" className="w-[50%] mx-auto text-center">
                          <AvatarUpload onChange={(value) => form.setFieldsValue({ avatar: value })}/>
                        </Form.Item>
                        <Row gutter={12}><FormUIBuilder formUIData={formUIData}/></Row>
                    </Col>
                    <Col span={12}>
                        <Form.List name="experience">
                            {(fields, { add, remove }) => (
                              <div style={{width:'100%'}}>
                                {fields.map(({ key, name, ...restField }) => (
                                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline" >
                                    <Row gutter={12}>
                                        <Col span={12}><Form.Item {...restField} name={[name, 'company']} label='Company'><Input placeholder="Company ..." /></Form.Item></Col>
                                        <Col span={12}><Form.Item {...restField} name={[name, 'position']} label='Position'><Input placeholder="Position ..." /></Form.Item></Col>
                                        <Col span={12}><Form.Item {...restField} name={[name, 'startDate']} label='Start date'><Input type="date" placeholder="Start date ..." /></Form.Item></Col>
                                        <Col span={12}><Form.Item {...restField} name={[name, 'endDate']} label='End date'><Input type="date" placeholder="End date ..." /></Form.Item></Col>
                                        <Col span={24}><Form.Item {...restField} name={[name, 'description']} label='Description'><Input.TextArea rows={5} placeholder="Description ..." /></Form.Item></Col>
                                    </Row>
                                    {fields.length > 1 && (<CgClose onClick={() => remove(name)} />)}
                                  </Space>
                                ))}
                                <Form.Item><Button type="dashed" onClick={() => add()} block icon={<FaPlusCircle />}> Add experience </Button></Form.Item>
                                <Row gutter={12}>
                                    <Col span={12}><Form.Item><Button htmlType="button" className="w-full bg-red-500 text-white" onClick={() => form.resetFields()}>{t("Reset")}</Button></Form.Item></Col>
                                    <Col span={12}><Form.Item><Button htmlType="submit" type="primary" className="w-full">{t("Submit")}</Button></Form.Item></Col>
                                </Row>
                              </div>
                            )}
                        </Form.List>
                    </Col>
                </Row>
            </Form>
        </PageLayout>
    )
}

export default BarbersCreate