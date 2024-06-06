import { useEffect, useState } from "react";
import NavBar from "./pages/NavBar";
import MedicineList from "./pages/MedicineList";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  // Function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user-home">
      <NavBar query={query} setQuery={setQuery} />
      <MedicineList items={data} query={query} setQuery={setQuery} />
    </div>
  );
}
