export const FormField = ({ id, name, type, label, placeholder, required }) => (
  <div className="input-group">
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
    <label htmlFor={id} className={required ? "required" : ""}>
      {label}
      {required && <sup style={{ color: "red" }}>*</sup>}
    </label>
  </div>
);
