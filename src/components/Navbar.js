import { Link } from "react-router-dom"
import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg'



const Navbar = () => {
    return (
        <>
        <Container>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FoodCoaster </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <logo>
                        <Link className="nav-link logo" aria-current="page" to="/login/SignIn.js"><CgProfile/></Link>
                        </logo>
                    </div>
                </div>
            </nav>
            </Container>
        </>
  )
}

export default Navbar
const Container = styled.div`

.logo{
    background:none;
    font-size: 1.96rem;
    text-align: center;
    /* padding-bottom: px; */
    margin:-28px 14px;
    color: green;
    transition: all 0.09s ease-in-out 0.09s;
}
.logo:hover{
    font-size: 2.2rem;  
}
.nav-link{
    transition: all 0.1s all ease-in-out 0.1s;
}
.nav-link:hover{
    color: #198754;
    /* text-transform:uppercase; */
    text-shadow: 0 0 10px #198754,
    0 0 160px #198754,
    0 0 80px #198754;
}
`