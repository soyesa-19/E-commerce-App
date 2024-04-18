import { useState } from "react";
import { addFilteredProducts } from "../store/products_slice";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.items);

  const inputHandler = (event) => {
    setSearchText(event.target.value);
    setSuggestions(
      products.filter((product) =>
        product.title.toUpperCase().includes(event.target.value.toUpperCase())
      )
    );
  };

  const searchHandler = () => {
    setSuggestions([]);
    dispatch(addFilteredProducts(suggestions));
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={inputHandler}
      />
      <button onClick={searchHandler}>Search</button>
      <div>
        {suggestions.length > 0 &&
          suggestions?.map((suggestion) => (
            <li key={suggestion.key}>{suggestion.title}</li>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
