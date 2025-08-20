/**
 * This is a FormField component that shows an input and a label.
 * @component
 * @param props - Component props.
 * @param id - id for the input (if not given, uses name)
 * @param name - name for the input
 * @param type - type of input (like text, email, etc.)
 * @param label - label for the input
 * @param placeholder - placeholder text
 * @param required - if the input is required
 * @param asteriskRequired - if true, shows a red * for required fields
 * @returns return a input field with a label
 */

export const FormField = ({
  id,
  name,
  type,
  label,
  placeholder,
  required,
  asteriskRequired,
}) => (
  <div className="input-group">
    <input
      type={type}
      name={name}
      id={id ?? name}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
    />
    <label htmlFor={id ?? name} className={required ? "required" : ""}>
      {label}
      {required && asteriskRequired && <sup style={{ color: "red" }}>*</sup>}
    </label>
  </div>
);
