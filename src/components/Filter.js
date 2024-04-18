import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addFilteredProducts } from "../store/products_slice";

const Filter = () => {
  const [age, setAge] = React.useState("");
  let prod = [...useSelector((store) => store.products.filteredItems)];
  console.log(prod);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("hi");
    if (event.target.value === "A") {
      console.log("loe to high");
      prod.sort((a, b) => a.price - b.price);
    } else if (event.target.value === "B") {
      console.log("loe high");
      prod.sort((a, b) => b.price - a.price);
    } else if (event.target.value === "C") {
      prod = prod.filter((product) =>
        product.title.toUpperCase().includes("MEN")
      );
    } else {
      prod = prod.filter((product) =>
        product.title.toUpperCase().includes("WOMEN")
      );
    }
    console.log(prod);
    dispatch(addFilteredProducts(prod));
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="A">Price:Low - high</MenuItem>
          <MenuItem value="B">high - Low</MenuItem>
          <MenuItem value="C">For Men</MenuItem>
          <MenuItem value="D">For Women</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
