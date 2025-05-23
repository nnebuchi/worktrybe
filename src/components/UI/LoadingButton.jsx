/* eslint-disable react/prop-types */
import { useState } from 'react';
// import loader from '/gifs/'; // A

const LoadingButton = ({ onClick, children, classes }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick(); // Run the passed function
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`${classes} disabled:opacity-50`}
    >
      {/* {loading ? (
        <img src="/gifs/three_dots_loader.gif" alt="Loading..." className="h-5 w-5 mx-auto" />
      ) : (
        children
      )} */}
      {children}
    </button>
  );
};

export default LoadingButton;
