import React from "react";
import styled from "styled-components";
import Clock from "@mui/icons-material/AccessTime";

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
        <ImageContainer>
          <Image src={movieData.Poster}></Image>
          <Runtime>
            <Clock />
            {movieData.Runtime}
          </Runtime>
        </ImageContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ color: "white" }}>{movieData.Title}</h2>
          <p>Directed by {movieData.Director}</p>
          <p>Written by {movieData.Writer}</p>
          <p>{movieData.Genre}</p>
          <p>Year: {movieData.Year}</p>
          <div style={{ marginTop: "10px", color: "yellow", fontSize: "20px" }}>
            <p style={{ color: "gold", marginRight: "5px" }}>
              {calculateStars(movieData.imdbRating)}{" "}
              <span style={{ color: "gray" }}>{movieData.imdbRating} IMDb</span>
            </p>
          </div>
          <p
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "20px",
            }}
          >
            Released: {movieData.Released}
          </p>
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
  display: grid;
  grid-auto-flow:column;
  gap: 20px;
  margin: 20px;
`;

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 5px;
`;

const Runtime = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  position: absolute;
  bottom: 12px;
  padding: 5px;
  right: 5px;
  color: white;
  font-weight: 600;
  background-color: #00000098;
  line-height: 1;
`;

const Actors = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const Actor = styled.p`
  backdrop-filter: blur(5px);
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 100px;
  font-size: 12px;
  color: white;
`;

export default Result;
