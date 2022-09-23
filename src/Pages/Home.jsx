import React, {useEffect, useState} from 'react'
import axios from 'axios'

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

    return (
        <div className="header">
            {users.length > 0
                ? <h1>{users.length > 0 && users[0].name}</h1>
                : <h1>Loading...</h1>
            }
        </div>
    );
}

export default Home;