import { NavLink } from "react-router-dom";
import logo from '../../assets/image/logo.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <div>
          <NavLink className={classes.header__catalog} to={'/catalog'}>Каталог товаров</NavLink>
        </div>
        <div >
          <img className={classes.header__logo} src={logo} alt="" />
        </div>
        <div>
          <NavLink className={classes.header__cart} to={'/cart'}>Корзина</NavLink>
        </div>
      </div>
    </header>
  )
};

export default Header;