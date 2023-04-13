/**
 *  Create React context and init hook useContext
 */
import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

import VideosStore from "./videos";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }: any) => {
  const store = useLocalObservable(() => ({
    VideosStore: new VideosStore(),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStores = () => useContext(StoreContext);
