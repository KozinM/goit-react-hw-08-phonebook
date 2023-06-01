import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./Layout.styled";
import { useAuth } from "hooks/useAuth";
import { UserMenu } from "components/UserMenu/UserMenu";

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <Logo>
{/*           <span role="img" aria-label="computer icon">
            💻
          </span>{" "} */}
          Phonebook
          {isLoggedIn ? <UserMenu /> : <></>}
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
