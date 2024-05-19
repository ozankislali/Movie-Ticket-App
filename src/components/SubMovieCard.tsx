import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BORDERRADIUS, COLORS, SPACING } from '../theme/theme';

const SubMovieCard = (props:any) => {
  return (
      <TouchableOpacity onPress={() => {}}>
        <View 
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft:SPACING.space_36}
              : props.isLast
              ? {marginRight:SPACING.space_36}
              : {}
            : {},
          props.shoudlMarginatedAround ? {margin:SPACING.space_12} : {},
          {maxWidth: props.cardWith},
        ]}>
        <Image 
          style={[styles.cardImage,{width:props.cardWith,}]}
          source={{uri: props.imagePath}} 
        />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  cardImage:{
    aspectRatio:2/3,
    borderRadius:BORDERRADIUS.radius_20,
  },
});

export default SubMovieCard;
