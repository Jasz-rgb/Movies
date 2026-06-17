import { createContext } from "react";

export interface GridContextType {
  columns: number;
  setColumns: (cols: number) => void;
}

export const GridContext =
  createContext<GridContextType | null>(null);