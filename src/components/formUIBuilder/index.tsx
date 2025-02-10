import { Col, Form, Input, Select } from "antd"
import { useTranslation } from "react-i18next"
import { ITypeFormUIBuilder } from "../../models/formUIBuilder"

const FormUIBuilder : React.FC<ITypeFormUIBuilder> = ({formUIData}) : JSX.Element => {
    const {t} = useTranslation()
    return(
        <>
           {
             formUIData.map((field, index) => (
               field.type === 'text' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Input placeholder={`Enter ${t(field.name)} ...`} className={'w-full'} type='text' max={field.maxCount} min={field.minCount} allowClear/></Form.Item></Col> : 
               field.type === 'number' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Input placeholder={`Enter ${t(field.name)} ...`} className={'w-full'} type='number' max={field.maxCount} min={field.minCount} allowClear/></Form.Item></Col> : 
               field.type === 'password' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Input.Password placeholder={`Enter ${t(field.name)} ...`} className={'w-full'} max={field.maxCount} min={field.minCount} allowClear/></Form.Item></Col> :
               field.type === 'textarea' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Input.TextArea placeholder={`Enter ${t(field.name)} ...`} className={'w-full'} rows={5} allowClear/></Form.Item></Col> : 
               field.type === 'date' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Input type="date" placeholder={`Enter ${t(field.name)} ...`} className={'w-full'} /></Form.Item></Col> :
               field.type === 'select' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Select placeholder={`Select ${field.name} ...`} className="w-full" allowClear>{field.options?.map((options:any, index:number) => <Select.Option key={index} value={options?.value}>{options?.label}</Select.Option>)}</Select></Form.Item></Col> : 
               field.type === 'multiselect' ? <Col key={index} span={field.col ? field.col : 4}><Form.Item name={field.name} label={field.name} rules={[{required: field.required, message: `${t(`Please input your ${field.name}`)}`}]} className="capitalize w-full"><Select mode="multiple" placeholder={`Select ${field.name} ...`} className="w-full" allowClear>{field.options?.map((options:any, index:number) => <Select.Option key={index} value={options?.value}>{options?.label}</Select.Option>)}</Select></Form.Item></Col> : null
             ))
           }
        </>
    )
}

export default FormUIBuilder