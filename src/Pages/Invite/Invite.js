import { View } from "react-native";
import ListaTalks from "../../components/ListaTalks/ListaTalks";


const Invite = () => {
    return (
        <View>
            <ListaTalks room="invite" />
        </View>
    );
};

export default Invite;