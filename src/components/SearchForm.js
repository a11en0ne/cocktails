import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef(null);
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={(e) => {
              setSearchTerm(e.currentTarget.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
