import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/themeSlice";
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";
import {
  MobileMenuBox,
  MobileMenuClose,
  MobileNav,
  Link,
  MobileMenuCloseIcon,
  ThemeButton,
} from "../SharedLayout.styled";

const MobileMenu = ({ isOpen, toggleMenuHandler }) => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => state.theme);

  const themeToggleHandler = () => {
    dispatch(toggleTheme());
  };

  const closeMenuHandler = () => {
    toggleMenuHandler();
  };

  return (
    <MobileMenuBox isOpen={isOpen}>
      <ThemeButton>
        <ThemeToggler status={darkTheme} onClick={themeToggleHandler} />
      </ThemeButton>
      <MobileMenuClose type="button" onClick={closeMenuHandler}>
        <MobileMenuCloseIcon />
      </MobileMenuClose>
      <MobileNav>
        <Link to="/" end onClick={closeMenuHandler}>
          Home
        </Link>
        <Link to="movies" onClick={closeMenuHandler}>
          Movies
        </Link>
        <Link to="series" onClick={closeMenuHandler}>
          TV Series
        </Link>
        <Link to="watchlist" onClick={closeMenuHandler}>
          Watchlist
        </Link>
        <Link to="favorites" onClick={closeMenuHandler}>
          Favorites
        </Link>
      </MobileNav>
    </MobileMenuBox>
  );
};

export default MobileMenu;