import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddNewMed = () => {
  const [medName, setMedName] = useState("");
  const [medGen, setMedGen] = useState("");
  const [medDesc, setMedDesc] = useState("");
  const [medPrice, setMedPrice] = useState(null);
  const [medManu, setMedManu] = useState("");
  const [medBatch, setMedBatch] = useState(null);
  const navigate = useNavigate();
  function Nav() {
    navigate("/admin");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Successfully added");
    const data = {
      name: medName,
      generic_name: medGen,
      manufacturer: medManu,
      price: medPrice,
      description: medDesc,
      batch_number: medBatch,
    };
    console.log(data);
    try {
      const response = await axios.post("http://127.0.0.1:8000/", data);
      console.log("Data posted successfully:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="login">
      <h1>Add new Medicine</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Medicine name</label>
        <input
          type="text"
          placeholder="name"
          required
          value={medName}
          onChange={(e) => {
            setMedName(e.target.value);
          }}
        />
        <label>Generic name</label>
        <input
          type="text"
          placeholder="generic_name"
          required
          value={medGen}
          onChange={(e) => {
            setMedGen(e.target.value);
          }}
        />
        <label>Manufacturer</label>
        <input
          type="text"
          placeholder="manufacturer"
          required
          value={medManu}
          onChange={(e) => {
            setMedManu(e.target.value);
          }}
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="price"
          required
          value={medPrice}
          onChange={(e) => {
            setMedPrice(e.target.value);
          }}
        />
        <label>Description</label>
        <textarea
          type="text"
          placeholder="description"
          required
          value={medDesc}
          onChange={(e) => {
            setMedDesc(e.target.value);
          }}
        />
        <label>Batch Number</label>
        <input
          type="number"
          placeholder="batch_number"
          required
          value={medBatch}
          onChange={(e) => {
            setMedBatch(e.target.value);
          }}
        />

        <div className="buttons">
          <button className="login-btn">Add</button>
          <button className="login-btn" onClick={Nav}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddNewMed;
