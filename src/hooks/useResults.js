import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import yelp from "../api/yelp";
import cache from "../util/cache";
import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";
import { useRoute } from "@react-navigation/native";


export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [connected, setConnected] = useState(false);
  const route = useRoute();
  const routeName = route.name;

  const searchApi = async (searchTerm, param) => {
    setLoader(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      await cache.store(`/${routeName}`, response.data.businesses);
      setResults(response.data.businesses);
      setLoader(false);
      setError(false);
    } catch (err) {
      const data = await cache.get(`/${routeName}`);
      setLoader(false);
      if (data) {
        setResults(data);
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    searchApi();
  }, []); //first load call

  return [searchApi, results, error, loader];
};
