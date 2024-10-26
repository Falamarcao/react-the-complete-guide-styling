import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

interface LabelProps {
  $invalid: boolean;
}

const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
`;

interface InputFieldProps {
  $invalid: boolean;
}

const InputField = styled.input<InputFieldProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;

  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  ${({ $invalid }) =>
    $invalid
      ? `
  color: #ef4444;
  border-color: #f73f3f;
  background-color: #fed2d2;
  `
      : `
  color: #374151;
  border: 1px solid transparent;
  background-color: #d1d5db;
  `}
`;

interface InputProps {
  label: string;
  invalid: boolean;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, invalid, ...props }: InputProps) => {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <InputField $invalid={invalid} {...props}></InputField>
    </p>
  );
};

export default Input;
