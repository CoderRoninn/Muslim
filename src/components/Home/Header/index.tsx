import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Text, View } from 'react-native';
import { ANIMATION, SIZES } from '../../../const/theme';
import styles from './styles';

// Dummy user name, will come from the user data later
const USER_NAME = 'Doğukan Süme';

// Fades the opacity value to the target, then calls onEnd if it finished
const fadeTo = (
  opacity: Animated.Value,
  toValue: number,
  onEnd?: () => void
) => {
  Animated.timing(opacity, {
    toValue,
    duration: ANIMATION.fadeDuration,
    useNativeDriver: true,
  }).start(({ finished }) => {
    if (finished) onEnd?.();
  });
};

const Header = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  // Decides which text the subtitle shows: the user name or the date
  const [showName, setShowName] = useState(true);

  // Subtitle opacity: 1 is visible, 0 is hidden
  const opacity = useRef(new Animated.Value(1)).current;

  // Switches the subtitle text with a fade animation, over and over
  useEffect(() => {
    const interval = setInterval(() => {
      // The old text fades out, then the text changes and the new one fades in
      fadeTo(opacity, 0, () => {
        setShowName((previous) => !previous);
        fadeTo(opacity, 1);
      });
    }, ANIMATION.subtitleHold + ANIMATION.fadeDuration * 2);

    // Stops the timer and animation on unmount
    return () => {
      clearInterval(interval);
      opacity.stopAnimation();
    };
  }, [opacity]);

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
        <Animated.Text style={[styles.subtitle, { opacity }]}>
          {showName ? USER_NAME : t('home.header.subtitle')}
        </Animated.Text>
      </View>
      {/* Notification button */}
      <View style={styles.notificationButton}>
        {/* Bell icon */}
        <MaterialCommunityIcons
          name="bell"
          size={SIZES.icon.medium}
          color="white"
        />
        {/* Notification count badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText} allowFontScaling={false}>
            2
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
