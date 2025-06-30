import * as React from "react";

const Label = React.forwardRef(({ className, ...props }, ref) => {
  const baseClasses = "text-sm font-medium leading-none";
  
  return (
    <label
      ref={ref}
      className={`${baseClasses} ${className || ''}`}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };