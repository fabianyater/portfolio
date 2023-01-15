export default function Input({ type, label, name, icon, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-500 mb-2">
        {label}
      </label>
      <input type={type} id={name} placeholder={placeholder} className="transition-all bg-[#242424] p-3 focus:ring-indigo-500 h-11 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
    </div>
  )
}