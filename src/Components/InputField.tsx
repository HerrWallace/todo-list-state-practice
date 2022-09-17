type InputFieldProps = {
  text: string;
  handleInput(text: string): void;
  handleSubmit: () => void;
};

export const InputField = ({
  text,
  handleInput,
  handleSubmit,
}: InputFieldProps) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button className='button' onClick={handleSubmit}>
        Add Todo
      </button>
    </label>
  );
};
