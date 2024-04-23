export default function InputField({ label, type, inputClass }) {
  const isTextArea = type === "textarea";
  const InputOrTextArea = isTextArea ? "textarea" : "input";

  return (
    <div className="relative z-0 bg-white w-full mb-6 group">
      <InputOrTextArea
        as={InputOrTextArea}
        name={`floating_${label}`}
        id={`floating_${label}`}
        className={`block ${
          isTextArea ? "" : "py-2.5"
        } pl-2 pr-0 w-full  text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer ${inputClass}`}
        placeholder=" "
        required
      />
      <label
        htmlFor={`floating_${label}`}
        className="peer-focus:font-medium absolute  text-gray-500 duration-300 transform translate-y-0 scale-100 top-3 left-2 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-green-600 peer-focus:-translate-y-7 peer-placeholder-shown:translate-y-0 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
}
