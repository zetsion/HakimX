/* eslint-disable react/prop-types */

export default function FormRow({ label, error, children }) {
  return (
    <div
      className={`grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 ${error ? "border-b border-gray-200" : ""} ${children?.type === "button" ? "mt-4 flex justify-end gap-0" : ""} `}
    >
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}
