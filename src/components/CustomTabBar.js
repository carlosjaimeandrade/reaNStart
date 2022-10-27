import React from 'react';
import {View, StyleSheet,Text, TouchableHighlight} from 'react-native'

function CustomTabBar({state, descriptors, navigation}) {

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const options = descriptors[route.key].options

               //let label = route.name;
                let label = options.tabBarLabel

                return (
                    <TouchableHighlight style={styles.tab} key={index}>
                        <Text style={styles.label}>{label}</Text>
                    </TouchableHighlight>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60
    },
    tab:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    label:{
        fontSize: 16,
        color: 'black'
    }
})

export default CustomTabBar;