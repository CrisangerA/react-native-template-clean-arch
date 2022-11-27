import {ScaffoldContext} from '@contexts/ScaffoldContext';
import {useContext} from 'react';

const useScaffoldContext = () => useContext(ScaffoldContext);
export default useScaffoldContext;
