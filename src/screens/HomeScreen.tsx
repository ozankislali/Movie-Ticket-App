import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/theme';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => {
            navigation.push('MovieDetails');
          }}
        >
          <Text style={styles.headerText}>HomeScreen</Text>
        </TouchableOpacity>
      </View>
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
  },
  header: {
    backgroundColor: COLORS.Black,
    paddingTop: 40,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  headerText: {
    color: COLORS.White,
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
