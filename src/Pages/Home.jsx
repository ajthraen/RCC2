import React, {useEffect, useState} from 'react'
import axios from 'axios'
import User from '../Components/User.jsx'
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    function renderUsers() {
        return users.map((user) => (
                <Link className='contacts' to={`/users/${user.id}`} key={user.id}>
                    <User
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        username={user.username}
                    />
                </Link>
            ))
    }

    function renderLoading() {
        return <h1>Loading...</h1>
    }

    const pixels = "3px";

    return (
        <div className='contactsWrap'>
            {users.length ? renderUsers(): renderLoading()}
        </div>
    );
}

export default Home;