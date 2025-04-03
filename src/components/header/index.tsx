import { Dropdown, MenuProps, Select, Space } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import flagEn from "../../assets/images/en.png";
import flagRu from "../../assets/images/ru.png";
import flagUz from "../../assets/images/uz.png";
import flagKo from "../../assets/images/ko.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../breadcrumb";

const Header = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={''}>{t("My information")}</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={''}>{t("Settings")}</Link>
      ),
      icon: '',
    },
    {
      key: '3',
      danger: true,
      label: <button onClick={handleLogout} className="w-full text-start">{t("Logout")}</button>,
    },
  ]; 

  const notification_items: MenuProps['items'] = [
    {
        label: <div className="flex items-center hover:text-blue-500">
          <IoDocumentAttachSharp size={22} color="#C8C8C8"/>
          <span className="ml-3">Ariza tasdiqlandi</span>
        </div>,
        key: '1',
    },
    {
        label: <div className="flex items-center hover:text-blue-500">
          <IoDocumentAttachSharp size={22} color="#C8C8C8"/>
          <span className="ml-3">Ariza tasdiqlandi</span>
        </div>,
        key: '2',
    },
    {
        label: <div className="flex items-center hover:text-blue-500">
          <IoDocumentAttachSharp size={22} color="#C8C8C8"/>
          <span className="ml-3">Ariza tasdiqlandi</span>
        </div>,
        key: '3',
    },
];

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  localStorage.setItem("i18lang", `${value?.value}`);
  i18next.changeLanguage(value.value);
};

  return (
    <div className={`bg-[#F5F6FA] p-4 flex justify-between items-center shadow-sm`}>
      <BreadCrumb/>
      <div className="flex items-center">
        <Select
          labelInValue
          style={{ width: 85, marginRight: '20px' }}
          defaultValue={localStorage.getItem("i18lang") ?? ("uz" as any)}
          onChange={handleChange}
          options={[
            {
              value: "uz",
              label: (
                <span className="flex items-center max-sm:text-xs"> <img src={flagUz} alt="flag" className="w-[25px] h-[20px] mr-2" />UZ</span>
              ),
            },
            {
              value: "en",
              label: (
                <span className="flex items-center max-sm:text-xs"><img src={flagEn} alt="flag" className="w-[25px] h-[20px] mr-2" />EN</span>
              ),
            },
            {
              value: "ru",
              label: (
                <span className="flex items-center max-sm:text-xs"> <img src={flagRu} alt="flag" className="w-[25px] h-[20px] mr-2" /> RU </span>
              ),
            },
            {
              value: "ko",
              label: (
                <span className="flex items-center max-sm:text-xs"> <img src={flagKo} alt="flag" className="w-[25px] h-[20px] mr-2" /> KO </span>
              ),
            },
          ]}
        />
        <Dropdown menu={{ items : notification_items }} placement="bottom" arrow={{ pointAtCenter: true }} className="mr-3">
          <IoIosNotificationsOutline size={28} color="#07DA83" className="hover:cursor-pointer hover:text-blue-500"/>
        </Dropdown>
        <Dropdown menu={{ items }}  className={`hover:cursor-pointer bg-white py-1 px-2 rounded-lg border border-[#E1E5EA]`}>
          <Space className="flex items-center">
            <FaUserCircle size={42} color="#C8C8C8"/>
            <div>
              <span>Zayliddinov Ismoiljon</span>
              <p className="block text-[12px] text-[#8E9BAC]">Admin</p>
            </div>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
