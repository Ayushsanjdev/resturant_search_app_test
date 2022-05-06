import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  View,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import yelp from "../api/yelp";
import ErrorPage from "../components/ErrorPage";
import useResults from "../hooks/useResults";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [loader, setLoader, error, setError] = useResults();
  console.log(result);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    // setLoader(true)
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      // setLoader(false);
    } catch (error) {
      // setLoader(false);
      // setError(true);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  // return loader ? (
  //   <ActivityIndicator
  //     size='large'
  //     color='#0000ff'
  //     style={styles.loaderStyle}
  //   />
  // ) : (
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.subtitle}>{result.location.address1}, {result.display_phone}</Text>
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444'
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
