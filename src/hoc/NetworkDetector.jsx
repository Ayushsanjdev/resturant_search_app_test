import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { Snackbar } from "react-native-paper";
import NoInternetPage from "../error/NoInternet";
import useResults from "../hooks/useResults";
import cache from "../util/cache";
import { useRoute } from "@react-navigation/native";

export default function (ChildComponent) {
  const NetworkDetector = (props) => {
    const { children } = props;
    const [isConnected, setConnected] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [searchApi, results] = useResults();
    const route = useRoute();
    const routeName = route.name;
    const isCached = async () => await cache.get(`/${routeName}`);

    const handleConnectivity = () => {
      NetInfo.addEventListener((state) => {
        if (state.isInternetReachable) {
          setConnected(true);
          setShowToast(false);
        } else {
          setConnected(false);
          setShowToast(true);
        }
      });
    };

    useEffect(() => {
      handleConnectivity();
    }, []);

    return (
      <>
        {(!isConnected && Boolean(isCached) === true ) && (
          <NoInternetPage
            primaryText='Oops!'
            secondaryText='No Connection!'
            actionClick={() => handleConnectivity()}
            actionText='Refresh'
          />
        )}
        {(isConnected || results.length !== 0) &&  <ChildComponent {...props} />}
        <Snackbar
          onDismiss={() => setShowToast(false)}
          visible={showToast}
          action={{
            label: "Dismiss",
            onPress: () => setShowToast(false),
          }}
          theme={{colors: {accent: isConnected && 'green'}}}
        >
          {isConnected ? "Back online" : "No Internet Access"}
        </Snackbar>
      </>
    );
  };
  return NetworkDetector;
}
