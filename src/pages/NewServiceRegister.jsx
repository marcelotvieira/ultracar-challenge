import PropTypes from 'prop-types';
import ClientContext from '../context/ClientContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { clients } from '../data';
import { Typography, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import RegisterServiceForm from '../components/RegisterServiceForm';
import ServicePresentation from '../components/ServicePresentation';
import ServiceContext from '../context/ServiceContext';
import ReactToPrint from 'react-to-print';

const { Title } = Typography;

function NewServiceRegister({ match: { params } }) {

  const { 
    openNotification,
    initialDate,
    endDate,
    initialTime,
    endTime,
    isValid,
  } = useContext(ServiceContext);

  const toPrintRef = useRef();
  const [redirect, setRedirect] = useState();
  const { clientData, setClientData } = useContext(ClientContext);

  useEffect(() => {
    // request
    const response = clients.find((client) => client.id === Number(params.id));
    if (response) return setClientData(response);
  }, []);

  const handleSubmit = () => {
    //POSTrequest call
    setRedirect('/servicos');
    setClientData();
    return openNotification(
      'Confirmado',
      `Início em: ${initialDate} ${initialTime} /
    Término em: ${endDate} ${endTime}`
    );};

  if (redirect) return <Redirect to={redirect} />;
  if (!clientData) return <Redirect to="/novoservico" />;
  return (
    <div className="new-service-page">
      <Title className="title" level={3}>Cliente: { clientData?.name }</Title>
      <div className="flex on-start wrap spaced-evenly">
        <RegisterServiceForm />

        <div>
          <ServicePresentation ref={toPrintRef} />
          <Button
            className="full"
            disabled={!isValid}
            onClick={handleSubmit}
          >Confirmar
          </Button>

          <ReactToPrint
            content={() => toPrintRef.current}
            pageStyle={'../styles/printPageStyle.css'}
            trigger={() => <Button
              type="primary"
              className="full"
              disabled={!isValid}
            >
               Imprimir
            </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}

NewServiceRegister.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default NewServiceRegister;




