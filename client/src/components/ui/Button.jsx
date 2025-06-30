const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses = {
  default: "bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline:
    "border border-gray-300 hover:bg-gray-100 text-gray-900 focus:ring-gray-500",
  secondary: "bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-500",
  ghost: "hover:bg-gray-100 text-gray-900 focus:ring-gray-500",
  link: "text-orange-600 hover:underline focus:ring-orange-500",
};

const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-0",
};

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
