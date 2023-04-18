import React, { useContext } from 'react';
import ServiceContext from '../context/ServiceContext';
import { carParts, employees } from '../data';
import ClientContext from '../context/ClientContext';
import toCurrency from '../utils/toCurrency';
import { DeleteOutlined } from '@ant-design/icons';

const ServicePresentation = React.forwardRef((_props, ref) => {
  const {
    professional,
    vehicle,
    spareParts,
    description,
    needSpareParts,
    endDate,
    endTime,
    jobValue,
    handleRemoveSparePart,
  } = useContext(ServiceContext);

  const { clientData } = useContext(ClientContext);

  const thisEmployee = employees.find((emp) => emp.id === Number(professional));
  const thisSpareParts = carParts.filter((part) => spareParts.includes(part.id.toString()));
  const thisVehicle = clientData?.vehicles?.find((car) => car.license === vehicle);
    
  return (
    <div ref={ref}>
      <form className="card new-service-box flex column-direction" action="">

        <div className="flex spaced-between full">
          <label>Profissional: </label>
          { thisEmployee?.fullName }
        </div>

        <div className="flex spaced-between full">
          <label>Veículo:</label>
          { thisVehicle &&
           <p>{`${thisVehicle.brand} ${thisVehicle.model} ${thisVehicle.year}`}</p>
          } 

        </div>

        <div className="flex spaced-between full">
          <label>Descrição do serviço:</label> 
          <p>{ description }</p>
        </div>

        { needSpareParts && <div className="flex column-direction full">
          <label>{'Reposição de peças: '} </label>
          <div className="table-box full">
            <table className="full">
              <tbody>
                <tr className="">
                  <th>Remover</th>
                  <th>Peça</th>
                  <th>Fabricante</th>
                  <th>Valor</th>
                </tr>
                {thisSpareParts?.map((part, index) => (
                  <tr key={index}>
                    <td
                      name={part.id}
                      className="remove-td"
                    >
                      <DeleteOutlined
                        onClick={() => handleRemoveSparePart(part.id)}
                      />
                    </td>
                
                    <td>{part.name}</td>
                    <td>{part.brand}</td>
                    <td>
                      {toCurrency(part.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>}

        <div className="flex spaced-between full">
          <label>Valor do serviço:</label>
          {toCurrency(jobValue)}
        </div>

        <div className="flex spaced-between full">
          <label>Valor Total:</label>
          {toCurrency(
            thisSpareParts.reduce((acc, curr) => acc += curr.price, 0)
            +
            jobValue
          )}
        </div>

        <div className="flex spaced-between full">
          <label>Término estimado:</label>
          { endDate }
          <span>{ endTime }</span>
        </div>

      </form>
    </div>
  );
});

ServicePresentation.displayName = 'ServicePresentation';

export default ServicePresentation;