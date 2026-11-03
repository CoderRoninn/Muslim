import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../../const/theme';
import { scale } from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  avatarContainer: {
    width: SIZES.circle.large,
    height: SIZES.circle.large,
    borderRadius: SIZES.circle.large / 2,
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
    width: SIZES.circle.medium,
    height: SIZES.circle.medium,
    borderRadius: SIZES.circle.medium / 2,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
    backgroundColor: COLORS.translucentBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -SPACING.extraSmall,
    end: -SPACING.extraSmall,
    width: SIZES.circle.small,
    height: SIZES.circle.small,
    borderRadius: SIZES.circle.small / 2,
    backgroundColor: COLORS.notificationBadge,
    borderWidth: 1,
    borderColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: TYPOGRAPHY.badge.fontSize,
    lineHeight: TYPOGRAPHY.badge.lineHeight,
    fontWeight: TYPOGRAPHY.badge.fontWeight,
    color: COLORS.text,
  },
});

export default styles;
