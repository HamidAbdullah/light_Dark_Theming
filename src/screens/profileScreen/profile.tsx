import {View, Text} from 'react-native';
import React from 'react';
import useThemedStyles from '../../theming/useThemedStyles';
import styles from '../HomeScreen/styles';

const Profile = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.body}>
      <Text style={style.title}>profile</Text>
      <Text style={style.text}>
        مشکلات سے نہیں ڈرنا چاہیے، ان سے مقابلہ کرنا چاہیے
      </Text>
    </View>
  );
};

export default Profile;
