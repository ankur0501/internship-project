export const RadioOption = ({ id, name, value, label }) => (
  <div className="radio-btn">
    <input id={id} type="radio" name={name} value={value} required />
    <span>{label}</span>
  </div>
);
