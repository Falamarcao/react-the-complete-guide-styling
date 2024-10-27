import { ButtonHTMLAttributes } from 'react';

// import { ReactNode } from 'react';
// interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
//   children: ReactNode;
// }

const TextButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
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
