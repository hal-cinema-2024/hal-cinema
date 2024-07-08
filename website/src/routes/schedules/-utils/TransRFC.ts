import { SlideDateType } from "../-types/SlideDate";

export function TransRFCDate(data: SlideDateType): string {
  const now = new Date();
  const currentYear = now.getFullYear();

  // 引数で受け取った月、日、週を適用した日付を作成
  const date = new Date(
    currentYear,
    parseInt(data.month) - 1,
    parseInt(data.day)
  );

  //iso8601形式に変換
  const day: Date = date.toISOString();
  console.log(day);
  return date.toISOString();
}
