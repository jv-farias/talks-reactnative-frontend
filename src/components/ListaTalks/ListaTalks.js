import { ScrollView, TextInput, View, StyleSheet, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import CardPalestrante from "../CardPalestrante/CardPalestrante";
import AsyncStorage from 'react-native';


const ListaTalks = () => {

    const [talks, setTalks] = useState({ principal: [], communities: [], frontend: [], invite: [] });



    useEffect(() => {
        fetch('https://frontendday.descompliqueapps.com.br/index.php/wp-json/site/v1/data')
            .then((response) => response.json())
            .then((json) => {
                setTalks(json.talks);
            });
    }, []);





    return (

            <ScrollView  >
                <View >
                    {talks.principal.map((talk) =>
                        <View key={talk.id}>
                            <CardPalestrante
                                socialLink={talk.speaker.social_link}
                                horario={talk.hour}
                                linkImg={talk.speaker.image}
                                assunto={talk.title}
                                cargo={`${talk.speaker.role} ${talk.speaker.company}`}
                                nome={talk.speaker.title}
                                trilha={talk.room}
                            />
                        </View>
                    )}
                    {talks.frontend.map((talk) =>
                        <View key={talk.id}>
                            <CardPalestrante
                                socialLink={talk.speaker.social_link}
                                horario={talk.hour}
                                linkImg={talk.speaker.image}
                                assunto={talk.title}
                                cargo={`${talk.speaker.role} ${talk.speaker.company}`}
                                nome={talk.speaker.title}
                                trilha={talk.room}
                            />
                        </View>
                    )}
                    {talks.invite.map((talk) =>
                        <View key={talk.id}>
                            <CardPalestrante
                                socialLink={talk.speaker.social_link}
                                horario={talk.hour}
                                linkImg={talk.speaker.image}
                                assunto={talk.title}
                                cargo={`${talk.speaker.role} ${talk.speaker.company}`}
                                nome={talk.speaker.title}
                                trilha={talk.room}
                            />
                        </View>
                    )}
                    {talks.communities.map((talk) =>
                        <View key={talk.id}>
                            <CardPalestrante
                                socialLink={talk.speaker.social_link}
                                horario={talk.hour}
                                linkImg={talk.speaker.image}
                                assunto={talk.title}
                                cargo={`${talk.speaker.role} ${talk.speaker.company}`}
                                nome={talk.speaker.title}
                                trilha={talk.room}
                            />
                        </View>
                    )}
                </View>
            </ScrollView>


    );


}





export default ListaTalks;
