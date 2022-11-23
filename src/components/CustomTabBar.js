import React from 'react';
import {View, StyleSheet,Text, TouchableHighlight} from 'react-native'

function CustomTabBar({state, descriptors, navigation}) {

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const options = descriptors[route.key].options

               //let label = route.name;
                let label = options.tabBarLabel


                const handleTabPress = () => {
                    navigation.navigate(route.name)
                }

                const isFocused = state.index == index;

                if(route.name == "TabHome"){
                    return(
                        <TouchableHighlight underlayColor="transparent" onPress={handleTabPress} style={styles.middleTab} key={index}>
                            <Text style={isFocused ? styles.labelFocused : styles.label}>{label}</Text>
                        </TouchableHighlight>
                    );
                }else{
                    return (
                        <TouchableHighlight underlayColor="transparent" onPress={handleTabPress} style={styles.tab} key={index}>
                            <Text style={isFocused ? styles.labelFocused : styles.label}>{label}</Text>
                        </TouchableHighlight>
                    );
                }
   
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    tab:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60       
    },
    middleTab:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        backgroundColor: '#d7d7db',
        marginTop: -10,
        borderRadius: 50
    },
    label:{
        fontSize: 16,
        color: 'black'
    },
    labelFocused:{
        fontSize: 19,
        color: 'black'
    }
})

export default CustomTabBar;