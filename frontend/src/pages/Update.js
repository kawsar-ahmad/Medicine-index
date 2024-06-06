import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function Nav() {
    navigate("/admin");
  }
  const {
    id,
    name,
    generic_name,
    description,
    price,
    manufacturer,
    batch_number,
  } = location.state || {};

  const [medName, setMedName] = useState(name);
  const [medGen, setMedGen] = useState(generic_name);
  const [medDesc, setMedDesc] = useState(description);
  const [medPrice, setMedPrice] = useState(price);
  const [medManu, setMedManu] = useState(manufacturer);
  const [medBatch, setMedBatch] = useState(batch_number);
  const data = {
    name: medName,
    generic_name: medGen,
    manufacturer: medManu,
    price: medPrice,
    description: medDesc,
    batch_number: medBatch,
  };
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/updatee/${id}`,
        data
      );
      console.log("Data posted successfully:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }
  return (
    <div>
      {" "}
      <div className="login">
        <h1>Update</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>Medicine name</label>
          <input
            type="text"
            placeholder="name"
            value={medName}
            onChange={(e) => {
              setMedName(e.target.value);
            }}
          />
          <label>Generic name</label>
          <input
            type="text"
            placeholder="generic_name"
            value={medGen}
            onChange={(e) => {
              setMedGen(e.target.value);
            }}
          />
          <label>Manufacturer</label>
          <input
            type="text"
            placeholder="manufacturer"
            value={medManu}
            onChange={(e) => {
              setMedManu(e.target.value);
            }}
          />
          <label>Price per tablet</label>
          <input
            type="number"
            placeholder="price"
            value={medPrice}
            onChange={(e) => {
              setMedPrice(e.target.value);
            }}
          />
          <label>Descriptions</label>
          <input
            type="text"
            placeholder="description"
            value={medDesc}
            onChange={(e) => {
              setMedDesc(e.target.value);
            }}
          />
          <label>Batch Number</label>
          <input
            type="number"
            placeholder="batch_number"
            value={medBatch}
            onChange={(e) => {
              setMedBatch(e.target.value);
            }}
          />

          <div className="buttons">
            <button className="login-btn">Update</button>
            <button className="login-btn" onClick={Nav}>
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
