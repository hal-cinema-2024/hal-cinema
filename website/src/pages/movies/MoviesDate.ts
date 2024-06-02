import sam01 from "/src/assets/sample01.jpg";
import sam02 from "/src/assets/sample02.jpg";
import sam03 from "/src/assets/sample03.jpg";

export type MovieType = {
  img: string;
  movieName: string;
  directorName: string;
  performerName: string;
};

export const MovieList: MovieType[] = [
  {
    img: sam01,
    movieName: "名探偵コナン 漆黒の白",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
  {
    img: sam02,
    movieName: "名探偵コナン ファ!?",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
  {
    img: sam03,
    movieName: "名探偵コナン 純白の黒",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
  {
    img: sam01,
    movieName: "名探偵コナン 4",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
];
