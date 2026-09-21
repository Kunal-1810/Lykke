import { useNavigate, Link } from "react-router-dom";
import logo from "./images/logo.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="top-bar">
      <Link to="/">
        <img src={logo} alt="travel LYKKE" className="logo" />
      </Link>

      <div className="top-bar-buttons">
        <button className="MyBookings" onClick={() => navigate("/bookings")}>
          <strong>My Bookings</strong>
        </button>
        <button className="Login" onClick={() => navigate("/login")}>
          <strong>Login</strong>
        </button>
        <button className="About" onClick={() => navigate("/about")}>
          <strong>About</strong>
        </button>
      </div>
    </header>
  );
}

export default Header;