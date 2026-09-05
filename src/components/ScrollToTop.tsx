import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does not reset scroll position on navigation (unlike traditional
// multi-page sites). Without this, clicking a link/button to a new route keeps
// whatever scroll offset the previous page was at, instead of opening from the top.
// A hash (e.g. footer links like /#why-it-matters) is scrolled to instead of the top.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
