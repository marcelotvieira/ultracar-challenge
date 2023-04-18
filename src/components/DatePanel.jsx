import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import PropTypes from 'prop-types';

function DatePanel({ dateString }) {

  const { theme } = useContext(ThemeContext);

  const date = new Date(dateString);
  
  return (
    <div className={`date-panel ${theme}`}>
      <span> {date.toLocaleDateString('pt-BR')}</span>
      <p> {date.toLocaleDateString(
        'pt-BR',
        { weekday: 'long'},
      )}</p>
    </div>
  );
}

DatePanel.defaultProps = {
  dateString: new Date().toISOString(),
};
  
DatePanel.propTypes = {
  dateString: PropTypes.string,
};

export default DatePanel;