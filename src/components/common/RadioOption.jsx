/**
 * RadioOption component renders a radio button with an associated label.
 *
 * @component
 * @param props - Component props.
 * @param {string} props.id - Unique identifier for the input element.
 * @param {string} props.name - Name attribute to group radio buttons.
 * @param {string} props.value - Value assigned to the radio button.
 * @param {string} props.label - Display text for the radio button.
 * @returns {JSX.Element} The rendered radio button option.
 */

export const RadioOption = ({ id, name, value, label }) => (
  <div className="radio-btn">
    <input id={id} type="radio" name={name} value={value} required />
    <span>{label}</span>
  </div>
);
