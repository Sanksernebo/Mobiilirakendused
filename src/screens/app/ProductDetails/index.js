import React from "react";
import {ScrollView, View, Text, Image, Pressable} from "react-native";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "./styles"
import ImageCarusel from "../../../components/ImageCarusel";

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    console.log('product => ', product)

    const onBackPress = () => {
        navigation.goBack()
    }
    const onContact = () => {
        let phone = 'real phone number'
        Linking.openURL(`tel:${phone}`)

        let email = 'real email'
        Linking.openURL(`mailto:${email}`)
    }
    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarusel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{uri:product?.image}} />
                )}
                    <View style={styles.content}>
                        <Text style={styles.title} >{product?.title}</Text>
                        <Text style={styles.price}>{product?.price}</Text>
                        <Text style={styles.description}>{product?.description}</Text>
                    </View>
            <Pressable onPress={onBackPress} style={styles.backContainer}>
                <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
            </Pressable>

            </ScrollView>
                <View style={styles.footer}>
                    <Pressable style={styles.marker_solidContainer}>
                        <Image style={styles.marker_solidIcon} source={require('../../../assets/tabs/marker_solid.png')} />
                    </Pressable>
                        <Button title="Contact Seller" />
                </View>
        </SafeAreaView>
    )
}
export default React.memo(ProductDetails)