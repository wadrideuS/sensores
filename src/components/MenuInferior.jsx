import { Pressable, StyleSheet, Text, View } from 'react-native';

const opciones = [
  { id: 'inicio', texto: 'Inicio', marca: '01' },
  { id: 'Solicitudes', texto: 'Solicitudes', marca: '02' },
  { id: 'perfil', texto: 'Mi cuenta', marca: '03' },
  { id: 'notificaciones', texto: 'Avisos', marca: '04' },
];

export default function MenuInferior({ pantallaActual, setPantallaActual }) {
  return (
    <View style={styles.barraMenu}>
      {opciones.map(({ id, texto, marca }) => {
        const activo = pantallaActual === id;
        return (
          <Pressable key={id} accessibilityRole="tab" accessibilityState={{ selected: activo }}
            onPress={() => setPantallaActual(id)}
            style={[styles.opcion, activo && styles.seleccionada]}>
            <Text style={[styles.marca, activo && styles.textoActivo]}>{marca}</Text>
            <Text style={[styles.texto, activo && styles.textoActivo]}>{texto}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  barraMenu: { flexDirection: 'row', backgroundColor: '#F7F2E9', borderTopWidth: 1,
    borderTopColor: '#DDD7CB', paddingHorizontal: 8, paddingTop: 10, paddingBottom: 24, gap: 4 },
  opcion: { flex: 1, minHeight: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 14, paddingVertical: 8 },
  seleccionada: { backgroundColor: '#385B45' },
  marca: { color: '#6B7169', fontSize: 10, marginBottom: 4, fontWeight: '700' },
  texto: { color: '#263C35', fontSize: 11, fontWeight: '600', textAlign: 'center' },
  textoActivo: { color: '#FFFFFF' },
});
