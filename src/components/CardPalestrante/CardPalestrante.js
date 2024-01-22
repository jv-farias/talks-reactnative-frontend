import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function CardPalestrante({ assunto, nome, cargo, trilha, linkImg, horario, socialLink }) {

    const [isFavorited, setIsFavorited] = useState(false); //estado booleano para favorito

    const getSocialLinks = (url) => {
        let linkName = 'LinkedIn';
        let iconComponent = 'linkedin-square'
        switch (true) {
            case url.includes('instagram.com'):
                linkName = 'Instagram'
                iconComponent = 'instagram'
                break;
            case url.includes('github.com'):
                linkName = 'GitHub';
                iconComponent = 'github'
                break;
            case url.includes('pmenoslab'):
                linkName = 'Site';
                iconComponent = 'web'
                break;
            case url.includes('twitter.com'):
                linkName = 'Twitter';
                iconComponent = 'twitter'
                break;
        }
        return { linkName, iconComponent };
    }

    const { linkName, iconComponent } = getSocialLinks(socialLink);

    return (
        <View style={styles.containerCard}>
            <View style={styles.cardPalestrante}>
                <View style={styles.infoCard}>
                    <Text style={styles.time}>{horario}</Text>

                    <Pressable style={styles.buttonSave} onPress={() => setIsFavorited(!isFavorited)}>
                        {isFavorited ? <View style={styles.textButton}><FontAwesome name="bookmark" size={16} color="white" />
                            <Text style={styles.text}>Remover</Text></View> : <View style={styles.textButton}><FontAwesome name="bookmark-o" size={16} color="white" />
                            <Text style={styles.text}>Salvar</Text></View>}
                    </Pressable>

                </View>

                <View style={styles.assuntoPalestra}>
                    <Text style={styles.subject}>{assunto}</Text>
                </View>

                <View style={styles.palestrante}>
                    <View style={styles.profilePicture} >
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: 10
                            }}
                            source={{
                                uri: linkImg

                            }} />
                    </View>
                    <View style={styles.infoPalestrante}  >
                        <View>
                            <Text style={styles.namePalestrante}>
                                {nome}
                            </Text >
                            <Text style={styles.role} >
                                {cargo}
                            </Text>
                        </View>
                        <View
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <AntDesign onPress={() => {
                                Linking.openURL(socialLink);
                            }} name={iconComponent} size={16} color="white" />
                            <Text
                                onPress={() => {
                                    Linking.openURL(socialLink);
                                }}
                                style={styles.textWhite}>
                                {linkName}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.textWhite}>Trilha: {trilha}</Text>
                        </View>
                    </View>
                </View>
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
    },

    cardPalestrante: {
        flexWrap: 'wrap',
        maxWidth: 350,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(57, 195, 253, 1)',
        gap: 10,
    },

    infoCard: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttonSave: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        elevation: 3,
        borderRadius: 30,
        backgroundColor: '#000517',
    },


    textButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },

    time: {
        fontSize: 20,
        fontWeight: '800',
    },

    assuntoPalestra: {
        flexWrap: 'wrap', // Permite que o texto quebre para a próxima linha
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    subject: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000517'
    },


    palestrante: {
        width: '100%',
        gap: 20,
        flexDirection: 'row',
        backgroundColor: '#000517',
        justifyContent: 'flex-start',
        padding: 20,
        alignItems: "center",
        borderRadius: 20,
    },

    infoPalestrante: {
        width: '100%',
        gap: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: 110, // Defina a largura máxima desejada para o texto
        flexWrap: 'wrap', // Permite que o texto quebre para a próxima linha
        textAlign: 'center', // Alinha o texto no centro, ajuste conforme necessário
    },

    namePalestrante: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },

    role: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',

    },

    textWhite: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
});

