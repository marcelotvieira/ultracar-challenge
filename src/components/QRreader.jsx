import {QrScanner} from '@yudiel/react-qr-scanner';
import React, { useContext } from 'react';
import ClientContext from '../context/ClientContext';

const QRreader = () => {
  const { setClientData } = useContext(ClientContext);
  return (
    <QrScanner
      onDecode={(result) => setClientData(JSON.parse(result))}
      onError={(error) => console.log(error?.message)}
    />
  );
};

export default QRreader;