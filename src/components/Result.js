import React from "react";
import styled from "styled-components";

function Result({ movieData }) {
  const calculateStars = (rating) => {
    const stars = Math.round((rating / 10) * 10);
    return Array.from({ length: 10 }, (_, index) =>
      index < stars ? "★" : "☆"
    ).join("");
  };

  const getActors = (actors) => {
    return actors.split(",").map((actor) => actor.trim());
  };

  return (
    <ResultContainer>
      <MainInfo>
        <div>
          <Image src={movieData.Poster}></Image>
        </div>
        <div>
          <h2>{movieData.Title}</h2>
          <p>{movieData.Director}</p>
          <p>{movieData.Genre}</p>
          <p>Year: {movieData.Year}</p>
          <div style={{ marginTop: "10px", color: "yellow", fontSize: "20px" }}>
            <p style={{ color: "gold", marginRight: "5px" }}>
              {calculateStars(movieData.imdbRating)}{" "}
              <span style={{ color: "gray" }}>{movieData.imdbRating} IMDb</span>
            </p>
          </div>
        </div>
      </MainInfo>
      <SecondaryInfo>
        <Actors>
          {getActors(movieData.Actors).map((actor, index) => (
            <Actor key={index}>{actor}</Actor>
          ))}
        </Actors>
        <p>{movieData.Plot}</p>
      </SecondaryInfo>
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 5px;
`;

const Actors = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const Actor = styled.p`
  background-color: #f0f0f0;
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 100px;
  font-size: 12px;
`;

export default Result;
