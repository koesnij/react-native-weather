import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'; // React에서 타입 체크를 위해 사용되는 라이브러리이다.
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import App from '../App';
import { apisAreAvailable } from 'expo';

const weatherTypes = {
    Clear : {
        title: "Sunny",
        subtitle: "Blahblahblah blahblah.",
        iconName: "weather-sunny",
        gradients: ["#fc4a1a", "#f7b733"]
    },
    Thunderstorm: {
        title: "Thunderstorm",
        subtitle: "Blahblahblah blahblah.",
        iconName: "weather-lightning",
        gradients: ["#20002c", "#cbb4d4"]
    },
    Drizzle: {
        title: "Drizzle",
        subtitle: "Blahblahblah blahblah.",
        iconName: "weather-hail",
        gradients: ["#000C40", "#F0F2F0"]
    },
    Rain: {
        title: "Rain",
        subtitle: "Blahblahblah blahblah.",
        iconName: "weather-rainy",
        gradients: ["#000C40", "#F0F2F0"]
    },
    Snow: {
        title: "Snow",
        subtitle: "Blahblahblah blahblah.",
        iconName: "weather-snowy",
        gradients: ["#274046", "#E6DADA"]
    },
    Clouds: {
        title: "Cloudy",
        subtitle: "Just don't go outside.",
        iconName: "weather-cloudy",
        gradients: ["#3c3b3f", "#605c3c"]
    },
};

export default function Weather({ temp, condition }) {

    console.log(condition);
    return (
        <LinearGradient 
            colors={weatherTypes[condition].gradients} 
            style={styles.container} >
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherTypes[condition].iconName} 
                    size={128} 
                    color="white" />
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            {/* <View style={{...styles.halfContainer, ...styles.textContainer}}> */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {weatherTypes[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherTypes[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {   // 요구 타입 정의
    temp : PropTypes.number.isRequired, // 매개 변수로 반드시 필요하다는 의미
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]),

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // textContainer: {
    //     paddingHorizontal: 10,
    //     alignItems: 'flex-start',
    // },
    textContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    temp: {
        fontSize: 32,
        color: 'white',
        paddingTop: '3%',
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontWeight: '300',
        paddingBottom: 5,
    },
    subtitle: 
    {
        fontSize: 28,
        fontWeight: '300',
        color: 'white',
    },
});