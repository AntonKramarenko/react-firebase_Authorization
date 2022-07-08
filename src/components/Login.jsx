import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { setUser } from '../store/userSlise'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogin =(email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) =>{
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
            navigate('/')
          })
          .catch(() => alert('Invalid user'))
    }

  return (
    <div>
        <Form
            title='sing in'
            handleClick={handleLogin}
        />
    </div>
  )
}
