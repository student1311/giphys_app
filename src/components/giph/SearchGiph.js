import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AlertContext } from '../../context/alert/alertContext';

export const SearchGiph = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const state = useContext(AlertContext);

  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    state.hide();
    onSearch(search);
    e.currentTarget.reset();
    setSearch('');
    if (!search) {
      state.show('Sorry, no GIFs match your search', 'danger');
    }
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search GIPH'S"
          value={search}
          onChange={onSearchChange}
        />

        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </form>
  );
};
