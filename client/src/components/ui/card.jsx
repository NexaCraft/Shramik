import React, { forwardRef } from "react";

// Simple class name merger
function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={mergeClasses(
        "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm",
        className
      )}
      {...props}
    />
  );
});

const CardHeader = forwardRef(function CardHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={mergeClasses("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});

const CardTitle = forwardRef(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      className={mergeClasses(
        "text-2xl font-semibold leading-none tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  );
});

const CardDescription = forwardRef(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={mergeClasses("text-sm text-gray-600", className)}
      {...props}
    />
  );
});

const CardContent = forwardRef(function CardContent({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={mergeClasses("p-6 pt-0", className)}
      {...props}
    />
  );
});

const CardFooter = forwardRef(function CardFooter({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={mergeClasses("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};