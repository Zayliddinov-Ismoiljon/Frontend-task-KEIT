import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import PhoneNumberInput from "../../components/phone_input";

const Register : React.FC = () : JSX.Element => {
  const {t} = useTranslation()
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('RegisterFormValues', values)
  }
  return(
    <>
      <div className="login-wrapper">
        <div className="w-[500px] items-center p-5 shadow-lg rounded-lg mx-auto border border-solid">
          <h3 className="text-lg font-semibold mb-4">{t("Sign up")}</h3>
          <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
            <Form.Item name="firstName" label="First name" rules={[{ required: true }]}>
              <Input allowClear/>
            </Form.Item>
            <Form.Item name="lastName" label="Last name" rules={[{ required: true }]}>
              <Input allowClear/>
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <PhoneNumberInput/>
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input.Password allowClear/>
            </Form.Item>
            <Form.Item name="newpassword" label="Reenter password" rules={[{ required: true }]}>
              <Input.Password allowClear/>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="w-full text-white bg-main_color">Sign up</Button>
            </Form.Item>
            <p className="text-[#606E80] font-medium">{t("You have an account?")}<Link to={'/login'} className="text-main_color ml-2">{t("Login now")}</Link></p>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Register