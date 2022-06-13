import React from "react";
import { WebView } from "react-native-webview";
import { View, Text, StyleSheet } from "react-native";

const EntrepreneurLogin = () => {
  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;

  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://app.minfal.nl" }}
      scrollEnabled={true}
      injectedJavaScript={INJECTED_JAVASCRIPT}
      onMessage={() => {}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default EntrepreneurLogin;
