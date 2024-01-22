import { StyleSheet, Text, View } from 'react-native';


export default function CardTopicos({ title, hour }) {

    const topicsCards = [
        {
            title: "ABERTURA",
            hour: "09:00",
        },
        {
            title: "NETWORKING",
            hour: "10:00",
        },
        {
            title: "INTERVALO ALMOÇO",
            hour: "12:00",
        },
        {
            title: "COFFEE BREAK + NETWORKING",
            hour: "16:20",
        },
        {
            title: "SORTEIOS DE BRINDES E PARTICIPANTES DO CODANDO NO BREU",
            hour: "17:00",
        },
        {
            title: "ENCERRAMENTOS DAS PALESTRAS",
            hour: "18:00",
        },
        {
            title: "CODANDO NO BREU | CODE IN THE DARK",
            hour: "18:30",
        }
    ];


    return (
        <View style={styles.containerCard}>
            {topicsCards.map((topic) =>
                <View style={styles.cardTopicos} >
                    <Text style={styles.time}>{hour = topic.hour}</Text>
                    <Text style={styles.text}>{title = topic.title}</Text>
                </View>
            )}
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

