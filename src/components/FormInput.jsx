import React from "react";

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  setQuery,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input input-bordered capitalize"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
