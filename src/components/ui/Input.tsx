import { cn } from '@/utils/cn'
import React from 'react'

const Input = ({ placeholder, name, type, value, handleChange,othercss }:InputProps) => {

  return (
    <input
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
      required
   onChange={ (e)=>handleChange(e)}
    className={cn("my-2 w-full rounded-full p-4 text-sm outline-none transition-all duration-300 ease-in-out",
    "bg-[#27262B] text-white placeholder:text-[#8E8B8B]",
    "focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#27262B]"
    ,othercss)}
  />
  )
}

export default Input