import React, { useContext } from 'react';
import GenericSelect from './GenericSelect';
import locale from 'antd/es/date-picker/locale/pt_BR';
import TextArea from 'antd/es/input/TextArea';
import { Checkbox, DatePicker, InputNumber, TimePicker } from 'antd';
import ServiceContext from '../context/ServiceContext';

function RegisterServiceForm() {

  const { 
    needSpareParts,
    setNeedSpareParts,
    handleOnInputParts,
    handleOnInputSelect,
    handleOnInputChange,
    setEndDate,
    setEndTime,
    employeeOptions,
    vehiclesOptions,
    handleOnInputValue,
    sparePartsOptions,
  } = useContext(ServiceContext);

  const handleCheck = () => setNeedSpareParts(!needSpareParts);
      
  return (
    <div>
      <form className="new-service-box flex column-direction" action="">

        <div className="flex spaced-between full">
          <label>Profissional: </label>
          <GenericSelect
            onChange={handleOnInputSelect}
            name="professional"
            placeholder='Selecione o profissional'
            options={employeeOptions}
          />
        </div>

        <div className="flex spaced-between full">
          <label>Veículo:</label>
          <GenericSelect 
            onChange={handleOnInputSelect}
            placeholder='Selecione o veículo'
            options={vehiclesOptions}
            name="vehicle"
          />
        </div>

        <div className="flex spaced-between full">
          <label>Descrição do serviço:</label>
          <TextArea onChange={handleOnInputChange} name="description"  />
        </div>

        <div className="flex column-direction full">
          <label>{'Reposição de peças: '}
            <Checkbox onChange={handleCheck} />
          </label>
          <GenericSelect
            onChange={handleOnInputParts}
            name="spareParts"
            className="full"
            disabled={!needSpareParts}
            placeholder='Selecione as peças para reposição'
            options={sparePartsOptions}
          />
        </div>

        <div className="flex spaced-between full">
          <label>Valor de mão de obra:</label>
          <InputNumber min={0} onChange={handleOnInputValue} />
        </div>

        <div className="flex spaced-between full">
          <label>Término estimado:</label>
          <DatePicker
            onChange={(_data, value) => {setEndDate(value);}}
            name="endDate"
            format='DD-MM-YYYY'
            locale={locale}
            placeholder='Selecione a data'
          />

          <TimePicker
            onChange={(_data, value) => {setEndTime(value);}}
            name="endTime"
            showSecond={false}
            locale={locale} 
            placeholder='Selecione a hora'
          />
        </div>

      </form>
    </div>
  );
}

export default RegisterServiceForm;





