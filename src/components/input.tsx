const Input = ({labelName}:{labelName:string}) => {
  return (
    <div>
      <label htmlFor={ labelName} className="block text-lg font-normal  text-gray-900">
        {labelName}
      </label>
      <div className="relative rounded-md shadow-sm">
        {
          labelName !== "Message" ?
            <input
              id={labelName}
              name={labelName}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            :
            <textarea rows={3} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none" placeholder="Write your message here...">
            </textarea>
        }
      </div>
    </div>
  )
}
export default Input;