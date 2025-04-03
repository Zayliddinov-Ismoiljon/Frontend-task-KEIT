import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import { _routes, sidebar_routes } from ".";
import React, { ReactNode } from "react";
import NoLayout from "../components/layout/no_layout";

const RoutesMiddleware = () => {
  const isLoggedIn = true
  const createComponent = (Component: any): ReactNode => {
    return (
      <>
        <Component />
      </>
    );
  };

  if (isLoggedIn === true) {
    return (
      <Layout>
        <Routes>
          {sidebar_routes?.map((item) => {
            if (item?.submenu?.length && item?.config?.structure === "layout") {
              return item?.submenu?.map((element) => (
                <Route key={element?.path} path={element?.path} element={createComponent(element?.component)}/>
              ));
            }
            return <Route key={item?.path} path={item?.path} element={createComponent(item?.component)}/>
          })}
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout>
    );
  } 
    return (
      <NoLayout>
        <Routes>
          {_routes?.map((item) => {
              if (item?.submenu?.length && item?.config?.structure === "extraLayout") {
                return item?.submenu?.map((element) => (
                  <Route key={element?.path} path={element?.path} element={createComponent(element?.component)}/>
                ));
              }
              return <Route key={item?.path} path={item?.path} element={createComponent(item?.component)}/>
          })}
        </Routes>
      </NoLayout>
    );
  

};

export default React.memo(RoutesMiddleware);
