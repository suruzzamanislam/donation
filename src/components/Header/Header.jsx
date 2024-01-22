import { NavLink } from 'react-router-dom';
import './nav.css';

const Header = () => {
  const Link = (
    <nav className="space-x-5 text-xl">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/donation">Donation</NavLink>

      <NavLink to="/statistics">Statistics</NavLink>
    </nav>
  );
  return (
    <div className="bg-base-300">
      <div className="navbar py-3 items-center max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <img src="/src/assets/Resources/Logo.png" />
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">{Link}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
