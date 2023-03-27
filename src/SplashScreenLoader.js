import React from "react";

const SplashScreenLoader = ({ anim, setIsLoading }) => {
  const turnOff = () => {
    setIsLoading(false);
  };

  return (
    <div
      onAnimationEnd={turnOff}
      id="splash"
      className={`loader-container ${anim}`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default SplashScreenLoader;
