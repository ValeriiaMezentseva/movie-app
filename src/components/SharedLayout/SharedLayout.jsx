import { Outlet } from "react-router-dom";
import { Suspense, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';


import { Loader } from "components/Loader/Loader";

import { toggleTheme } from "redux/theme/themeSlice";
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";

import Logo from "components/Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";


import {
  Container,
  MainContainer,
  Header,
  Link,
  Nav,
  IconHome,
  IconMovies,
  IconTV,
  IconFav,
  IconWatchList,
  Collection, 
  Footer,
  FooterText,
  MobileMenuButton,
  Menu,
  MobileMenuIcon, 
} from "./SharedLayout.styled";


const SharedLayout = () => {
  const dispatch = useDispatch(); 
  const [toggleMenu, setToggleMenu] = useState(false);
  
  
   const toggleMenuHandler = () => {
    return setToggleMenu(prevState => !prevState);
   };
  

  const { darkTheme } = useSelector(state => state.theme);

    const themeToggleHandler = () => {
    dispatch(toggleTheme());
  };
    

  return (
      <Container>
        <Header>
          <Nav>
          <Logo />
          <Menu>
            <Link to="/" end>
              <IconHome /> Home
            </Link>
            <Link to="movies">
              <IconMovies /> Movies
            </Link>
            <Link to="series">
              <IconTV /> TV Series
            </Link>
            </Menu>
          </Nav>
          <Collection>
             <Link to="watchlist">
              <IconWatchList /> Watchlist
          </Link>
           <Link to="favorites">
              <IconFav /> Favorites
            </Link>
           
            <ThemeToggler status={darkTheme} onClick={themeToggleHandler} />
        </Collection>

         <MobileMenuButton type="button" onClick={toggleMenuHandler}>
          <MobileMenuIcon />
        </MobileMenuButton>

      </Header>

      {toggleMenu && (
        <MobileMenu isOpen={toggleMenu} toggleMenuHandler={toggleMenuHandler}/>
      )}
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        </MainContainer>
         <Footer>
      <FooterText>
        <span>© 2023 | All Rights Reserved | </span>
        <span> Terms of Service</span>
      </FooterText>
    </Footer>
      </Container>
  ); 
};
export default SharedLayout;