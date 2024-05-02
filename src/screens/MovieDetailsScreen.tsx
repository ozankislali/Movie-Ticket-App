import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';
import { movieDetails } from '../api/apicalls';

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>MovieDetailsScreen</Text>
      <View style={styles.content}>
        <Text>Content Area</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    paddingTop: 40,
    paddingLeft: 10,
  },
  headerText: {
    color: COLORS.Black,
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieDetailsScreen;