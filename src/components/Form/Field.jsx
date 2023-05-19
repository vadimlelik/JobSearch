import React from "react";
import styles from "./Form.module.css";

const Field = ({ label, type, name, value, onChange, placeholder }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="">
      <label htmlFor={name} className={styles.FieldLabel}>
        {label}
      </label>
      <div className="">
        <input
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={styles.Field}
        />
      </div>
    </div>
  );
};

export default Field;
