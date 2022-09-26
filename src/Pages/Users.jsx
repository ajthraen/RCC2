import {useParams} from 'react-router-dom'
// import React, {useEffect} from 'react'

function Users() {
    const {id} = useParams()
    return (
        <div>
            <h1 className='header'>{id}</h1>
            {/* <h1 className='header'>{username}</h1> */}
        </div>
    )
}

export default Users;