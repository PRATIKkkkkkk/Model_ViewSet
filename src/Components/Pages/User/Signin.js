import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Signin() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data){
        axios.post('http://localhost:8000/token/', data).then((respose)=>{
            sessionStorage.setItem('token', respose.data.token)
            console.log(respose.data.token)
        }).catch((err)=>{
            console.log(err.response)
        })
        navi('/user/add')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
        <label htmlFor='un'>ENter Username:</label>
        <input type='text' id='un' className='form-control' {...register('username')} />
        <br />
        <label htmlFor='password'>ENter Password:</label>
        <input type='password' id='password' className='form-control' {...register('password')} />
        <br />
        <input type='submit' />
    </form>
    </>
  )
}

export default Signin