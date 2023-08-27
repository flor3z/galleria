import React from 'react';

function ErrorDisplay() {
  return (
    <div className="flex flex-wrap justify-center content-center items-center pt-40 md:pt-60 font-raleway text-xl md:text-4xl animate-fade-up">
      <p className="flex flex-wrap justify-center items-center content-center">
        Please check your network or search query
      </p>
    </div>
  );
}

export default ErrorDisplay;
