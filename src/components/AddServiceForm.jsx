import React, { useContext, useState } from 'react';
import qrDefault from '../assets/images/qr.png';
import QRreader from './QRreader';
import ClientContext from '../context/ClientContext';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom';

const AddServiceForm = () => {

  const [isReading, setIsReading] = useState(false);
  const [redirect, setRedirect] = useState();

  const { clientData } = useContext(ClientContext);

  const handleScan = () => setIsReading(!isReading);


  if (redirect) return <Redirect to={redirect} />;

  return (
    <div className="add-new-service">
      <form
        className="card add-service-form flex centered column-direction"
      >
        <span className="highlighted">O código se encontra no cartão do cliente.</span>
        <p>Clique para iniciar a leitura</p>

        { !isReading ? 
          <div className="flex centered column-direction">
            <img onClick={handleScan} src={qrDefault} />
          </div>

          :
          <div className="qr-scanner-box">
            <QRreader />
          </div>
        }
        
        { isReading && !clientData && <p>Lendo QR Code...</p> }
        { isReading && clientData && (
          <div>
            <p>Cliente: <span>{clientData.name}</span></p>
            <ul>
              {
                clientData.vehicles.map((vehicle, index) => (
                  <li key={index}>
                    {
                      `${vehicle.brand} 
                     ${vehicle.model} 
                     ${vehicle.year} 
                     `
                    }</li>
                ))
              }
            </ul>
          </div>

        ) }


        <Button
          disabled={!clientData}
          type="primary"
          onClick={ clientData
            ?
            () => setRedirect(`/novoservico/registro/${clientData.id}`)
            :
            () => {}
          }
        >Confirmar</Button>


      </form>
    
    </div>

  );
};

export default AddServiceForm;

