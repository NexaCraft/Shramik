// Utility to merge class names
function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Simple variant class handler
function getBadgeClasses(variant = "default") {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const variants = {
    default:
      "border-transparent bg-orange-600 text-white hover:bg-orange-500",
    secondary:
      "border-transparent bg-blue-600 text-white hover:bg-blue-500",
    destructive:
      "border-transparent bg-red-600 text-white hover:bg-red-500",
    outline: "text-gray-900 border-gray-300 hover:bg-gray-100",
  };

  return mergeClasses(base, variants[variant] || variants.default);
}

function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={mergeClasses(getBadgeClasses(variant), className)}
      {...props}
    />
  );
}

export { Badge };