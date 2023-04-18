import ClientContext from '../context/ClientContext';
import PropTypes from 'prop-types';
import UseClients from '../hooks/UseClients';
import React from 'react';

const CLientProvider = ({ children }) => {

  const value = UseClients();

  return (
    <ClientContext.Provider value={value} >
      { children }
    </ClientContext.Provider>
  );

};

CLientProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default CLientProvider;