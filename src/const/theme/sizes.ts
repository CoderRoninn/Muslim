import { scale } from '../../utils/responsive';

// App element sizes
export const SIZES = {
  icon: {
    medium: scale(24),
  },
  circle: {
    medium: scale(36),
    large: scale(48),
  },
} as const;
