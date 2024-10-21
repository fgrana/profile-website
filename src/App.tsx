import { createRef, FC } from "react";
import {
  createBrowserRouter,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/Aboutme";
import Experience from "./pages/Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Projects from "./pages/Projects";

interface Route {
  path: string;
  name: string;
  element: JSX.Element;
  nodeRef: React.RefObject<HTMLDivElement>;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/experience",
    name: "Experience",
    element: <Experience />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/aboutme",
    name: "About me",
    element: <About />,
    nodeRef: createRef<HTMLDivElement>(),
  },
];

const App: FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <Navbar bg="light">
        <Nav className="mx-auto">
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              end
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {() => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

export default Router;
