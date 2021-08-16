import { useContext } from 'preact/hooks';
import { createContext } from 'preact';
const formContext = createContext(null);
export const FormProvider = formContext.Provider;
export const useFormContext = () => useContext(formContext);
