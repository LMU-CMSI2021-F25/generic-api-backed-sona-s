import React, { useState } from "react";
import styled from "styled-components";
import Result from "./Result";
import { fetchMovieData } from "../api";

function MovieContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState(null);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const data = await fetchMovieData(searchValue, apiKey);
      setMovieData(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <MovieContainerComponent>
      <Heaeder>Film Tracker 🎬</Heaeder>
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
  border: 0.1px solid white;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }
`;

const Heaeder = styled.h1`
  color: white;
  text-shadow: 0px 0px 6px #00000093;

  @media (max-width: 600px) {
    margin-top: 40px;
  }
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
  background-color: #ffffff28;
  padding: 10px;
  border-radius: 5px;
  border: 0.1px solid #ffffff;
  width: 300px;
  outline: none;
  color: white;
  transition: 0.15s;

  &::placeholder {
    color: #ffffff80;
  }

  &:focus {
    background-color: #ffffff48;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4b3effff;
  border: 1px solid #4b3effff;
  color: white;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background-color: #3a2cf1ff;
    border: 1px solid #3a2cf1ff;
    transform: scale(1.02);
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: gray;
`;

export default MovieContainer;
