import { scale } from '../../utils/responsive';

// App element sizes
export const SIZES = {
  icon: {
    extraSmall: scale(16),
    small: scale(20),
    medium: scale(24),
    large: scale(48),
  },
  circle: {
    extraSmall: scale(8),
    small: scale(16),
    medium: scale(36),
    large: scale(48),
  },
  card: {
    width: scale(90),
    height: scale(80),
  },
  radius: {
    small: scale(8),
    large: scale(20),
  },
} as const;
