import {StyleSheet} from 'react-native';

const styles = (theme: any) =>
  StyleSheet.create({
    body: {
      alignItems: 'center',
      backgroundColor: theme.colors.BACKGROUND,
      flex: 1,
      justifyContent: 'space-evenly',
      padding: 20,
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      fontWeight: 'bold',
      letterSpacing: theme.typography.letterSpacing.L,
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: 'justify',
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      fontWeight: 'bold',
      letterSpacing: theme.typography.letterSpacing.M,
    },
  });

export default styles;
