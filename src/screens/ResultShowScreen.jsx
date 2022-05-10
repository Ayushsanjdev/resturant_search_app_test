import React, { useState, useEffect } from "react";
import { Image, View, FlatList, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
import Loader from "../loader/Loader";

const ResultShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const [loader, setLoader] = useState(false);
  const { id } = route.params;

  const getResult = async (id) => {
    setLoader(true);
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return loader ? (
    <Loader secondary />
  ) : (
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
