import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
{/*           <span role="img" aria-label="computer icon">
            💻
          </span>{" "} */}
          Phonebook
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/login">Log in</Link>
          <Link to="/signin">Sign in</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
