import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import RoutesMiddleware from "./routes/routesMiddleware";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "./config/axios";
import { MAIN_URL } from "./config/utils";
import { login } from "./store/user_slice";
import { getAboutMe } from "./store/about_me";
import LoadingComponent from "./components/main_loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});


function App() {
  const token = localStorage.getItem('access_token')
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      if (token && token?.length) {
        try {
          const response = await instance({
            url: `${MAIN_URL}/users/about_me`,
            method: 'POST',
            data: {},
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          dispatch(login(response && response.data));
          response?.data && dispatch(getAboutMe(response && response?.data))
        } catch (error) {
          console.error('User authentication failed', error);
          navigate('/login');
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    };

    checkUserAuthentication();
  }, [dispatch, token, loading]);

  if (loading) {
    return <LoadingComponent/>;
  }

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient} >
          <RoutesMiddleware/>
        </QueryClientProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
