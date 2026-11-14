import { StyleSheet, Text, View } from 'react-native';

export default function Titulo({text,subtitulo})
{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{text}</Text>
            {subtitulo && (
                <Text style={styles.subtitulo}>{subtitulo}</Text>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
     container: {
        marginBottom: 20,
        width: '100%',
        maxWidth: 460,
        borderLeftWidth: 4,
        borderLeftColor: '#B64D35',
     },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'left',
        paddingHorizontal: 20,
        color: '#263C35',
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: 'normal',
        marginBottom: 8,
        textAlign: 'left',
        paddingHorizontal: 20,
        color: '#6B7169',
    },
});
