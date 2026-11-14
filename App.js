import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


//importar las screens construidas
import LoginScreen from './src/screens/LoginScreen';

import PerfilScreen from './src/screens/PerfilScreen';

import InicioScreen from './src/screens/InicioScreen';
import NotificacionesPush from './src/screens/NotificacionesPush';
import SolicitudesLocales from './src/screens/SolicitudesLocales';

import { useState } from 'react';

import MenuInferior from './src/components/MenuInferior';



export default function App() {
  const [ usuarioAutenticado, setUsuarioAutenticado ] = useState(false);
  const [ pantallaActual, setPantallaActual ] = useState('inicio');

  //si no ha iniciado sesion, muestre el login
  if (!usuarioAutenticado) {
    return (
      <View style={styles.pantallas}>
        <LoginScreen onLogin={() => setUsuarioAutenticado(true)} />
      </View>
    )
  }

  //determinar qué pantalla debe mostrar la app

  let pantalla;
  if (pantallaActual === 'Solicitudes') {
    //pantalla = <MenuScreen titulo="Menú" subtitulo="Servicio Abierto" />;
    //pantalla = <SolicitudesScreen/>;
    pantalla = <SolicitudesLocales />;
  }
  else if (pantallaActual === 'perfil') {
    //pantalla = <PerfilScreen titulo="Perfil" subtitulo="Información del usuario" />;
    pantalla = <PerfilScreen titulo="Tu espacio" subtitulo="Tus datos y tu foto, en un solo lugar." />;
  }
  else if (pantallaActual === 'notificaciones'){
    pantalla = <NotificacionesPush />
  }
  else {
    pantalla = <InicioScreen titulo="PICAMONTE" subtitulo="Un poquito de costa en cada plato." />;
  }
  

  return (
    <View style={styles.pantallas}>
      <View style={styles.contenidoCentral}>
        {pantalla}
      </View>
      <MenuInferior pantallaActual={pantallaActual} setPantallaActual={setPantallaActual} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  pantallas: {
    flex: 1,
    backgroundColor: '#F7F2E9',
  },
  contenidoCentral: {
    flex: 1,
    justifyContent: 'center',

  },
})