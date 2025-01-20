import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    newHere: {
        backgroundColor: '#000',
        width: windowWidth,
        height: windowHeight
    }
});

export default styles;