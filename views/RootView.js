import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';

const RootView = createStackNavigator({
  Home: {
    screen: HomeView,
  },
});

export default RootView;
