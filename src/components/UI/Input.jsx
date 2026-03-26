function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  className = "",
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex-1 m-3 px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700 ${className}`}
    />
  );
}

export default Input;