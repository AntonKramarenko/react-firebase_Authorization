import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../store/userSlise'


export const HomePage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    return isAuth ? (
        <div className='page'>
            <h1 className='title'>Welcome</h1>
            <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}
