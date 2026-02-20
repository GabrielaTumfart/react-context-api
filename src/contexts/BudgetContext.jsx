import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    return (


    );


  
    
    }

