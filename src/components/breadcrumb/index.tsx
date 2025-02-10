import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const pathnames = location.pathname.split("/").filter((x) => x); 
  const breadcrumbItems = [
    { title: <Link to="/">{t("Home")}</Link> }, 
    ...pathnames.map((value, index) => {
      const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`; 
      return { title: <Link to={pathTo}>{t(value.replace(/-/g, " "))}</Link> };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default BreadCrumb;
