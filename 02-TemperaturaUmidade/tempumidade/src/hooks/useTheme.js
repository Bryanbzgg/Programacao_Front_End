import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextInstance";

export function useTheme() {
  const context = useContext (ThemeContext);
  if (context === undefined) 
    throw new Error("useTheme precida de um themeProvider");
    return context;
  
}