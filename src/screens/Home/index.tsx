import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Home/Header';
import PrayerCard from '../../components/Home/PrayerCard';
import QuickAccessCard from '../../components/Home/QuickAccessCard';
import { QUICK_ACCESS_ITEMS } from '../../data/quickAccess';
import styles from './styles';

const Home = () => {
  // Gets the safe area sizes (top, bottom, left, right) of the device
  const insets = useSafeAreaInsets();

  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <Header />
      <PrayerCard />
      {/* Horizontal quick access list, extends to the screen edges */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.quickAccessList}
        contentContainerStyle={styles.quickAccessContent}
      >
        {/* Cards are created from the data file */}
        {QUICK_ACCESS_ITEMS.map((item) => (
          <QuickAccessCard
            key={item.id}
            image={item.image}
            title={t(item.titleKey)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
