import { SlideDateType } from "../-types/SlideDate";

export function get7Days(): SlideDateType[] {
  const dates: SlideDateType[] = [];
  const today = new Date();

  for (let i = 0; i < 8; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // 月 (0-11) -> (1-12)
    const day = currentDate.getDate().toString().padStart(2, "0"); // 日 (1-31)
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      currentDate.getDay()
    ];

    dates.push({
      month,
      day,
      week,
    });
  }

  return dates;
}
