import { createContext, useState, useContext } from 'react';

const BarcodeContext = createContext();

export const BarcodeProvider = ({ children }) => {
  const [barcode, setBarcode] = useState('');
  return (
    <BarcodeContext.Provider value={{ barcode, setBarcode }}>
      {children}
    </BarcodeContext.Provider>
  );
};

export const useBarcode = () => {
  const ctx = useContext(BarcodeContext);
  if (!ctx) throw new Error('useBarcode precisa estar dentro de BarcodeProvider');
  return ctx;
};
