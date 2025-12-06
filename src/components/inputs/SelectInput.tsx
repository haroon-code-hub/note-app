type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
};

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
}: TextInputProps) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="block">
          {label}
        </label>
        <select
          name={name}
          className="border border-black rounded-lg"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <>
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </>
  );
}
