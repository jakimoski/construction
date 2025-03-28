interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  rows?: number;
}

const inputClasses =
  "glass rounded-[20px] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-4 p-4 w-full  has-[input:focus-within]:outline-2 ";

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  required = false,
  rows,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        rows={rows}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={inputClasses}
      required={required}
    />
  );
};

export default Input;
