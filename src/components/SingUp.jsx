import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { setUser } from '../store/userSlise'
import { useNavigate } from 'react-router-dom'

export const SingUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    
  const handleRegister =(email, password) => {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
          .then(({user}) =>{
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
            navigate('/')
          })
          .catch(() => alert('Invalid password or email'))
  }

return (
  <div>
      <Form
          title='register'
          handleClick={handleRegister}
      />
  </div>
)
}
