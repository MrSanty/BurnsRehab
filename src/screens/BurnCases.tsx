import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import AccordionText from "src/components/AccordionText";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const BurnCases: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 5);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>CAUSAS</Text>
          <Text style={styles.title}>DE LAS QUEMADURAS</Text>
        </View>
        <View style={styles.contentContainer}>
        <View style={styles.scroll}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <AccordionText
              title="Escaldaduras"
              text="Por contacto con líquidos calientes o vapor"
              maxHeight={30}
            />
            <AccordionText
              title="Por frío"
              text="La congelación por lesión celular directa por la cristalización del agua en el tejido y la lesión indirecta por isquemia y repercusión"
              maxHeight={70}
            />
            <AccordionText
              title="Contacto"
              text="Lesión por contacto con objetos sólidos calientes o fríos como metales, vidrio, entre otros."
              maxHeight={60}
            />
            <AccordionText
              title="Fuego"
              text="Daño provocado por llamas."
              maxHeight={40}
            />
            <AccordionText
              title="Químicos"
              text="Contacto con productos químicos nocivos como ácidos, lejía, solvente de pintura o gasolina."
              maxHeight={40}
            />
            <AccordionText
              title="Electricidad"
              text="Electricidad transmisión de corriente eléctrica a través de la piel"
              maxHeight={40}
            />
            <AccordionText
              title="Radiación"
              text="Provocada por luz solar u otras fuentes de radiación ultravioleta como camas solares, quemaduras provocadas por radiación ionizantes de equipos de medicina nuclear o por accidentes en plantas nucleares"
              maxHeight={60}
            />
            <AccordionText
              title="Maltrato"
              text="Se tiene la intención de generar daño físico a la víctima."
              maxHeight={40}
            />
          </ScrollView>
        </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    paddingHorizontal: 25
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  },
  scroll: {
    width: '100%',
    height: '92%'
  }
})

export default BurnCases;
