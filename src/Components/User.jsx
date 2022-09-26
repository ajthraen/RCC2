function User({id, name, email, username}) {
    return (
        <div style={{ border: `2px solid black`}}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Username: {username}</div>
        </div>
    );
}

export default User;