import React, { useState, useEffect } from "react";
import { Image, View, FlatList, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
import Loader from "../loader/Loader";
import cache from "../util/cache";
import { ToastAndroid } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import NoInternetPage from "../error/NoInternet";
import Toast from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";
import useResults from "../hooks/useResults";

const ResultShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [connected, setConnected] = useState(false);
  const { id } = route.params;
  const navigation = useNavigation();
  const [results] = useResults();

  const getResult = async (id) => {
    setLoader(true);
    try {
      const response = await yelp.get(`/${id}`);
      await cache.store(`/${id}`, response.data);
      setResult(response.data);
      setLoader(false);
      setError(false);
    } catch (error) {
      // console.log('no error part ran')
      const data = await cache.get(`/${id}`);
      if (data) {
        // console.warn('yes data ran')
        setResult(data);
        setError(false);
        setLoader(false);
      } else {
        setLoader(false);
        // console.warn('no data ran')
        setError(true);
      }
    }
  };

  useEffect(() => {
    getResult(id);
  }, []); //first load call

  return loader ? (
    <Loader secondary />
  ) : result && (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.subtitle}>
        {result.location.address1}, {result.display_phone}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={styles.image} source={{ uri: item }} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#444",
  },
  image: {
    height: 200,
    width: 300,
    alignSelf: "center",
    marginVertical: 10,
  },
  loaderStyle: {
    flex: 1,
  },
});

export default ResultShowScreen;
