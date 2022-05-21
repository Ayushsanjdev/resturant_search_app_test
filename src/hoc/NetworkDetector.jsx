import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { Text, Button } from "react-native-paper";
import NoInternetPage from "../error/NoInternet";
import useResults from "../hooks/useResults";

export default function (ChildComponent) {
  const NetworkDetector = (props) => {
    const { children } = props;
    const [isConnected, setConnected] = useState(true);
    const { searchApi } = useResults();

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) =>
        state.isConnected ? setConnected(true) : setConnected(false)
      );
      unsubscribe();
      return () => {
        unsubscribe();
      };
    });
    {
      /* <NoInternetPage
      primaryText='Oops!'
      secondaryText='No Connection!'
      actionClick={() => searchApi("")}
      actionText='Refresh'
    /> */
    }

    return (
      <>
        {!isConnected && (
          <Text style={{ fontSize: 20 }}>no network detected</Text>
        )}
        {isConnected && <ChildComponent {...props}/>}
      </>
    );
  };
  return NetworkDetector;
}
