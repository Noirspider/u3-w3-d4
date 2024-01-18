import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import {Link} from "react-router-dom"
const TopBar = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary mb-5">
        
          <Navbar.Brand className="m-0 ms-3 me-3 p-0" style={{width: "20%"}} href="/"><img src="https://europeanspaceflight.com/wp-content/uploads/2022/09/ES-Logo-Mobile-High-Res.png" alt="logo" style={{width: "100%"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="fs-4 nav-link mb-1" to="/">Home</Link>
              
             
            </Nav>
          </Navbar.Collapse>
      
      </Navbar>
    )
}
export default TopBar