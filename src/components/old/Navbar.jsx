import { Button } from './Button';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [] );

  window.addEventListener('resize', showButton);

  return (
  <>
    <nav className='navbar'>
     <div className='navbar-container'>
       <Link to="/" className='navbar-logo' onClick= {closeMobileMenu}>
        MetaNews<i className='fab fa-phabricator' />
       </Link>
       <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         <li className='nav-item'>
           <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
            News
           </Link>
         </li>
         <li className='nav-item'>
           <Link to='/articles' className='nav-links' onClick={closeMobileMenu}>
            Articles
           </Link>
         </li>
         <li className='nav-item'>
           <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
            Resources
           </Link>
         </li>
         <li className='nav-item'>
           <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
            Sign Up
           </Link>
         </li>
       </ul>
       {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
     </div>
    </nav>
  </>
  )
}

export default Navbar;