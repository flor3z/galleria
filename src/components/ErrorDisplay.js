import React from 'react';

function ErrorDisplay({ text }) {
  return (
    <div className="flex flex-wrap justify-center content-center items-center pt-40 md:pt-60 font-raleway text-lg md:text-4xl animate-fade-up">
      <p className="flex flex-wrap justify-center items-center content-center">
        {text}
      </p>
    </div>
  );
}

export default ErrorDisplay;
