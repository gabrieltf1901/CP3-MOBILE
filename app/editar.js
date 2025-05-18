import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useProducts } from '../contexts/ProductsContext';
import { useBarcode } from '../contexts/BarcodeContext';

export default function Editar() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { products, updateProduct } = useProducts();
  const { barcode, setBarcode } = useBarcode();

  const [nome, setNome] = useState('');
  const [fabricacao, setFabricacao] = useState('');
  const [validade, setValidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lote, setLote] = useState('');
  const [estado, setEstado] = useState('SP');
  const [codigoBarras, setCodigoBarras] = useState('');

  useEffect(() => {
    const produto = products.find((p) => p.id === id);
    if (produto) {
      setNome(produto.nome);
      setFabricacao(produto.fabricacao);
      setValidade(produto.validade);
      setQuantidade(produto.quantidade);
      setLote(produto.lote);
      setEstado(produto.estado);
      setCodigoBarras(produto.codigoBarras);
    }
  }, [id, products]);

  useEffect(() => {
    if (barcode) {
      setCodigoBarras(barcode);
    }
  }, [barcode]);

  const handleSalvar = () => {
    if (
      !nome ||
      !fabricacao ||
      !validade ||
      !quantidade ||
      !lote ||
      !codigoBarras
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    updateProduct(id, {
      nome,
      fabricacao,
      validade,
      quantidade,
      lote,
      estado,
      codigoBarras,
    });

    setBarcode(''); 
    Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
    router.back();
  };

  const abrirScanner = () => {
    router.push('/scanner');
  };

  const estados = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO',
    'MA','MT','MS','MG','PA','PB','PR','PE','PI',
    'RJ','RN','RS','RO','RR','SC','SP','SE','TO'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome do Produto:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Data de Fabricação:</Text>
      <TextInput
        style={styles.input}
        value={fabricacao}
        onChangeText={setFabricacao}
        placeholder="dd/mm/aaaa"
      />

      <Text style={styles.label}>Prazo de Validade:</Text>
      <TextInput
        style={styles.input}
        value={validade}
        onChangeText={setValidade}
        placeholder="dd/mm/aaaa"
      />

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Lote:</Text>
      <TextInput style={styles.input} value={lote} onChangeText={setLote} />

      <Text style={styles.label}>Estado de Origem:</Text>
      <Picker
        selectedValue={estado}
        onValueChange={(itemValue) => setEstado(itemValue)}
        style={styles.picker}
      >
        {estados.map((uf) => (
          <Picker.Item key={uf} label={uf} value={uf} />
        ))}
      </Picker>

      <Text style={styles.label}>Código de Barras:</Text>
      <TextInput
        style={styles.input}
        value={codigoBarras}
        onChangeText={setCodigoBarras}
        placeholder="Digite ou escaneie o código de barras"
      />
      <Button title="Escanear Código de Barras" onPress={abrirScanner} />

      <View style={{ marginTop: 16 }}>
        <Button title="Salvar Alterações" onPress={handleSalvar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    borderRadius: 5,
    marginTop: 4,
  },
  picker: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
  },
});
