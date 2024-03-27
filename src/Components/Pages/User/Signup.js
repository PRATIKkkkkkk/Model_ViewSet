import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data) {
        axios.post('http://localhost:8000/user/', data)
        navi('/user/signin')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
        <label htmlFor='un'>ENter Username:</label>
        <input type='text' id='un' className='form-control' {...register('username')} />
        <br />
        <label htmlFor='email'>ENter Email:</label>
        <input type='email' id='email' className='form-control' {...register('email')} />
        <br />
        <label htmlFor='password'>ENter Password:</label>
        <input type='password' id='password' className='form-control' {...register('password')} />
        <br />
        <input type='submit' />
    </form>
    </>
  )
}

export default Signup