import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native'
//criar um componente para o touchableopacity

const Level = (props) => {
    let texto = 'padrao'
    return (
        <TouchableOpacity style={[styles.button, props.nivel == 0.1 ? styles.bgEasy :
            props.nivel == 0.2 ? styles.bgNormal : styles.bgHard]}
            onPress={() => props.onLevel(props.nivel)}>
            <Text style={styles.buttonLabel}>{props.nivel == 0.1 ? 'Fácil' : 
                props.nivel == 0.2 ? 'Intermediário' : 'Difícil'}</Text>
        </TouchableOpacity>
    )
}

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} 
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <Level nivel={0.1} onLevel={props.onLevelSelected}/>
                    <Level nivel={0.2} onLevel={props.onLevelSelected}/>
                    <Level nivel={0.3} onLevel={props.onLevelSelected}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
        borderRadius: 10
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})