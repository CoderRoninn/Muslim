import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SIZES } from '../../../const/theme';
import styles from './styles';

const Header = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    // Header row
    <View style={styles.container}>
      {/* Avatar circle */}
      <View style={styles.avatarContainer}>
        {/* User icon */}
        <FontAwesome6 
          name="user" 
          size={SIZES.icon.medium} 
          color="black" />
      </View>
      {/* Texts next to the avatar */}
      <View style={styles.textContainer}>
        {/* Title */}
        <Text style={styles.title}>{t('home.header.title')}</Text>
        {/* Subtitle */}
        <Text style={styles.subtitle}>{t('home.header.subtitle')}</Text>
      </View>
      {/* Notification button */}
      <View style={styles.notificationButton}>
        {/* Bell icon */}
        <MaterialCommunityIcons
          name="bell"
          size={SIZES.icon.medium}
          color="white"
        />
      </View>
    </View>
  );
};

export default Header;
