import { StyleSheet, Dimensions } from "react-native";

import {colors} from '../../../utils/colors'
const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({ 
    container: {
        padding: 24,
        flex: 1
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 24,
        height: 24
    },
    button: {
        paddingVertical: 12,
        marginTop: 16
    }
})