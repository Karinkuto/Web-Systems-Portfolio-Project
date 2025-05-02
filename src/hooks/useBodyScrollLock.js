import { useEffect } from "react";

/**
 * Hook that prevents body scrolling when isLocked is true
 * @param {boolean} isLocked - Whether the body scroll should be locked
 */
export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]); // Re-run effect when isLocked changes
}
