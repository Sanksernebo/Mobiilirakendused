import React from "react";
import { View , Image} from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Checkbox = ({checked, onCheck}) => {
    return(
        <TouchableOpacity activeOpacity={.6} style={styles.container} onPress={() => onCheck(!checked)}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) :null }
        </TouchableOpacity>
    )
}
export default Checkbox