import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/search/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultList";
import NoInternetPage from "../error/NoInternet";
import Loader from "../loader/Loader";
import { useNavigation } from "@react-navigation/native";
// import { Snackbar } from "react-native-paper";
// <Snackbar visible={true}>No Internet</Snackbar>
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error, loader] = useResults();

  // console.log(results);

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  useEffect(() => {
    setTerm("");
  }, [error]); //resetting search bar

  return loader ? (
    <Loader primary />
  ) : (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {error ? (
        <NoInternetPage primaryText="Oops!" secondaryText="Please check your connection!" actionText="Retry" actionClick={() => searchApi('')} />
      ) : (
        <ScrollView>
          <ResultsList
            results={filterResultByPrice("$")}
            title='Big Savers'
            navigation={navigation}
          />
          <ResultsList
            title='Bit Saver'
            results={filterResultByPrice("$$")}
            navigation={navigation}
          />
          <ResultsList
            results={filterResultByPrice("$$$")}
            title='Big Expense'
            navigation={navigation}
          />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: "red",
    alignSelf: "center",
  },
  resultLengthStyle: {
    marginLeft: 15,
    marginVertical: 10,
  },
  loaderImage: {
    flex: 1,
  },
});

export default SearchScreen;
