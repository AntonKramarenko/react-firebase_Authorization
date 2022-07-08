import React, { useEffect, useRef, useState } from 'react'

export const Form = ({title, handleClick}) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const inputRef = useRef()

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

  return (
    <div className='formInputs'>
        <input 
            ref={inputRef}
            className='formInputs__input'
            type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
        />
        <input 
            className='formInputs__input'
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
        <button className='formInputs__btn' onClick={() => handleClick(email, password)} >{title}</button>
    </div>
  )
}
