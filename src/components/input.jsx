import React from 'react'

const Input = ({name, value, label, onChange}) => {
  return (
    //for dynamic assigning
    <div className="mb-3">
        <label htmlFor="email">{label}</label>
        <input 
        oncChange ={onChange} 
        name={name}
        value={value} 
        id={name} 
        type="text" 
        className='form-control' />
    </div>
  )
}

export default Input
