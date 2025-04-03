import React, { useState } from 'react';
import { Paper, TextField, Typography, Grid, Button } from '@mui/material';
import Grid2 from '@mui/material/Grid';
import { FaLongArrowAltRight } from 'react-icons/fa';

const NewProduct = () => {
  const paperStyle = {
    width: 400,
    margin: '20px auto',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 8px 16px rgba(155, 100, 100, 0.2)'
  };

  const headingStyle = {
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  };

  const textFieldStyle = {
    backgroundColor: "blue",
    borderRadius: "5px",
  };
  const formStyle = {
    display: 'grid',
    gap: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  const gridItemStyle = {
    padding: '0 10px',
  };

  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 500,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: '',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    const fieldName = name.split('rating.')[1];

    if (name.includes('rating.')) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        alert('Data added successfully');
        setNewProduct({
          title: '',
          price: 500,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: '',
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 0,
            count: 0,
          },
        });
      })
      .catch((error) => alert('Error adding data: ' + error));
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Typography variant="h5" style={headingStyle} textAlign="center">
        Create New Product
      </Typography>
      <Grid2
        component="form"
        style={formStyle}
        onSubmit={handleAdd}
      >
        <TextField
          value={newProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={newProduct.category}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid2 container spacing={2}style={{ marginTop: '10px' }}>
          <Grid2 xs={6} style={gridItemStyle}>
            <TextField
              value={newProduct.rating.rate}
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
              value={newProduct.rating.count}
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
          fullWidth
          style={buttonStyle}
        >
          Add Product
        </Button>
      </Grid2>
    </Paper>
  );
};

export default NewProduct;
