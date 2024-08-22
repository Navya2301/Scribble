import React, { useEffect } from 'react';
import './loader.css'; // Assuming your CSS is in the same directory

const Loader = () => {
  useEffect(() => {
    // Wait until the window is fully loaded
    window.onload = function() {
      const loader = document.getElementById('loader');
      const content = document.getElementById('content');

      // Add a small delay to showcase the animation (optional)
      setTimeout(() => {
        if (loader) loader.style.display = 'none'; // Hide the loader
        if (content) content.style.display = 'block'; // Show the main content
      }, 3000); // Adjust delay as needed
    };
  }, []);

  return (
    <div id="loader">
      <div id="loader-text">scribbles</div>
    </div>
  );
};

export default Loader;
