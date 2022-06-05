import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Input = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, props.error && t.borderRed500, props.style]}
        {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Input;
