// context/GlobalStateContext.js
import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    expanded: true, // Example global state
    // Add more global state properties as needed
  });

  const toggleExpanded = () => {
    setGlobalState((prevState) => ({
      ...prevState,
      expanded: !prevState.expanded,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, toggleExpanded }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
