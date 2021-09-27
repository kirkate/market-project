import { useFormContext } from './context';

export function ConditionalSection({ name, value, children }) {
  const { values } = useFormContext();
  if (values[name] === value) {
    return children;
  }

  return null;
}
