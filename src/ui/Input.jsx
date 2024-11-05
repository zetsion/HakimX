/* eslint-disable react/prop-types */

export default function Input(props, type) {
  return (
    <input
      type={type}
      className="w-full rounded-md border border-gray-300 p-2"
      {...props}
    />
  );
}
