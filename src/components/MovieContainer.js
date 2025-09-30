import React from "react";
import styled from "styled-components";

function MovieContainer() {
  return (
    <MovieContainerComponent>
      <h1>Book-to-Movie Tracker</h1>
      <InputContainer>
        <Input type="text" placeholder="Search for a book title..." />
        <Button>Search</Button>
      </InputContainer>
    </MovieContainerComponent>
  );
}

const MovieContainerComponent = styled.div`
padding:20px;
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

export default MovieContainer;
