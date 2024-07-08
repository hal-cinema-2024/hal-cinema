import { SlideDateType } from "../-types/SlideDate";

export function TransDate(data: SlideDateType): string {
  const now = new Date();
  const currentYear = now.getFullYear();

  // 引数で受け取った月、日、週を適用した日付を作成

  //iso8601形式に変換
  return `${currentYear}-${data.month}-${data.day}`;
}
