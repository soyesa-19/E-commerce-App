const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  inputClass,
  containerClass,
  label,
  error,
  onBlur,
  touched,
}) => {
  return (
    <div className={containerClass}>
      <label className=" text-brandDark text-base font-normal" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched?.[name] && error?.[name] ? (
        <div className=" text-brandRed text-sm font-light">{error[name]}</div>
      ) : null}
    </div>
  );
};

export default Input;
