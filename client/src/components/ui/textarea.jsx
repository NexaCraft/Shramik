import * as React from "react";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const baseClasses = "flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm";
  
  return (
    <textarea
      className={`${baseClasses} ${className || ''}`}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };