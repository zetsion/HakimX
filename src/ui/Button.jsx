/* eslint-disable react/prop-types */

export default function Button({
  size = "medium",
  variation = "primary",
  type = "submit",
  children,
  ...props
}) {
  const sizeClasses = {
    small: "text-xs px-2 py-1 uppercase font-semibold text-center",
    medium: "text-sm px-4 py-3 font-medium",
    large: "text-base px-6 py-3 font-medium",
  };

  const variationClasses = {
    primary: "bg-teal-100 text-brand-50 bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-grey-600 bg-red-100 border border-grey-200 hover:bg-grey-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      type={type}
      className={` ${sizeClasses[size]} ${variationClasses[variation]} m-5 w-1/2 rounded-md border-none sm:w-auto`}
      {...props}
    >
      {children}
    </button>
  );
}
