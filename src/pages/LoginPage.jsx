import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components/Login'

export const LoginPage = () => {
    return (
        <div className='page'>
            <h1 className='title'>Login</h1>
            <Login />
            <p>
                Or <Link to='/register'>Register</Link>
            </p>
        </div>
    )
}
