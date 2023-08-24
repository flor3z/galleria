import React from 'react';
import { useState } from 'react';

const SearchImage = ({ onSubmit, loading }) => {
  const [term, setTerm] = useState('');

  const onHandleChange = (e) => {
    setTerm(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (term.length !== 0 && term !== ' ') {
      onSubmit(term.trim());
      setTerm('');
    }
  };

  return (
    <div className="p-4">
      <form className="flex" onSubmit={onHandleSubmit}>
        <input
          type="search"
          className="rounded-tl rounded-bl mx-auto outline-none w-full  text-sm py-2.5 focus:ring-amber-600 focus:ring-2 focus:border-orange-400 "
          value={term}
          onChange={onHandleChange}
          required
        />
        <button className="bg-orange-400 rounded-tr rounded-br  text-white pt-2 pb-2 pl-6 pr-6 hover:bg-orange-500">
          {loading ? 'Processing...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchImage;
