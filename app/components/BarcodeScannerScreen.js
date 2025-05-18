import React, { useState, useEffect } from 'react';
import { 
  Text, View, Button, StyleSheet, Alert 
} from 'react-native';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useBarcode } from '../../contexts/BarcodeContext';

export default function BarcodeScannerScreen() {
  const [hasPermission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();
  const { setBarcode } = useBarcode();

  useEffect(() => {
    if (!hasPermission) requestPermission();
  }, [hasPermission]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcode(data);
    Alert.alert(
      'Código Escaneado',
      `Tipo: ${type}\nDados: ${data}`,
      [{ text: 'OK', onPress: () => router.replace('/cadastro') }]
    );
  };

  if (!hasPermission?.granted) {
    return (
      <View style={styles.centered}>
        <Text>Permitindo acesso à câmera...</Text>
        <Button title="Permitir" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [
            Camera.Constants.BarCodeType.ean13,
            Camera.Constants.BarCodeType.ean8,
            Camera.Constants.BarCodeType.code128,
            Camera.Constants.BarCodeType.qr,
          ],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
});
