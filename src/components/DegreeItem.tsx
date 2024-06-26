import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ButtonGradient from './ButtonGradient';
import { FC, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Clasification } from 'src/types/clasification';
import { useAccordionAnimate } from 'src/hooks/useAccordionAnimate';

interface Props {
  item: Clasification
}

const DegreeItem: FC<Props> = ({ item }) => {
  const [ isActive, setIsActive ] = useState(false);
  const accordionAnimate = useAccordionAnimate(0, isActive);

  return (
    <View style={styles.container}>
      <ButtonGradient
        text={item.title}
        isActive={isActive}
        isAnimated={true}
        onPress={() => setIsActive(!isActive)}
      />
      <Animated.View style={[ styles.content, accordionAnimate ]}>
        <Text style={styles.textRegular}>
          <Image
            source={require('src/assets/icons/item.png')}
            style={styles.itemIcon}
          />
          {' '}
          <Text style={styles.textBold}>
            Conversesmith:
          </Text>
          {' '}
          {item.conversesmith}
        </Text>
        <Text style={styles.textRegular}>
          <Image
            source={require('src/assets/icons/item.png')}
            style={styles.itemIcon}
          />
          {' '}
          <Text style={styles.textBold}>
            Denominación ABA:
          </Text>

          {' '}
          {item.denominationABA}
        </Text>
        <Text style={styles.textRegular}>
          <Image
            source={require('src/assets/icons/item.png')}
            style={styles.itemIcon}
          />
          {' '}
          <Text style={styles.textBold}>
            Nivel Histológico:
          </Text>
          {' '}
          {item.histologycLevel}
        </Text>
        <Text style={styles.textRegular}>
          <Image
            source={require('src/assets/icons/item.png')}
            style={styles.itemIcon}
          />
          {' '}
          <Text style={styles.textBold}>
            Pronóstico:
          </Text>
          {' '}
          {item.pronostic}
        </Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    gap: 10
  },
  content: {
    marginLeft: 20,
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: '#2E2F32',
  },
  textRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    width: 'auto',
    color: '#2E2F32'
  },
  itemIcon: {
    width: 10,
    height: 10
  }
})

export default DegreeItem;