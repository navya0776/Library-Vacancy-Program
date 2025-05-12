import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const App = () => {
  const peopleCount = 36;

  return (
    <ImageBackground
      source={require('./rectangle.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.Title}>PEOPLE IN LIBRARY{'\n'}AT THE MOMENT</Text>
      <Text style={styles.count}>{peopleCount}</Text>

      {/* Bottom row with icon and text */}
      <View style={styles.infoRow}>
        <Image
          source={require('./Info.png')}
          style={styles.icon}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="info icon"
        />
        <Text style={styles.info}>CLICK TO SEE LEVEL WISE INFO</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between', // Push top and bottom content apart
    paddingBottom: 40, // Add spacing from bottom
  },
  Title: {
    marginTop: 156,
    fontSize: 30,
    fontWeight: '900',
    color: '#0C0000',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  count: {
    textAlign: 'center',
    fontSize: 256,
    fontWeight: '800',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    marginTop: 0,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  info: {
    fontSize: 12,
    color: '#000',
    fontWeight:700,
  },
});

export default App;
