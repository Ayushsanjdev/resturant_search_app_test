import React, { useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import ErrorPage from "./ErrorPage";
import { Snackbar, Text } from "react-native-paper";

const OfflinePage = () => {
  const netInfo = useNetInfo();
  const [showToast, setShowToast] = useState(true);
  netInfo.isConnected ? ToastAndroid.show('you are online', ToastAndroid.SHORT) : ToastAndroid.show('no internet available', ToastAndroid.SHORT);
  return (
    <>
      <Text style={{ fontSize: 15}}>Type: {netInfo.type}</Text>
      <Text style={{ fontSize: 15}}>
        Is Internet Available?: {netInfo.isInternetReachable ? "Yes" : "no"}
      </Text>
      <Text style={{ fontSize: 15}}>Is Connected?: {netInfo.isConnected && "Yes"}</Text>
      <Text style={{ fontSize: 15}}>is wifi enabled?: {netInfo.isWifiEnabled ? "Y" : "N"}</Text>
      {!netInfo.isConnected && <ErrorPage />}
      {/* <Snackbar
        style={{ backgroundColor: "lightgreen", bottom: 0 }}
        visible={showToast}
        action={{
          label: "close",
          labelStyle: {color: 'red'},
          onPress: () => {
            setShowToast(false);
          },
        }}
      >
        {netInfo.isConnected ? (
          <Text>back online</Text>
        ) : (
          <Text>no internet connection</Text>
        )}
      </Snackbar> */}
    </>
  );
};

const styles = StyleSheet.create({});
export default OfflinePage;
