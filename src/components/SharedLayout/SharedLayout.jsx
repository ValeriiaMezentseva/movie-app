import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link, IconHome, IconMovies } from "./SharedLayout.styled";
import { Loader } from "components/Loader/Loader";


const SharedLayout = () => {
    return (
         <Container>
      <Header> 
        <nav>
          <Link to="/" end> <IconHome/> Home</Link>
          <Link to="movies"> <IconMovies/>Movies</Link>
        </nav>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container> 
    );
};
export default SharedLayout;