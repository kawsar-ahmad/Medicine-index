import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Medicine({ item, name, onChange, items }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle update
  function handleUpdate(id) {
    navigate("/update", {
      state: {
        id: item.id,
        name: item.name,
        generic_name: item.generic_name,
        description: item.description,
        price: item.price,
        batch_number: item.batch_number,
        manufacturer: item.manufacturer,
      },
    });
  }
  // Function to handle delete
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.post(`http://127.0.0.1:8000/delete/${id}`);
      if (response.status === 200) {
        // console.log("Detail deleted successfully");
        const updateItems = items.filter((item) => item.id != id);
        onChange(updateItems);
      }
    } catch (error) {
      console.error("Error deleting detail:", error);
      setError(error);
    }
  };
  return (
    <li className="medicine-item">
      <div className="descriptions">
        <h3>Medicine Name : {item.name}</h3>
        <p>
          <strong>Generic Name</strong> : {item.generic_name}
        </p>
        <p>
          <strong>Manufacturer</strong> : {item.manufacturer}
        </p>
        <p>
          <strong>Descriptions</strong> : {item.description}
        </p>
        <p>
          <strong>Price per tablet</strong> : {item.price} BDT
        </p>
        <p>
          <strong>Batch Number</strong> : {item.batch_number}
        </p>
      </div>
      {name && (
        <>
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
            className="login-btn"
          >
            Delete
          </button>

          <button
            className="login-btn"
            onClick={() => {
              handleUpdate(item.id);
            }}
          >
            update
          </button>
        </>
      )}
    </li>
  );
}
