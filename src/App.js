import React from 'react';
import './styles/index.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutSider from './components/LayoutSider';
import Services from './pages/Services';
import NewServices from './pages/NewService';
import GenericHeader from './components/GenericHeader';
import ClientProvider from './context/ClientProvider';
import ServiceProvider from './context/ServiceProvider';
import NewServiceRegister from './pages/NewServiceRegister';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <LayoutSider />
        <GenericHeader />
        <div className={'page'}>
          <Switch>
            {/* <UserProvider> */}
            <ClientProvider>
              <ServiceProvider>
                <Route exact path="/" component={Home}/>
                <Route exact path="/novoservico" component={NewServices}/>
                <Route exact path="/novoservico/registro/:id" component={NewServiceRegister}/>
                <Route exact path="/servicos" component={Services}/>
              </ServiceProvider>

            </ClientProvider>
            {/* </UserProvider> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;