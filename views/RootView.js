import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import LoginView from './LoginView';
import ComprarView from './ComprarView';
import MinhaContaView from './MinhaContaView';
import ViagensView from './ViagensView';

const RootView = createStackNavigator({
  Home: {
    screen: HomeView,
  },
  Login: {
    screen: LoginView,
  },
  Comprar: {
    screen: ComprarView,
  },
  MinhaConta: {
    screen: MinhaContaView,
  },
  Viagens: {
    screen: ViagensView,
  },
});

export default RootView;
