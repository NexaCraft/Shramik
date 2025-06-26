// Utility to merge class names
function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Simple variant class handler
function getBadgeClasses(variant = "default") {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
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
