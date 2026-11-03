import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../../const/theme';
import { scale } from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  avatarContainer: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    borderWidth: 2,
    borderColor: COLORS.gold,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: TYPOGRAPHY.title.fontSize,
    lineHeight: TYPOGRAPHY.title.lineHeight,
    fontWeight: TYPOGRAPHY.title.fontWeight,
    color: COLORS.text,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.subtitle.fontSize,
    lineHeight: TYPOGRAPHY.subtitle.lineHeight,
    fontWeight: TYPOGRAPHY.subtitle.fontWeight,
    color: COLORS.textMuted,
  },
  notificationButton: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
