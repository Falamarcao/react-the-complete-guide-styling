import { ButtonHTMLAttributes, ReactNode } from 'react';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const TextButton = ({ children, ...props }: TextButtonProps) => {
  return (
    <button
      type="button"
      className="text-amber-400 hover:text-amber-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default TextButton;
