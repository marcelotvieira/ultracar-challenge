import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import DatePanel from './DatePanel';
import logo from '../assets/images/cabecalho.png';

const { Sider } = Layout;

const items = [
  'Novo serviço',
  'Serviços',
].map((tab, index) => ({
  key: index,
  label: (<Link to={`/${
    tab.normalize('NFD')
      .replace(' ', '')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  }`}>{tab}</Link>),
}));


function LayoutSider() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    if (theme === 'dark') return setTheme('light');
    return setTheme('dark');
  };

  const themeToggleMenuItem = ({
    key: 'theme',
    label: (<p onClick={ handleToggleTheme }>Alterar tema</p>)
  });


  return (
    <Layout className="sider" hasSider>
      <Sider
        theme={theme}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <img src={logo} />
        <DatePanel />
        <Menu
          mode="inline"
          theme={theme}
          items={[ ...items, themeToggleMenuItem ]}
        />
      </Sider>

    </Layout>
  );
}

export default LayoutSider;

