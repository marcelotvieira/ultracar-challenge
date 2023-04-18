import ThemeContext from './ThemeContext';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const value = {
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value} >
      { children }
    </ThemeContext.Provider>
  );

};

ThemeProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default ThemeProvider;