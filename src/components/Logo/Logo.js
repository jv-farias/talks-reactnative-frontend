import {StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

export default function Logo() {
    return (
        <View style={styles.containerLogo}>
            <SvgUri
                width="75"
                height="75"
                uri="https://jv-farias.github.io/frontend-day-app/assets/logos/frontenday2023.svg"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLogo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
    }
  });
  