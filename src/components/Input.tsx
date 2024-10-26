import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  invalid: boolean;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, invalid, ...props }: InputProps) => {
  let labelClassName = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClassName = 'w-full px-3 py-2 leading-tight border rounded shadow';

  if (invalid) {
    labelClassName += ' text-red-400';
    inputClassName += ' text-red-500 bg-red-100 border-red-300';
  } else {
    labelClassName += ' text-stone-300';
    inputClassName += ' text-gray-700 bg-stone-300';
  }

  return (
    <p>
      <label className={labelClassName}>{label}</label>
      <input className={inputClassName} {...props} />
    </p>
  );
};

export default Input;
