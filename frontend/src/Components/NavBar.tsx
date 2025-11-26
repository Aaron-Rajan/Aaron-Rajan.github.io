import Button from "./Button";
import "../styles/NavBar.css";
import Resume from "../assets/Resume.pdf";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar-left">Aaron Rajan</h1>
            <div className="navbar-right">
                <Button someText='Home' link='/'></Button>
                <Button someText='Experience' link='/experience'></Button>
                <Button someText='Projects' link='/projects'></Button>
                <Button someText='Resume' link={Resume}></Button>
            </div>
        </div>
    );
}

export default NavBar;