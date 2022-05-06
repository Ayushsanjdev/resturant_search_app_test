import React, { useState } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultList";
import SplashLoader from "../../assets/splash2.gif";
import ErrorPage from "../components/ErrorPage";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error, loader] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return loader ? (
    <Image source={SplashLoader} style={styles.loaderImage} />
  ) : (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {error ? (
        <ErrorPage />
      ) : (
        <ScrollView>
          <ResultsList results={filterResultByPrice("$")} title='Big Savers' />
          <ResultsList title='Bit Saver' results={filterResultByPrice("$$")} />
          <ResultsList
            results={filterResultByPrice("$$$")}
            title='Big Expense'
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
