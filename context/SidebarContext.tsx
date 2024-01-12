// SidebarContext.js
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <SidebarContext.Provider value={{ expanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
//   if (!context) {
//     throw new Error('useSidebar must be used within a SidebarProvider');
//   }
  return context;
};
