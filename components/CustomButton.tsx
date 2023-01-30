import { Text, StyleSheet, View, Pressable } from 'react-native';

interface IButtonProps {
    text: string,
    clickHandler: any,
}

export function CustomButton(props: IButtonProps) {
    return (
        <View style={styles.button}>
            <Pressable onPress={props.clickHandler}>
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'purple'
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
})