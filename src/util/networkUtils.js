import NetInfo from "@react-native-community/netinfo";

// Subscribe to network change
const subscribeToNetwork = NetInfo.addEventListener((state) => {
  return state.isConnected;
});

export { subscribeToNetwork };
