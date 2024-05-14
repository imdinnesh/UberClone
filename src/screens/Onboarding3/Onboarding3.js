import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Onboarding3 = () => {

const navigation = useNavigation()

  return (
    <View>
      <Text>Onboarding3</Text>
      <Button title="Go to Onboarding4" onPress={() => navigation.navigate('Onboarding4')} />
    </View>
  )
}

export default Onboarding3