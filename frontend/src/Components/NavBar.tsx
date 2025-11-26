import Button from "./Button";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar-left">Aaron Rajan</h1>
            <div className="navbar-right">
                <Button someText='Home' link='/'></Button>
                <Button someText='Experience' link='/experience'></Button>
                <Button someText='Projects' link='/projects'></Button>
            </div>
        </div>
    );
}

export default NavBar;