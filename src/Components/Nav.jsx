import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav className='navBar'>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/users/Users1">Users1</Link>
            <Link className="links" to="/users/Users2">Users2</Link>
            <Link className="links" to="/users/Users3">Users3</Link>
            {/* <Link className="links" to="/users/"{user}>Contact</Link>
            <Link className="links" to="/users/"{user}>Contact</Link> */}

        </nav>
    )
}

export default  Nav;