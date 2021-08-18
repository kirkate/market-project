import { h } from 'preact';
import { FormProvider } from './context';
import { useForm } from './hooks/useForm';

export const Form = ({
  children, initialValues, validations, onSubmit, className,
}) => {
  const { handleSubmit, ...formContext } = useForm({ initialValues, validations, onSubmit });
  return (
    <FormProvider value={formContext}>
      <form onSubmit={handleSubmit} class={className}>
        {children}
      </form>
    </FormProvider>
  );
};
