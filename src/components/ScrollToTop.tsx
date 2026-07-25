import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does not reset scroll position on navigation (unlike traditional
// multi-page sites). Without this, clicking a link/button to a new route keeps
// whatever scroll offset the previous page was at, instead of opening from the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
