import { useEffect } from "react";

const LifecycleHooks = () => {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <h2>Lifecycle with Hooks</h2>;
};

export default LifecycleHooks; // 
