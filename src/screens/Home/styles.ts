import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../const/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.huge,
  },
  // Cancels the screen side padding so cards can scroll to the edges
  quickAccessList: {
    marginHorizontal: -SPACING.extraLarge,
    flexGrow: 0,
  },
  // Brings the first card back to the screen side padding
  quickAccessContent: {
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.medium,
  },
});

export default styles;
