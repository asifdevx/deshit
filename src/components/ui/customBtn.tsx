import React from 'react'

const CustomBtn = ({text,type,handleclick,othercss,icon}:CusomBtnProps) => {
  return (
    <button onClick={handleclick} className={` ${othercss}`} type={type}>
      {icon ? (
        <>
          {text} {icon}
        </>
      ) : (
        text
      )}
    </button>
  )
}

export default CustomBtn