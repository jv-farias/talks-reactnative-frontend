import { Text, View } from 'react-native';
import CardTopicos from '../CardTopicos/CardTopicos';


export default function ListaTopicos() {

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
        <View>
            {topicsCards.map((topic) =>
                <CardTopicos
                    title={topic.title}
                    hour={topic.hour}
                />
            )}
        </View>
    )
}