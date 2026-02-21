import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Utility component that resets the window scroll position to the top
 * whenever the route changes.
 */
export default function ScrollToTop() {
    const [location] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}
