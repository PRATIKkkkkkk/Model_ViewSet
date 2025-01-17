import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [user, setUser] = useState([])

    async function fetchUser(){
        let result = await axios.get('http://localhost:8000/stu/', {
            'headers': {
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
        // console.log(result.data)
        setUser(result.data)
    }

    useEffect(()=>{fetchUser()}, [])

  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>Roll:</th>
                <th>Name:</th>
                <th>Std:</th>
                <th>Marks:</th>
                <th>Action:</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map(obj=>{
                    return(
                        <tr>
                            <td>{obj.roll}</td>
                            <td>{obj.name}</td>
                            <td>{obj.std}</td>
                            <td>{obj.marks}</td>
                            <td>
                                <NavLink to={`/user/update/${obj.id}`} className='btn btn-outline-warning btn-sm me-3'>Update</NavLink>
                                <NavLink to={`/user/delete/${obj.id}`} className='btn btn-outline-danger btn-sm me-3'>Delete</NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default Show