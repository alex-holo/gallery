import React, {useEffect} from 'react';
import ImgItem from './ImgItem';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getPicture} from '../redux/photo-reducer';

function ImgItemContainer({data, getPicture}) {
  useEffect(() => getPicture(), [data]);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.wrapper}>
        {data.map((el) => (
          <ImgItem key={el.id} userName={el.user.name} imgUri={el.urls.raw} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  data: state.mainPage.data,
});

export default connect(mapStateToProps, {getPicture})(ImgItemContainer);
