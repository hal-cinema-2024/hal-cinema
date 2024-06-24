export type ScreenType = {
  startTime: string;
  endTime: string;
  buy: string;
};

export type MovieType = {
  name: string;
  screenings: {
    screenNumber: string;
    screenData: ScreenType[];
  }[];
};

export type Movie = Omit<MovieType, "name">;

export const InfoList: MovieType[] = [
  {
    name: "HAL特別編",
    screenings: [
      {
        screenNumber: "5",
        screenData: [
          {
            startTime: "10:40",
            endTime: "~ 13:10",
            buy: "販売終了",
          },
          {
            startTime: "18:20",
            endTime: "~ 20:50",
            buy: "販売終了",
          },
          {
            startTime: "20:00",
            endTime: "~ 22:30",
            buy: "満席",
          },
          {
            startTime: "21:05",
            endTime: "~ 23:35",
            buy: "購入",
          },
        ],
      },
    ],
  },

  {
    name: "鬼滅の刃 刀鍛冶の里編",
    screenings: [
      {
        screenNumber: "6",
        screenData: [
          {
            startTime: "6:00",
            endTime: "~ 8:30",
            buy: "購入",
          },
          {
            startTime: "11:00",
            endTime: "~ 13:30",
            buy: "購入",
          },
          {
            startTime: "14:00",
            endTime: "~ 16:30",
            buy: "満席",
          },
          {
            startTime: "17:00",
            endTime: "~ 19:30",
            buy: "満席",
          },
          {
            startTime: "22:00",
            endTime: "~ 24:30",
            buy: "購入",
          },
        ],
      },
      {
        screenNumber: "10",
        screenData: [
          {
            startTime: "7:40",
            endTime: "~ 10:10",
            buy: "販売終了",
          },
          {
            startTime: "20:00",
            endTime: "~ 22:30",
            buy: "満席",
          },
          {
            startTime: "20:00",
            endTime: "~ 22:30",
            buy: "購入",
          },
        ],
      },
    ],
  },

  {
    name: "名探偵コナン 100万ドルの五稜星",
    screenings: [
      {
        screenNumber: "5",
        screenData: [
          {
            startTime: "12:25",
            endTime: "~ 14:30",
            buy: "購入",
          },
        ],
      },
      {
        screenNumber: "4",
        screenData: [
          {
            startTime: "16:40",
            endTime: "~ 18:45",
            buy: "購入",
          },
          {
            startTime: "21:45",
            endTime: "~ 23:50",
            buy: "購入",
          },
        ],
      },
    ],
  },
];
