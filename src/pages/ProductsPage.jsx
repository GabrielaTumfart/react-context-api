import axios from "axios";
import { useEffect, useState } from "react";
import { useBudget } from "../contexts/BudgetContext";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { budgetMode } = useBudget();

  return (
     
  );
}
