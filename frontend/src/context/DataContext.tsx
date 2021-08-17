import { h, createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const setDataValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (<DataContext.Provider value={{ data, setDataValues }}>{children}</DataContext.Provider>);
};

export const useData = () => useContext(DataContext);
