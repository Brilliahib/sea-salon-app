// components/input/input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`rounded-md placeholder:text-sm border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
      {...props}
    />
  );
};

export default Input;
