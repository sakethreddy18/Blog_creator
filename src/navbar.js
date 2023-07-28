import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog Creater</h1>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
                    
        </nav>
     );
}
 
export default Navbar;