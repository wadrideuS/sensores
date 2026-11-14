import { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Titulo from '../components/Titulo';

export default function InicioScreen({ titulo, subtitulo }) {
  const [imagen, setImagen] = useState(null);

  const tomarFoto = async () => {
    try {
      const permiso = await ImagePicker.requestCameraPermissionsAsync();
      if (!permiso.granted) {
        Alert.alert('Acceso denegado', 'Debes permitir el acceso a la cámara.');
        return;
      }

      const resultado = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.8,
      });
      if (!resultado.canceled) setImagen(resultado.assets[0].uri);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'No se pudo abrir la cámara del dispositivo.');
    }
  };

  const seleccionarImagen = async () => {
    try {
      const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permiso.granted) {
        Alert.alert('Permiso denegado', 'Debes permitir el acceso a la galería.');
        return;
      }

      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 0.8,
      });
      if (!resultado.canceled) setImagen(resultado.assets[0].uri);
    } catch (error) {
      console.log('Error al seleccionar la imagen:', error);
      Alert.alert('Error', 'No se pudo abrir la galería del dispositivo.');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      <Titulo text={titulo} subtitulo={subtitulo} />

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>FRESCO · LOCAL · COSTEÑO</Text>
        <Image
          source={imagen ? { uri: imagen } : require('../../assets/hero.jpeg')}
          style={styles.imagen}
          resizeMode="cover"
          accessibilityLabel="Foto principal de PICAMONTE"
        />
        <Text style={styles.tituloFoto}>Hoy se come rico</Text>
        <Text style={styles.descripcion}>
          Recetas de la costa, ingredientes frescos y ese toque de casa.
        </Text>

        <Text style={styles.subtituloAccion}>Dale tu toque</Text>
        <View style={styles.filaBotones}>
          <Pressable style={styles.boton} onPress={tomarFoto} accessibilityRole="button">
            <Text style={styles.textoBoton}>Usar cámara</Text>
          </Pressable>
          <Pressable style={styles.boton} onPress={seleccionarImagen} accessibilityRole="button">
            <Text style={styles.textoBoton}>Abrir galería</Text>
          </Pressable>
        </View>

        <Text style={styles.subtituloAccion}>A tu manera</Text>
        <View style={styles.filaBotones}>
          <Pressable style={[styles.boton, styles.botonPrincipal]} accessibilityRole="button">
            <Text style={styles.textoBotonPrincipal}>En casa</Text>
          </Pressable>
          <Pressable
            style={[styles.boton, styles.botonPrincipal]}
            onPress={tomarFoto}
            accessibilityRole="button"
          >
            <Text style={styles.textoBotonPrincipal}>En el local</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F7F2E9',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  tarjeta: {
    width: '100%',
    maxWidth: 460,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    elevation: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 4,
  },
  etiqueta: {
    alignSelf: 'flex-start',
    color: '#6B7169',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  imagen: {
    width: '100%',
    height: 190,
    borderRadius: 8,
    backgroundColor: '#EEE7DA',
  },
  tituloFoto: {
    color: '#263C35',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 6,
  },
  descripcion: {
    color: '#6B7169',
    fontSize: 14,
    lineHeight: 21,
  },
  subtituloAccion: {
    color: '#263C35',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 10,
  },
  filaBotones: {
    flexDirection: 'row',
    gap: 10,
  },
  boton: {
    flex: 1,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD7CB',
    backgroundColor: '#FFFFFF',
  },
  textoBoton: {
    color: '#444444',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  botonPrincipal: {
    borderColor: '#B64D35',
    backgroundColor: '#B64D35',
  },
  textoBotonPrincipal: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
