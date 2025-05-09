import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsChevronDown } from 'react-icons/bs';
import { useAuth } from './AuthenticationContext';
import { useState, useRef, useEffect } from 'react';

function NavbarSection() {
  const { isLoggedIn, logout, userName } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

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
      <div className="nav-links">
        <Link className="nav-link-custom" to="/">Home</Link>
        <Link className="nav-link-custom" to="/about">About</Link>
      </div>

      <Link to="/" className="logo">
        <span className="skytour-color">SkyTour</span>
      </Link>

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
