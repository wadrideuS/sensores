import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({onLogin}) {
    const [correo, setCorreo ] = useState('');
    const [clave, setClave ] = useState('');

    //credenciales de prueba sin BD
    const correoCorrecto = 'wadrid';
    const claveCorrecta = '12345';

    const inniciarSesion = () => {
        if (!correo.trim() || !clave.trim()) {
            Alert.alert(
                'Datos incompletos',
                'Ingrese correo y contraseña'
            );
            return;
        }
        if (correo === correoCorrecto && clave === claveCorrecta) {
            onLogin();
        } else {
            Alert.alert(
                'Credenciales incorrectas',
                'Ingrese correo y contraseña correctos'
            );
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.tarjeta}>
                <Text style={styles.titulo}>
                    P.
                </Text>
                <Text style={styles.subtitulo}>
                    Qué bueno verte
                </Text>
                <Text style={styles.instrucciones}>
                    Tu rincón de sabor costeño.
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Usuario"
                    value={correo}
                    onChangeText={setCorreo}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Contraseña"
                    value={clave}
                    onChangeText={setClave}
                    secureTextEntry
                />
                <Pressable 
                    accessibilityRole="button"
                    style = {styles.boton}
                    onPress={inniciarSesion}
                >
                    <Text style={styles.textBoton}>
                        Entrar
                    </Text>
                </Pressable>

                <Text style={styles.ayuda}>
                    PICAMONTE · Cocina de la costa
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F2E9',
        width: '100%',
     },
     tarjeta: {
        width: '90%',
        maxWidth: 420,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0,
        shadowRadius: 4, 
        elevation: 0,
     },
     titulo: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
        color: '#263C35'
     },
     subtitulo: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 4,
        textAlign: 'center',
        color: '#6B7169'
     },
     instrucciones: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        color: '#6B7169',
     },
     input: {
        minHeight: 50,
        borderColor: '#DDD7CB',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
     },
     boton: {
        backgroundColor: '#B64D35',
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
     },
     textBoton: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
     },
     ayuda: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
     },
});
