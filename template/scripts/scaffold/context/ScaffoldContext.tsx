import React, {PropsWithChildren} from 'react';

// ---------------------------------------------------------------------------------------------------
interface ScaffoldContextState {
  componentId: string;
}
const initialState: ScaffoldContextState = {
  componentId: '',
};
const ScaffoldContext = React.createContext<ScaffoldContextState>(initialState);
// ---------------------------------------------------------------------------------------------------

function ScaffoldProvider({children}: PropsWithChildren) {
  return (
    <ScaffoldContext.Provider value={{componentId: 'Hola mundo'}}>
      {children}
    </ScaffoldContext.Provider>
  );
}

export {ScaffoldContext, ScaffoldProvider};
