import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
