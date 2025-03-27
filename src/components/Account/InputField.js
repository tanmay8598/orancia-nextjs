import React, { useState, useEffect } from "react";

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  maxLength,
  onInput,
  disabled = false,
  showEditButton = false, // 👈 Add this prop
}) => {
  const [isLocked, setIsLocked] = useState(disabled);

  // Sync with external disabled changes (optional, but cleaner)
  useEffect(() => {
    setIsLocked(disabled);
  }, [disabled]);

  return (
    <div className="mb-4 relative group">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={onInput}
        maxLength={maxLength}
        disabled={isLocked}
        className={`peer shadow appearance-none border ${error ? "border-red-700" : "border-gray-300"} rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isLocked ? "bg-gray-100 opacity-70 cursor-not-allowed" : "bg-white"}`}
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm bg-white px-1"
      >
        {label}
      </label>

      {/* Only for area */}
      {showEditButton && isLocked && (
        <button
          type="button"
          onClick={() => setIsLocked(false)}
          className="right-1 top-3 text-xs text-accent hover:underline"
        >
          🔓 Edit area
        </button>
      )}

      {error && <p className="text-red-700 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
