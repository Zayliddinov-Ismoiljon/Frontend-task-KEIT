import { Menu } from "antd";
import { sidebar_routes } from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactNode, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Logo from "../../assets/images/logo.png"

const createComponent = (Component: any, size: number): ReactNode => {
  return (
    <>
      <Component size={size} />
    </>
  );
};

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);
  const [collapsed, setCollapsed] = useState(false); 

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev); 
  };

  const menuItems = sidebar_routes.filter((menu) => menu.config.isMenu).map((menu) => {
      if (menu?.submenu?.length) {
        return {
          key: menu.path,
          label: t(menu.name),
          children: menu.submenu.filter((submenu) => submenu.config.isMenu).map((submenu) => ({
              key: submenu.path,
              label: (
                <Link key={submenu.name} to={submenu.path} className="flex items-center" >
                  {createComponent(submenu.config.icon, 20)}
                  {!collapsed && <span className="ml-2">{t(submenu.name)}</span>}
                </Link>
              ),
            })),
        };
      }
      return {
        key: menu.path,
        label: (
          <Link key={menu.name} to={menu.path} className="flex items-center" >
            {createComponent(menu.config.icon, 20)}
            {!collapsed && <span className="ml-2">{t(menu.name)}</span>}
          </Link>
        ),
      };
    });

  return (
    <div className={` py-6 px-1 transition-all duration-300 ${ collapsed ? "w-[80px] px-0" : "w-[350px]" } bg-[#FFF]`}>
      <div className={collapsed ? 'flex justify-center' : 'flex justify-end pr-4'}>
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none bg-[#07DA83] w-[40px] h-[40px] rounded-[50%] p-2" ><MdKeyboardArrowLeft size={24} color="white" /></button>
      </div>

      <img
        src={Logo}
        alt="logo"
        loading="lazy"
        className={`mx-auto mb-5 ${collapsed ? "w-[50px] h-[50px] mt-5" : "w-[150px] h-[150px]"} transition-all duration-300`}
      />

      <Menu
        mode="inline"
        items={menuItems}
        selectedKeys={selectedKeys}
        inlineCollapsed={collapsed} 
        className="sidebar-menu"
      />
    </div>
  );
};

export default Sidebar;
