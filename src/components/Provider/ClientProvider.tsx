"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";

interface ClientProviderProps {
    children: React.ReactNode;
    store: typeof store;
  }

 const ClientProvider:React.FC<ClientProviderProps> = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
}

export default ClientProvider;
