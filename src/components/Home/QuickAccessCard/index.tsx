import { Image, Text, View } from 'react-native';
import { QuickAccessCardProps } from './props';
import styles from './styles';

const QuickAccessCard = ({ image, title }: QuickAccessCardProps) => {
  return (
    // Card container
    <View style={styles.container}>
      {/* Card image */}
      <Image source={image} style={styles.image} resizeMode="contain" />

      {/* Card title */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default QuickAccessCard;
