import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

function GenericSelect({ 
  options,
  placeholder,
  disabled,
  className,
  name,
  onChange,
}) {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      disabled={disabled}
      className={className}
      onChange={onChange}
      name={name}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={options}
    />
  );
}

GenericSelect.defaultProps = {
  disabled: false,
  className: '',
  name: '',
  onChange: () => {},
};

GenericSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default GenericSelect;