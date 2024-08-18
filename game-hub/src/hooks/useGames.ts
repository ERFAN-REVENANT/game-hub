import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform{
    id: number;
    name:string;
    slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
  metacritic: number
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (): { games: Game[]; error: string } => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err.code === "ERR_CANCELED") return; // Handle request cancellation
        setError(err.message);
      });
  }, []);

  return { games, error };
};

export default useGames;
