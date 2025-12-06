type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function TextInput({
  label,
  name,
  value,
  onChange,
  required = false,
}: TextInputProps) {
  return (
    <>
      {" "}
      <div className="mb-4">
        <label htmlFor={name} className="block">
          {label}
        </label>
        <input
          type="text"
          name={name}
          className="border border-black rounded-lg"
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </>
  );
}
