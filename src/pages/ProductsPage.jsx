import { useBudget } from "../contexts/BudgetContext";

export default function ProductsPage() {

  const { budgetMode } = useBudget();

  const products = [
    { id: 1, title: "Prodotto A", price: 20 },
    { id: 2, title: "Prodotto B", price: 50 },
    { id: 3, title: "Prodotto C", price: 15 },
  ];
  

  

  return (
     
  );
}
