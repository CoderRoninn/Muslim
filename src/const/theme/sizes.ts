import { scale } from '../../utils/responsive';

// App element sizes
export const SIZES = {
  icon: {
    extraSmall: scale(16),
    small: scale(20),
    medium: scale(24),
  },
  circle: {
    extraSmall: scale(8),
    small: scale(16),
    medium: scale(36),
    large: scale(48),
  },
  radius: {
    small: scale(8),
    large: scale(20),
  },
} as const;
