import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

function Picture({route}) {
  const {url} = route.params;
  return (
    <View>
      <Image style={styles.image} source={{uri: url}} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Picture;
