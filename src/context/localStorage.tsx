import React, { createContext, useState, useEffect } from "react";

// local storage data
interface LocalStorageData {
  name: string;
}

// context type
export interface LocalStorageContextType {
  data: LocalStorageData;
  setData: React.Dispatch<React.SetStateAction<LocalStorageData>>;
  getData: () => LocalStorageData
}

// create context
const LocalStorageContext = createContext<LocalStorageContextType | undefined>(
  undefined
);

// local storage provider props
interface LocalStorageProviderProps {
  children: React.ReactNode;
}

export const LocalStorageProvider: React.FC<LocalStorageProviderProps> = ({
  children,
}) => {
  // retrieve data from local storage on initial render
  const storedData: LocalStorageData = JSON.parse(
    localStorage.getItem("appData") || '{"name": ""}'
  );
  const [data, setData] = useState<LocalStorageData>(storedData);

  useEffect(() => {
    localStorage.setItem('appData', JSON.stringify(data))
  }, [data])

  const getData = (): LocalStorageData => data


  return (
    <LocalStorageContext.Provider value={{data, setData, getData}}>
        {children}
    </LocalStorageContext.Provider>
  )

};

export default LocalStorageContext