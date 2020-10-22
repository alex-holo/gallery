import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ImgItem = ({imgUri, userName}) => {
  const navigation = useNavigation();
  const goToPicture = () => {
    navigation.navigate('Picture', {
      url: imgUri,
    });
  };

  return (
    <View style={styles.block}>
      <TouchableOpacity activeOpacity={0.8} onPress={goToPicture}>
        <Image style={styles.img} source={{uri: imgUri}} />
        <Text style={styles.textInfo}>{userName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    margin: 10,
  },
  img: {
    height: 200,
    width: 150,
  },
  textInfo: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ImgItem;
