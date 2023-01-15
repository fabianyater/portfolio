import Input from "./input";

export default function Form() {
  return (
    <form className="m-auto bg-primary mt-5 md:w-1/2 rounded-lg ">
      <div className="p-7 flex flex-col gap-5">
        <Input type="text" label="Full Name" name="fullName" placeholder="Fullname" />
        <Input type="email" label="Email" name="email" placeholder="Email" />
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-500 mb-2">
            Message
          </label>
          <textarea id="area" placeholder="Message" rows={5} className="transition-all bg-[#242424] p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <buton className="w-52 text-center py-2 px-4 bg-[#242424] m-auto rounded-lg cursor-pointer">
          Send
        </buton>
      </div>
    </form>
  )
}