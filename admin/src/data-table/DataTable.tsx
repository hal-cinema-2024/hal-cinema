import React, { useEffect, useState } from "react";
import { Table } from "@yamada-ui/table";
import axios from "axios";

type Movie = {
  movieId: string;
  movieName: string;
  director: string;
  thumbnail: string;
  summary: string;
  link: string;
  term: number;
  releaseDate: string;
  endDate: string;
  movieImage: string[];
};

const DataTable: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/mock/movie.json");
        setMovies(response.data.movies[0]);
      } catch (err) {
        setError("データの取得に失敗しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>データを読み込んでいます...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Table columns={[]} data={[]}>
      <thead>
        <tr>
          <th>映画ID</th>
          <th>映画名</th>
          <th>監督</th>
          <th>公開日</th>
          <th>終了日</th>
          <th>リンク</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.movieId}>
            <td>{movie.movieId}</td>
            <td>{movie.movieName}</td>
            <td>{movie.director}</td>
            <td>{movie.releaseDate}</td>
            <td>{movie.endDate}</td>
            <td>
              <a href={movie.link} target="_blank" rel="noopener noreferrer">
                詳細
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
