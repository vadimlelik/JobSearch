import styles from "./Form.module.css";
const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  return (
    <div className={styles.SelectFieldWrapper}>
      <label htmlFor={name} className={styles.FieldLabel}>
        {label}
      </label>
      <select
        className={styles.SelectField}
        id={name}
        name={name}
        value={value}
        placeholder="Выберете отрасль"
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray?.length > 0 &&
          optionsArray.map((option) => (
            <option
              value={option.key}
              key={option.key}
              className={styles.Option}
            >
              {option.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
