function User({id, name, email, username}) {
    return (
        <div className='contactsIn'>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Username: {username}</div>
        </div>
    );
}

export default User;