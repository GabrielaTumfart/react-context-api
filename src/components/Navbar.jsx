import { useBudget } from "../contexts/BudgetContext";

export default function Navbar() {
    const { budgetMode, setBudgetMode } = useBudget();

    return (

        <button onClick={() => setBudgetMode(!budgetMode)}>
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            
        </button>


    );
}  