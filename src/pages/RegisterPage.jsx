import React from 'react'
import { Link } from 'react-router-dom'
import { SingUp } from '../components/SingUp'

export const RegisterPage = () => {
    return (
        <div className='page'>
            <h1 className='title'>Register</h1>
            <SingUp/>
            <p>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    )
}
