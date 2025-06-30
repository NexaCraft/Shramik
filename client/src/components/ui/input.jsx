import * as React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const baseClasses = "flex h-10 w-full rounded-md border px-3 py-2";
  
  return (
    <input
      type={type}
      className={`${baseClasses} ${className || ''}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };