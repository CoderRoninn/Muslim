import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../../const/theme';

const styles = StyleSheet.create({
  container: {
    padding: SPACING.large,
    gap: SPACING.extraSmall,
    borderRadius: SIZES.radius.large,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
    backgroundColor: COLORS.translucentBackground,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
  },
  nowBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
    paddingVertical: SPACING.extraSmall,
    paddingHorizontal: SPACING.small,
    borderRadius: SIZES.radius.small,
    borderWidth: 1,
    borderColor: COLORS.goldTranslucentBorder,
    backgroundColor: COLORS.goldTranslucentBackground,
  },
  nowDot: {
    width: SIZES.circle.extraSmall,
    height: SIZES.circle.extraSmall,
    borderRadius: SIZES.circle.extraSmall / 2,
    backgroundColor: COLORS.gold,
  },
  nowText: {
    fontSize: TYPOGRAPHY.label.fontSize,
    lineHeight: TYPOGRAPHY.label.lineHeight,
    fontWeight: TYPOGRAPHY.label.fontWeight,
    color: COLORS.gold,
  },
  prayerName: {
    fontSize: TYPOGRAPHY.title.fontSize,
    lineHeight: TYPOGRAPHY.title.lineHeight,
    fontWeight: TYPOGRAPHY.title.fontWeight,
    color: COLORS.text,
  },
  rightGroup: {
    alignItems: 'flex-end',
  },
  location: {
    fontSize: TYPOGRAPHY.label.fontSize,
    lineHeight: TYPOGRAPHY.label.lineHeight,
    fontWeight: TYPOGRAPHY.label.fontWeight,
    color: COLORS.text,
  },
  time: {
    fontSize: TYPOGRAPHY.time.fontSize,
    lineHeight: TYPOGRAPHY.time.lineHeight,
    fontWeight: TYPOGRAPHY.time.fontWeight,
    letterSpacing: TYPOGRAPHY.time.letterSpacing,
    color: COLORS.text,
  },
  remaining: {
    fontSize: TYPOGRAPHY.subtitle.fontSize,
    lineHeight: TYPOGRAPHY.subtitle.lineHeight,
    fontWeight: TYPOGRAPHY.subtitle.fontWeight,
    color: COLORS.textMuted,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.medium,
    paddingTop: SPACING.medium,
    borderTopWidth: 1,
    borderTopColor: COLORS.translucentBorder,
  },
  footerText: {
    fontSize: TYPOGRAPHY.label.fontSize,
    lineHeight: TYPOGRAPHY.label.lineHeight,
    fontWeight: TYPOGRAPHY.label.fontWeight,
    color: COLORS.text,
  },
});

export default styles;
