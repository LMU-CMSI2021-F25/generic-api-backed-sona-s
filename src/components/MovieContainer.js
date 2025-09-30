import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Result from "./Result";

function MovieContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState(null);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("API Key:", process.env.REACT_APP_API_KEY);
    console.log("Searching for:", searchValue);
    fetchMovieData(searchValue);
    console.log("Movie Data:", movieData);
  };

  const fetchMovieData = async (title) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
      );
      if (!response.ok) {
        console.error("HTTP error:", response.status);
        return null;
      }

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error || "Movie not found");
      }
      setMovieData(data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  };

  return (
    <MovieContainerComponent>
      <h1>Book-to-Movie Tracker</h1>
      <InputContainer>
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search for a book title..."
        />
        <Button onClick={handleSearchClick}>Search</Button>
      </InputContainer>

      {movieData ? (
        <Result movieData={movieData} />
      ) : (
        <ResultContainer>
          <p>Start searching movies...</p>
        </ResultContainer>
      )}
    </MovieContainerComponent>
  );
}

const MovieContainerComponent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 80vh;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color:gray;
`;

export default MovieContainer;
