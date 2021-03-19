const InputComponent = ({placeholder, value, name, onChange, type}) => (
  <div class=" relative mt-6">
    <label for="name-with-label" class="text-gray-700 mb-8">
      {name}
      <span class="text-red-500 required-dot">*</span>
    </label>
    <input
      id="rounded-email"
      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      type={type}
    />
  </div>
)

export default InputComponent
