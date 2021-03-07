import logo from '../../assets/logo.png';
import './index.css';

function Header() {
  return (
    <div className="Header">
      <header className="header-container">
        <img src={logo} alt="Windbnb" />
        SEARCHBOX
      </header>
    </div>
  );
}

export default Header;
