/* eslint-disable react/prop-types */

export default function Form({ type, children, ...props }) {
  return (
    <form
      className={`overflow-hidden bg-yellow-100 p-4 text-sm sm:p-6 lg:p-8 ${
        type !== "modal"
          ? "rounded-md border border-gray-200 bg-gray-50 p-6"
          : "w-[80rem]"
      } `}
      {...props}
    >
      {children}
    </form>
  );
}
