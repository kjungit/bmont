import React, {ReactNode} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  Dimensions,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../constants';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'lg' | 'md';
  inValid?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}
const deviceHeight = Dimensions.get('screen').height;
function CustomButton({
  label,
  variant = 'filled',
  size = 'lg',
  inValid = false,
  style = null,
  textStyle = null,
  icon = null,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        styles[variant],
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
        style,
      ]}
      {...props}>
      <View style={styles[size]}>
        {icon}
        <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filled: {
    backgroundColor: colors.BLACK,
  },
  outlined: {
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  inValid: {
    opacity: 0.5,
  },
  lg: {
    width: '100%',
    paddingVertical: deviceHeight > 740 ? 16 : 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  md: {
    width: '50%',
    paddingVertical: deviceHeight > 740 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.BLACK,
  },
  filledPressed: {
    backgroundColor: colors.GRAY_DARK_HOVER,
  },
  outlinedPressed: {
    borderColor: colors.BLACK,
    borderWidth: 1,
    opacity: 0.5,
  },
});

export default CustomButton;
