import { Stack } from 'expo-router';
import { BarcodeProvider } from '../contexts/BarcodeContext';
import { ProductsProvider } from '../contexts/ProductsContext';


export default function Layout() {
  return (
    <BarcodeProvider>
      <ProductsProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Produtos em Estoque' }} />
          <Stack.Screen name="cadastro" options={{ title: 'Cadastrar Produto' }} />
          <Stack.Screen name="editar" options={{ title: 'Editar Produto' }} />
          <Stack.Screen name="scanner" options={{ title: 'Leitor de Código de Barras' }} />
          <Stack.Screen name="desenvolvedor" options={{ title: 'Desenvolvedor' }} />
        </Stack>
      </ProductsProvider>
    </BarcodeProvider>
  );
}
