import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={handleStatus}>Check Status</button>
      <p>{status.showStatus ? 'Under Construction' : ''}</p>
    </>
  );
};
export default Categories;
