import { h, createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
    // const dataFormContext = useContext(DataContext);
    const setDataValues = (values) => {
        setData((prevData) => ({
            ...prevData,
            ...values,
        }));
    };
    // console.log('dataFormContext', dataFormContext);
    return (h(DataContext.Provider, { value: { data, setDataValues } }, children));
};
export const useData = () => useContext(DataContext);
