import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsChevronDown, BsList } from 'react-icons/bs';
import { useAuth } from './AuthenticationContext';
import { useState, useRef, useEffect } from 'react';

function NavbarSection() {
  const { isLoggedIn, logout, userName } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setShowDropdown(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar-form">
      {/* Hamburger icon (only visible on mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <BsList size={28} />
      </div>

      {/* Nav links - collapsible */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link className="nav-link-custom" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="nav-link-custom" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </div>

      {/* Logo */}
      <Link to="/" className="logo">
        <span className="skytour-color">SkyTour</span>
      </Link>

      {/* Auth section */}
      <div className="auth-section">
        {!isLoggedIn ? (
          <Link className="sign-up" to="/signup">
            <BsFillPersonFill /> Sign up
          </Link>
        ) : (
          <div className="user-dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="sign-up dropdown-toggle">
              <BsFillPersonFill /> {userName} <BsChevronDown />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={logout}>Log out</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarSection;
