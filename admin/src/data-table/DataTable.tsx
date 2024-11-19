import React, { useEffect, useMemo, useState } from "react";
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

type Column<T> = {
  header: string;
  accessorKey: keyof T;
};

const DataTable: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("データ取得を開始");
        const response = await axios.get("/mock/movie.json");
        console.log("取得したデータ:", response.data.movies[0]);
        setMovies(response.data.movies[0]);
      } catch (err) {
        console.error("エラー発生:", err);
        setError("データの取得に失敗しました。");
      } finally {
        console.log("データ取得処理終了");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const columns = useMemo<Column<Movie>[]>(
    () => [
      {
        header: "映画ID",
        accessorKey: "movieId",
      },
      {
        header: "映画名",
        accessorKey: "movieName",
      },
      {
        header: "監督",
        accessorKey: "director",
      },
      {
        header: "サムネイル",
        accessorKey: "thumbnail",
      },
      {
        header: "概要",
        accessorKey: "summary",
      },
      {
        header: "リンク",
        accessorKey: "link",
      },
      {
        header: "上映期間",
        accessorKey: "term",
      },
      {
        header: "公開日",
        accessorKey: "releaseDate",
      },
      {
        header: "終了日",
        accessorKey: "endDate",
      },
      {
        header: "画像",
        accessorKey: "movieImage",
      },
    ],
    []
  );

  if (loading) return <p>データを読み込んでいます...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessorKey as string}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.movieId}>
            {columns.map((column) => (
              <td key={column.accessorKey as string}>
                {column.accessorKey === "link" ? (
                  <a
                    href={movie[column.accessorKey]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    詳細
                  </a>
                ) : column.accessorKey === "thumbnail" ? (
                  <img
                    src={movie[column.accessorKey]}
                    alt={movie.movieName}
                    style={{ width: "50px" }}
                  />
                ) : column.accessorKey === "movieImage" ? (
                  movie[column.accessorKey].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${movie.movieName}-${index}`}
                      style={{ width: "50px", marginRight: "5px" }}
                    />
                  ))
                ) : (
                  movie[column.accessorKey]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
