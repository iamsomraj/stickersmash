import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sticker Smash</Text>
      <Text style={styles.text}>Developed by</Text>
      <Link
        style={styles.link}
        href='https://github.com/iamsomraj'
        target='_blank'
        rel='noopener noreferrer'
      >
        Somraj Mukherjee
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
  link: {
    color: '#61dafb',
  },
});
