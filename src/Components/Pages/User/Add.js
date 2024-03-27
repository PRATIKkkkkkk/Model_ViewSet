import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Add() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data) {
        axios.post('http://localhost:8000/stu/', data, {
            'headers': {
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
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

export default Add