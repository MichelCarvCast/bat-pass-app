import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer:{
        width: '80%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logoContainer:{
        flexDirection: 'column',
        borderColor: '#ffffff',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom:60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#4D4D4D'
    }
});

export default styles;