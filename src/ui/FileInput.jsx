/* eslint-disable react/prop-types */

export default function FileInput({ props }) {
  return (
    <input
      type="file"
      className={`file:font-inherit file:text-brand-50 file:bg-brand-600 hover:file:bg-brand-700 rounded-sm text-sm file:mr-3 file:cursor-pointer file:rounded-sm file:border-none file:px-3 file:py-2 file:font-medium file:transition-colors file:duration-200`}
      {...props}
    />
  );
}
