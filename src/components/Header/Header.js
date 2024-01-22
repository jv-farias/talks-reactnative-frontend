import { View, Image, SafeAreaView, StyleSheet } from 'react-native';
import Logo from '../Logo/Logo';

export default function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.containerHeader} >
                <Image
                    source={{ uri: 'https://www.frontendday.com.br/_next/image?url=%2Fimages%2Flogo-fendce.png&w=256&q=75' }}
                    style={{ width: 100, aspectRatio: 1, resizeMode: 'contain' }}
                />
                <Logo />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '50%',
    },
    containerHeader: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
