import { useContext, useState } from "react";
import { GridContext } from "./GridContext";

export const GridProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [columns, setColumns] = useState(6);

  return (
    <GridContext.Provider
      value={{ columns, setColumns }}
    >
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => {
  const context = useContext(GridContext);

  if (!context) {
    throw new Error(
      "useGrid must be used inside GridProvider"
    );
  }

  return context;
};