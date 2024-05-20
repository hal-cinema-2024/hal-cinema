export type ScreenType = {
  startTime: string;
  endTime: string;
  buy: string;
};

export const ScreenData: ScreenType[] = [
  {
    startTime: "10:40",
    endTime: "~ 13:10",
    buy: "販売終了",
  },
  {
    startTime: "18:20",
    endTime: "~ 20:50",
    buy: "満席",
  },
  {
    startTime: "20:00",
    endTime: "~ 22:30",
    buy: "購入",
  },
  {
    startTime: "21:05",
    endTime: "~ 23:35",
    buy: "購入",
  },
];
