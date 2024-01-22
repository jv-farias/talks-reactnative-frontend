import { StyleSheet, Text, View } from 'react-native';


export default function CardTopicos({ title, hour }) {

    return (
        <View style={styles.containerCard}>
            <View style={styles.cardTopicos} >
                <Text style={styles.time}>{hour}</Text>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerCard: {
        boxSizing: 'border-box',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        gap: 20,
    },

    cardTopicos: {
        maxWidth: 350,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ff8506',
        gap: 10,
        flexDirection: 'row',
    },

    text: {
        flexWrap: 'wrap',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        width: '75%',
    },

    time: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '800',
    },

});

