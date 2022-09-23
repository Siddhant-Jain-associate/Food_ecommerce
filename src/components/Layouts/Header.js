import Meals from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => (
  <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <button type="submit">Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={Meals} alt="Come to have a taste a varities of Delicious Food" />
    </div>
  </>
);

Header.propTypes = {};

export default Header;
