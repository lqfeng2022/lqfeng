import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // PUSH, POP, REPLACE
  const scrollPositions = useRef<Record<string, number>>({});

  // Dynamically get navbar height
  const navbarHeight = 80; // replace with your actual navbar height in px

  // Restore scroll on route change
  useEffect(() => {
    if (navType === "POP") {
      // Back/forward → restore previous scroll
      const saved = scrollPositions.current[pathname] ?? 0;
      window.scrollTo({ top: Math.max(saved - navbarHeight, 0), behavior: "instant" as ScrollBehavior });
    } else {
      // New navigation → scroll to top
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, navType, navbarHeight]);

  // Save scroll position on unmount / navigation
  useEffect(() => {
    return () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;