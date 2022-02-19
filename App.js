import DailyPicScreen from "./screens/dailyPic";
import SpaceCraftsScreen from "./screens/spaceCrafts";
import StarMapScreen from "./screens/starMap";

function App(){
    return(
        <NavigationContainer>
            <StackNavigator initailRouteName='Home' ScreenOptions={{
                headerShown: false
            }} >
                <Stack.Sreen name="Home" component={HomeScreen}/>
                <Stack.Sreen name="SpaceCrafts" component={SpaceCraftsScreen}/>
                <Stack.Sreen name="DailyPic" component={DailyPicScreen}/>
                <Stack.Sreen name="StarMap" component={StarMapScreen}/>
            </StackNavigator>
        </NavigationContainer>
    )
}