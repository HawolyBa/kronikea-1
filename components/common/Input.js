import React from 'react'

const InputGroup = ({title, type, placeholder, required}) => {
  return (
    <div class='w-full md:w-full px-3 mb-6'>
        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>{title}</label>
        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type={type} placeholder={placeholder}  required={required}/>
    </div>
  )
}

export default InputGroup
