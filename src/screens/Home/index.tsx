import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Home/Header';
import PrayerCard from '../../components/Home/PrayerCard';
import QuickAccess from '../../components/Home/QuickAccess';
import styles from './styles';

const Home = () => {
  // Gets the safe area sizes (top, bottom, left, right) of the device
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <Header />
      <PrayerCard />
      <QuickAccess />
    </View>
  );
};

export default Home;
