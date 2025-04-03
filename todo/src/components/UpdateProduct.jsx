import React, { useEffect, useState } from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 8px 16px rgba(155, 100, 100, 0.2)",
  };

  const headingStyle = {
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  };

  const formStyle = {
    display: "grid",
    gap: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  };

  const gridItemStyle = {
    padding: "0 10px",
  };

  const [updateProduct, setUpdateProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => setUpdateProduct(res.data))
      .catch((err) => alert("Error fetching data: " + err));
  }, [id]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then(() => {
        alert("Saved successfully");
        navigate("/products");
      })
      .catch((err) => alert("Error updating data: " + err));
  };

  if (updateProduct !== null) {
    return (
      <Paper elevation={10} style={paperStyle}>
        <Typography variant="h5" style={headingStyle} textAlign="center">
          Update Product
        </Typography>
        <Grid2 component="form" style={formStyle} onSubmit={handleUpdate}>
          <TextField
            value={updateProduct.title}
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={updateProduct.category}
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid2 container spacing={2} style={{ marginTop: "10px" }}>
            <Grid2 xs={6} style={gridItemStyle}>
              <TextField
                value={updateProduct.rating.rate}
                name="rating.rate"
                type="number"
                label="Rate"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 xs={6} style={gridItemStyle}>
              <TextField
                value={updateProduct.rating.count}
                name="rating.count"
                type="number"
                label="Count"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid2>
          </Grid2>
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            style={buttonStyle}
          >
            Save
          </Button>
        </Grid2>
      </Paper>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default UpdateProduct;
