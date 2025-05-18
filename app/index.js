import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useProducts } from '../contexts/ProductsContext';

export default function Index() {
  const { products, removeProduct } = useProducts();
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.nome} - Quantidade: {item.quantidade}
      </Text>
      <View style={styles.buttons}>
        <Button
          title="Editar"
          onPress={() => router.push({ pathname: '/editar', params: { id: item.id } })}
        />
        <Button
          title="Excluir"
          onPress={() => removeProduct(item.id)}
          color="red"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Cadastrar Produto" onPress={() => router.push('/cadastro')} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>Nenhum produto cadastrado.</Text>}
        contentContainerStyle={
          products.length === 0 && styles.emptyContainer
        }
      />

      <Button title="Desenvolvedor" onPress={() => router.push('/desenvolvedor')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  itemText: {
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
