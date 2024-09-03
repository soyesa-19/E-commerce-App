const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  inputClass,
  containerClass,
  label,
}) => {
  return (
    <div className={containerClass}>
      <label className=" text-brandDark text-base font-normal" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
