import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import yelp from "../api/yelp";
import cache from "../util/cache";
import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [connected, setConnected] = useState(false);

  const searchApi = async (searchTerm) => {
    setLoader(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      await cache.store("/search", response.data.businesses);
      setResults(response.data.businesses);
      setLoader(false);
      setError(false);
    } catch (err) {
      const data = await cache.get("/search");
      setLoader(false);
      if (data) {
        setResults(data);
      } else {
        setError(true);
      }
    }
  };
  const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isInternetReachable);
      !state.isConnected &&
        ToastAndroid.show("No Internet Access", ToastAndroid.SHORT);
    });
    searchApi();

    return () => {
      unsubscribe();
    };
  }, []); //first load call

  return [searchApi, results, error, loader];
};
