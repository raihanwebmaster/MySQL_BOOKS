import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error, setError] = useState(false);
  const bookId = location.pathname.split("/")[2];
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="form">
      <h1>Update New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <textarea
        rows={5}
        type="text"
        placeholder="desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
      {error && "Something went wrong!"}
      <button className="formButton">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          See all books
        </Link>
      </button>
    </div>
  );
};

export default Update;
