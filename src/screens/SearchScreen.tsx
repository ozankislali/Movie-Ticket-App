import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../theme/theme';
import { searchMovies } from '../api/apicalls';
import InputHeader from '../components/InputHeader';


const { width, height } = Dimensions.get('screen');

const SearchScreen = () => {

  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error("Something went wrong in searchMoviesFunction ");
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColums={2}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          contentContainerStyle={styles.containerGap36}
          renderItem={({ item, index }) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push('MovieDetails', { movieid: item.id });
              }}
              cardWith={width / 3}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMoviesList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
  },
});

export default SearchScreen;
