import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {pk} = useParams()

    const {register, handleSubmit, setValue} = useForm()

    async function fetchUser(){
        let result = await axios.get(`http://localhost:8000/stu/${pk}/`, {
            'headers': {
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
        setValue('roll', result.data.roll)
        setValue('name', result.data.name)
        setValue('std', result.data.std)
        setValue('marks', result.data.marks)
    }

    useEffect(()=>{fetchUser()}, [])

    const navi = useNavigate()

    function saveUser(data){
        axios.put(`http://localhost:8000/stu/${pk}/`, data, {
            'headers': {
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveUser)} >
        <label htmlFor='r'>ENter Roll:</label>
        <input type='text' id='r' className='form-control' {...register('roll')} />
        <br />
        <label htmlFor='name'>ENter Name:</label>
        <input type='text' id='name' className='form-control' {...register('name')} />
        <br />
        <label htmlFor='std'>ENter Std:</label>
        <input type='text' id='std' className='form-control' {...register('std')} />
        <br />
        <label htmlFor='marks'>ENter Marks:</label>
        <input type='mumber' id='marks' className='form-control' {...register('marks')} />
        <br />
        <input type='submit' />
    </form>
    </>
  )
}

export default Update