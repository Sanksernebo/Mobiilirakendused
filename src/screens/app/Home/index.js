import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from "./styles"
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";

const Home = () => {
    const renderCategoryItem = ({item}) => {
        console.log('item => ', item)
        return(
            <Text>{item.title}</Text>
        )
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need" />
                <FlatList data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) =>String(index)} />
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home)