import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Preline = () => {
  const location = useLocation();

  useEffect(() => {
    const initializePreline = async () => {
      const preline = await import("preline");
      preline.HSStaticMethods.autoInit();
    };

    initializePreline();
  }, [location.pathname]);

  return null;
};

export default Preline;
