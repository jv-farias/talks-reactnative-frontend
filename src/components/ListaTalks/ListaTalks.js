import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import CardPalestrante from "../CardPalestrante/CardPalestrante";
import AsyncStorage from 'react-native';

/**
 * @typedef {Object} ListaTalksProps
 * @property {string} [ListaTalksProps.room] - trilha do palestrante, pode ser: `principal`, `invite`, `frontend` ou `communities`
 * @param {ListaTalksProps} props
 */

const ListaTalks = ({ room }) => {

    const roomMappings = {
        'principal': 'Auditório',
        'invite': 'Convida',
        'frontend': 'Front-End',
        'communities': 'Comunidades',
    };

    const [talks, setTalks] = useState([]);

    useEffect(() => {
        fetch('https://frontendday.descompliqueapps.com.br/index.php/wp-json/site/v1/data')
            .then((resp) => resp.json())
            .then((data) => {


                if (room) {
                    filteredTalks = data.talks[room];
                } else {
                    filteredTalks = [...data.talks.principal, ...data.talks.communities, ...data.talks.frontend, ...data.talks.invite];
                }

                // método usado para organizar as palestras pelo horário
                const sortedTalks = filteredTalks.sort((a, b) => a.hour.localeCompare(b.hour));

                setTalks(sortedTalks);
            });
    }, [room]);
    return (

        <ScrollView  >
            <View >
                {talks.map((talk) =>
                    <View key={talk.id}>
                        <CardPalestrante
                            socialLink={talk.speaker.social_link}
                            horario={talk.hour}
                            linkImg={talk.speaker.image}
                            assunto={talk.title}
                            cargo={`${talk.speaker.role} ${talk.speaker.company}`}
                            nome={talk.speaker.title}
                            trilha={roomMappings[talk.room]}
                        />
                    </View>
                )}
            </View>
        </ScrollView>
    );
}





export default ListaTalks;
