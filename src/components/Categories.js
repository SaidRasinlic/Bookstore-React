import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="category-wrapper">
      <button className="categories-button" type="button" onClick={handleStatus}>Check Status</button>
      {status.showStatus ? <p className="categories-para">Under Construction</p> : ''}
    </div>
  );
};
export default Categories;
