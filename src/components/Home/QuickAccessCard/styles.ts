import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../../const/theme';

const styles = StyleSheet.create({
  container: {
    width: SIZES.card.width,
    height: SIZES.card.height,
    borderRadius: SIZES.radius.large,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
    backgroundColor: COLORS.translucentBackground,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.extraSmall,
  },
  image: {
    width: SIZES.icon.large,
    height: SIZES.icon.large,
  },
  title: {
    ...TYPOGRAPHY.label,
    color: COLORS.text,
  },
});

export default styles;
