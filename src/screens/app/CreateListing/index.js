import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/Header'
import {styles} from "./styles"
import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const CreateListing = ({navigation}) => {
    const [images, setImages] = useState([])
    const goBack = () => {
        navigation.goBack()
    }
    const uploadNewImage = async () => {
        const result = await launchImageLibrary()
        console.log(result)
        if(result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
    }
    console.log(images)
}

        return(
        <SafeAreaView style= {{flex: 1}} >
            <Header title="Create a new listing" showBack={true} onBackPress={goBack} />
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
                <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                    <View style={styles.uploadCircle}>
                    <Text style={styles.uploadPlus} >+</Text>
                    </View>
                </TouchableOpacity>
                {images?.map(image => (
                    <Image key={image?.fileName} style={styles.image} source= {{uri:image?.uri}}/>
                ))}
            </View>
        </SafeAreaView>
    )
}
export default React.memo(CreateListing)