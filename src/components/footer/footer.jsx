import "../styles/main.css";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <footer className="footer">
        <h2>
            Designed and Developed by
            <Link className="name-tag h2" to="https://kumarharsh.netlify.app/"> harsh </Link>
        </h2>
    </footer>
        </>
    )
}
export {Footer}