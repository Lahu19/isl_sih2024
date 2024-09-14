import "./Navbar.css";
import isl_Logo from '/images/isl logo 1.png'
function Navbar() {
  return (
    <>
      <nav>
          <img src={isl_Logo} className="logoImg"></img>
        <div>
          <ul className="navbar">
          <li>
              <a href="/">Sign to Text</a>
            </li>
            <li>
              <a href="/texttosign">Text to Sign</a>
            </li>
            <li>
              <a href="/learnmodule">Learn Gestures</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a href="#">Languages </a>
            </li>
            <li style={{marginLeft: 500}}>
              <a href="/auth/account">Account</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;