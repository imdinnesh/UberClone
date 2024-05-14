import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { OnBoarding3, OnBoarding4 } from '@/screens';

const Stack = createStackNavigator();


function ApplicationNavigator() {
	return (<NavigationContainer>
		<Stack.Navigator initialRouteName={OnBoarding3}>
			<Stack.Screen name="Onboarding3" component={OnBoarding3} />
			<Stack.Screen name="Onboarding4" component={OnBoarding4} options={{headerShown:false,headerTransparent:true}}/>
		</Stack.Navigator>
	</NavigationContainer>);
}
export default ApplicationNavigator;
