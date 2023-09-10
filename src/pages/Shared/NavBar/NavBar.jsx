import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.jpg';

const NavBar = () => {

  const navOptions = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/menu">Our Menu</Link></li>
  <li><Link to='/order/dessert'>Our Shop</Link></li>
  </>

  return (
    <>
      <div className="navbar absolute z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <img src={logo} className="w-28 md:w-40"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </>
  );
};

export default NavBar;