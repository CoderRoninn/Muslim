import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

const Home = () => {
  // Gets the safe area sizes (top, bottom, left, right) of the device
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
