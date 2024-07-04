export function getRFCDate(month: number, day: number, week: number): string {
  const now = new Date();
  const currentYear = now.getFullYear();

  // 引数で受け取った月、日、週を適用した日付を作成
  const date = new Date(currentYear, month - 1, day + week * 7);

  // RFC形式の日付文字列を返す
  return date.toISOString();
}
