import * as React from "react";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  const baseClasses =
    "h-4 w-4 rounded-sm border appearance-none cursor-pointer";
  const checkedClasses = "bg-blue-500 border-blue-500 text-white";

  return (
    <div className="relative inline-block">
      <input
        type="checkbox"
        ref={ref}
        className={`
          ${baseClasses} 
          ${props.checked ? checkedClasses : "bg-white"}
          ${className || ""}
        `}
        {...props}
      />
      {props.checked && (
        <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-3 w-3" />
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
