import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../const/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.huge,
  },
});

export default styles;
