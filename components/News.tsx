import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text
          style={styles.mainText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Bonjour comment allez vous ?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  mainText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  }
});
