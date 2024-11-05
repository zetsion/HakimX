/* eslint-disable react/prop-types */

const Select = ({ options, ...props }) => (
  <select
    className="rounded border border-gray-300 bg-gray-50 p-2 shadow-sm"
    {...props}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
