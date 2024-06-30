import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants';
import CustomButton from '../../components/common/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <CustomButton
        label="카카오 로그인"
        size="lg"
        onPress={() => navigation.navigate(authNavigations.KAKAO)}
      />
      <CustomButton
        label="구글 로그인"
        size="lg"
        onPress={() => navigation.navigate(authNavigations.GOOGLE)}
      />
      <CustomButton
        label="이메일 로그인"
        size="lg"
        onPress={() => navigation.navigate(authNavigations.LOGIN)}
        icon={<Ionicons name="mail-outline" color={colors.WHITE} size={20} />}
      />
    </SafeAreaView>
  );
}

export default AuthHomeScreen;
