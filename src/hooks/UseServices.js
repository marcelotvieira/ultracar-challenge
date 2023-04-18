import { useState, useContext, useEffect } from 'react';
import { employees, carParts } from '../data';
import ClientContext from '../context/ClientContext';
import toDateString from '../utils/toDateString';
import toTimeString from '../utils/toTimeString';
import { notification } from 'antd';


const UseServices = () => {
  const [professional, setProfessional] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [description, setDescription] = useState('');
  const [needSpareParts, setNeedSpareParts] = useState(false);
  const [spareParts, setSpareParts] = useState([]);
  const [initialDate, setInitialDate] = useState(toDateString(new Date()));
  const [initialTime, setInitialTime] = useState(toTimeString(new Date()));
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [jobValue, setJobValue] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const { clientData } = useContext(ClientContext);

  const handleOnInputParts = (value) =>  setSpareParts([ ...spareParts, value ]);
  const handleOnInputChange = ({target}) => setDescription(target.value);

  const handleOnInputValue = (value) => {
    if (!value) return setJobValue(0);
    setJobValue(value);
  };
  const handleOnInputSelect = (value, {name}) => {
    if (name === 'professional') return setProfessional(value);
    return setVehicle(value);
  };

  const handleRemoveSparePart = (id) => {
    const newSpareParts = spareParts.filter((part) =>  Number(part) !== id);
    setSpareParts(newSpareParts);
  };

  useEffect(() => {
    setIsValid(
      professional !== '' &&
      vehicle !== '' &&
      endDate !== '' &&
      endTime !== ''
    );
  });

  const employeeOptions = employees.filter((emp) => emp.active)
    .map((emp) => ({
      value: `${emp.id}`,
      name: 'professional',
      label: `${emp.fullName}`,
    }));

  const vehiclesOptions = clientData?.vehicles.map((vehicle) => ({
    label: `${vehicle.brand} ${vehicle.model}`,
    name: 'vehicle',
    value: `${vehicle.license}`
  }));

  const sparePartsOptions = carParts.map((part) => ({
    value: `${part.id}`,
    label: `${Number(part.price)
      .toLocaleString('pt-Br', { style: 'currency', currency: 'BRL'})} / ${part.name} / ${part.brand}`,
    name: 'spareParts'
  }));

  const openNotification = (title, message) => {
    notification.open({
      message: title,
      description: message,
      type: 'success',
      duration: 10,
    });
  };

  return {
    handleRemoveSparePart,
    handleOnInputSelect,
    handleOnInputChange,
    handleOnInputParts,
    handleOnInputValue,
    setNeedSpareParts,
    sparePartsOptions,
    vehiclesOptions,
    employeeOptions,
    needSpareParts,
    professional,
    description,
    spareParts,
    setEndDate,
    setEndTime,
    jobValue,
    endDate,
    vehicle,
    endTime,
    isValid,
    initialDate,
    initialTime,
    openNotification,
    setInitialDate,
    setInitialTime,
  };
};

export default UseServices;