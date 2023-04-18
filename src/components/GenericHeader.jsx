
import React, { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';


function GenericHeader({ title }) {
  const { theme } = useContext(ThemeContext);


  // const { user } = useContext(UserContext);

  return (
    <Header className={`header ${theme}`}>
      <div className="flex spaced-between">
        <p>{ title } </p>
        <div className="flex">
          <p>{'<user.userName>'}</p>
          <Button type="link">Sair</Button>
        </div>
      </div>
    </Header>
  );
}

GenericHeader.defaultProps = {
  title: ''
};

GenericHeader.propTypes = {
  title: PropTypes.string,
};

export default GenericHeader;