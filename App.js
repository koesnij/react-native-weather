import {Alert, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './screens/Loading';
import Weather from './screens/Weather';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "f8f875a5af268a31d3340a3ba4d8a29a"

export default class extends Component {
  state = {
    isLoading: true
  };

  getWeather = async(lat, lon) => {
    const { data: { main: { temp }, weather } } = await axios.get( // 반드시 백틱! 문자열안에 변수를 포함시킬 수 있음.
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    // console.log(data);
    this.setState({ isLoading: false, temp: temp, condition: weather[0].main});
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync(); // 요청만 해주면 됨.
      
      const {
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

      // Send to API && get weather
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  }

  componentDidMount() {
    this.getLocation();

  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading ? 
        <Loading /> : 
        <Weather temp={Math.round(temp)} condition={condition}/>
    ); // 이런 식으로 인자를 넘겨준다
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
