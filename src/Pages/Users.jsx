import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Users() {
    const {id} = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data)
    }

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div>
            <Link to="/">Go Back</Link>
            <p className='header'>{user.id}</p>
            <p className='header'>{user.name}</p>
            <p className='header'>{user.email}</p>
            <p className='header'>{user.username}</p>
        </div>
    )
}

export default Users;