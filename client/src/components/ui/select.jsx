import * as React from "react";
import { ChevronDown, Check } from "lucide-react";

const Select = ({ children, value, onChange }) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="relative w-full">
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            children: selectedValue || child.props.children
          });
        }
        if (child.type === SelectContent) {
          return React.cloneElement(child, {
            onSelect: handleSelect
          });
        }
        return child;
      })}
    </div>
  );
};

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const baseClasses = "flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm";
  
  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${className || ''}`} 
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </div>
  );
});

const SelectContent = React.forwardRef(({ children, onSelect, ...props }, ref) => {
  const baseClasses = "absolute z-50 w-full border rounded-md bg-white shadow-lg";
  
  return (
    <div ref={ref} className={baseClasses} {...props}>
      {React.Children.map(children, (child) => 
        child.type === SelectItem 
          ? React.cloneElement(child, {
              onClick: () => onSelect && onSelect(child.props.value)
            })
          : child
      )}
    </div>
  );
});

const SelectItem = React.forwardRef(({ children, value, ...props }, ref) => {
  const baseClasses = "px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center";
  
  return (
    <div 
      ref={ref} 
      className={baseClasses} 
      {...props}
    >
      {props.selected && <Check className="h-4 w-4 mr-2" />}
      {children}
    </div>
  );
});

const SelectValue = ({ children }) => children;

const SelectGroup = ({ children }) => (
  <div className="border-b last:border-b-0">{children}</div>
);

const SelectLabel = ({ children, className }) => (
  <div className={`px-3 py-2 font-semibold text-sm ${className}`}>
    {children}
  </div>
);

const SelectSeparator = () => (
  <div className="h-px bg-gray-200 my-1"></div>
);

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
};