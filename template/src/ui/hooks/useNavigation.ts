import {NavigationContext} from '@contexts/NavigationContext';
import {useContext} from 'react';

const useNavigation = () => useContext(NavigationContext);
export default useNavigation;
