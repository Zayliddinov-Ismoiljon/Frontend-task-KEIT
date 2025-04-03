import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import RoutesMiddleware from "./routes/routesMiddleware";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});


function App() {

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
