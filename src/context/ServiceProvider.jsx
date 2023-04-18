import ServiceContext from '../context/ServiceContext';
import PropTypes from 'prop-types';
import UseServices from '../hooks/UseServices';
import React from 'react';

const ServiceProvider = ({ children }) => {

  const value = UseServices();

  return (
    <ServiceContext.Provider value={value} >
      { children }
    </ServiceContext.Provider>
  );

};

ServiceProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ServiceProvider;