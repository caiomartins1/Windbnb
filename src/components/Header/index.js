import logo from '../../assets/logo.png';
import SearchBox from '../SearchBox';

import './index.css';

function Header() {
  return (
    <div className="header">
      <header className="header-container">
        <img src={logo} alt="Windbnb" className="header-logo" />
        <SearchBox />
      </header>
    </div>
  );
}

export default Header;
