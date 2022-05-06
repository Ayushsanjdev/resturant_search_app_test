import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetail = (props) => {
  const { result } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    borderRadius: 4,
    height: 120,
  },
  name: {
    fontWeight: "bold",
  },
  rating: {
    fontSize: 12,
    color: '#555',
    fontWeight: 'bold'
  },
});

export default ResultDetail;
