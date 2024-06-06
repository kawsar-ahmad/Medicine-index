import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MedicineList from "./MedicineList";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/"); // Replace with your actual URL
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
      <NavBar admin="admin" query={query} setQuery={setQuery} />
      <MedicineList
        items={data}
        name="admin"
        onChange={setData}
        query={query}
        setQuery={setQuery}
      />
    </div>
  );
};

export default Admin;
