import { moderateScale } from '../../utils/responsive';

// App text styles
export const TYPOGRAPHY = {
  title: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    fontWeight: '700',
  },
  subtitle: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    fontWeight: '400',
  },
  badge: {
    fontSize: moderateScale(8),
    lineHeight: moderateScale(10),
    fontWeight: '700',
  },
} as const;
