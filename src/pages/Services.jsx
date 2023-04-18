import React, { useEffect, useState } from 'react';
import { clients, employees, services, carParts } from '../data';
import toCurrency from '../utils/toCurrency';
import GenericSelect from '../components/GenericSelect';

function Services() {
  const [servicesToShow, setServicesToShow] = useState([]);

  // mock GETrequest
  // Trabalhei considerando chaves primárias, porém ainda não existem relacionamentos.
  const getServices = (id) => {
    const list = services.map((service) => {
      const client = clients.find((client) => client.id === Number(service.clientId));
      const vehicle = client.vehicles.find((vehicle) => vehicle.license === Number(service.vehicle));
      const employee = employees.find((emp) => emp.id === Number(service.employeeId));
      const thisSpareParts = carParts.filter((part) => service.spareParts.includes(part.id));
      return {
        ...service,
        client,
        vehicle,
        employee,
        spareParts: thisSpareParts,
      };
    });
    if (id) return setServicesToShow(
      list.filter((service) => service.employeeId === Number(id))
    );
    return setServicesToShow(list);
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleSubmit = (value) =>  getServices(value);

  return (

    <div>
      <GenericSelect
        placeholder='Filtrar por profissional'
        onChange={handleSubmit}
        options={ [
          ...employees.map((emp) => ({
            value: `${emp.id}`,
            name: 'professional',
            label: `${emp.fullName}`,
          })),
          { value: false, label: 'Todos'},
        ]} />
      <div>
        { servicesToShow.map((service, index) => (
          <div key={index} className="service-item gaped on-start wrap card flex spaced-between">
            <p>
              Cliente:
              <span className="weighted highlighted">{ service.client.name }</span>
            </p>
            <p>
              Profissional:
              <span className="weighted highlighted">{ service.employee.fullName }</span>
            </p>
            <p>Valor: <span className="highlighted">{ toCurrency(service.value) }</span></p>
      
            <label htmlFor="">Lista de peças:
              <ul>
                { service.spareParts.map((part, index) => (
                  <li key={index}>
                    {`${part.name} / `}
                    <span className="highlighted">{part.brand}</span>
                    --
                    <span className="weighted">{toCurrency(part.price)}</span>
                  </li>
                ))}
              </ul>
            </label>
      
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;





