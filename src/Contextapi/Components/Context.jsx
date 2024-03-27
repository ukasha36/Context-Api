import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
  const [show, Setshow] = useState(false);
  const [user , Setuser] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        user ,
        Setuser,
        show,
        Setshow
      }}
    >

        {children}

    </GlobalContext.Provider>
  );
};

export default AppContext;
