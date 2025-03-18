import { Button, Form, Input, message} from "antd";
import axios from "axios";
import { MAIN_URL } from "../../config/utils";
import { useDispatch } from "react-redux";
import { login } from "../../store/user_slice";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Notification } from "../../utils/notification";
import Captcha from "../../assets/images/captcha.png";

const Login = () => {
  const {t} = useTranslation()
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(`${MAIN_URL}auth/login`, {...values},{
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        dispatch(login(response.data?.content));
        navigate('/dashboard');
        localStorage.setItem('access_token', response.data.content.token);
        Notification('success', 'login', 'You are successfully logged in!')
      } else {
        message.error(t('An error occurred while logging in. Please try again later'));
      }
    } catch (error) {
      message.error(t('An error occurred while logging in. Please try again later'));
    }
  };
  

  return (
    <div className="login-wrapper">
      <div className="w-[400px] items-center p-5 shadow-lg rounded-lg mx-auto border border-solid">
        <h3 className="text-lg font-semibold mb-4">{t("Sign in")}</h3>
        <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
          <Form.Item name="username" label="Username" rules={[{ required: true }]}>
            <Input allowClear/>
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password allowClear/>
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="isRobot">
            <div className="flex justify-between items-center p-3 rounded-lg border border-[#D5D9DD]">
              <div className="flex items-center">
                <input type="checkbox" />
                <span className="text-[#bbbbbb] font-medium ml-3 text-base">{t("I'm not a robot")}</span>
              </div>
              <img src={Captcha} alt="captcha image" />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="flex items-center">
              <input type="checkbox"/>
              <span className="text-base font-semibold ml-3">{t("Keep me signed in")}</span>
            </div>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="w-full text-white bg-main_color">Sign in</Button>
          </Form.Item>
          <p className="text-[#606E80] font-medium">{t("Don't have an account?")}<Link to={'/register'} className="text-main_color ml-2">{t("Register now")}</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
