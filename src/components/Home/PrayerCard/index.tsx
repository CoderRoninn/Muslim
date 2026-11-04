import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../const/theme';
import styles from './styles';

// Dummy prayer time, will come from real data later
const PRAYER_TIME = '19:29';

const PrayerCard = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    // Card container
    <View style={styles.container}>
      {/* Top row */}
      <View style={styles.topRow}>
        {/* Now badge and prayer name */}
        <View style={styles.leftGroup}>
          {/* Now badge */}
          <View style={styles.nowBadge}>
            {/* Gold dot */}
            <View style={styles.nowDot} />
            {/* Now text */}
            <Text style={styles.nowText}>{t('home.prayerCard.now')}</Text>
          </View>
          {/* Prayer name */}
          <Text style={styles.prayerName}>{t('home.prayerCard.prayerName')}</Text>
          {/* Moon icon */}
          <AntDesign name="moon" size={SIZES.icon.small} color={COLORS.gold} />
        </View>
        {/* District and country */}
        <View style={styles.rightGroup}>
          {/* District */}
          <Text style={styles.location}>{t('home.prayerCard.district')}</Text>
          {/* Country */}
          <Text style={styles.location}>{t('home.prayerCard.country')}</Text>
        </View>
      </View>
      {/* Prayer time */}
      <Text style={styles.time}>{PRAYER_TIME}</Text>
      {/* Time left until the next prayer */}
      <Text style={styles.remaining}>{t('home.prayerCard.remaining')}</Text>
      {/* Footer row with top divider */}
      <View style={styles.footer}>
        {/* View all prayer times text */}
        <Text style={styles.footerText}>{t('home.prayerCard.viewAll')}</Text>
        {/* Arrow icon */}
        <FontAwesome6 name="arrow-right" size={SIZES.icon.extraSmall} color={COLORS.gold} />
      </View>
    </View>
  );
};

export default PrayerCard;
