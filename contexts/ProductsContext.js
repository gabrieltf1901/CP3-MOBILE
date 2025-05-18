import { createContext, useState, useContext } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (productData) => {
    const id = Date.now().toString();
    setProducts(prev => [...prev, { id, ...productData }]);
  };

  const updateProduct = (id, productData) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { id, ...productData } : p))
    );
  };

  const removeProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts precisa estar dentro de ProductsProvider');
  return ctx;
};
