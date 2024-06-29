import { z } from "zod";

const IMAGE_TYPES = ["image/jpg", "image/png"];
const MAX_IMAGE_SIZE = 5; // 5MB

// バイト単位のサイズをメガバイト単位に変換する
const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};

export const movieSchema = z.object({
  movieName: z.string().nonempty({ message: "映画名は必須です" }),
  director: z.string().nonempty({ message: "監督名は必須です" }),
  summary: z.string().nonempty({ message: "あらすじは必須です" }),
  link: z.string().nonempty({ message: "リンクは必須です" }),
  term: z
    .number()
    .int({ message: "期間は整数で入力してください" })
    .min(1, { message: "期間は1日以上でなければなりません" }),
  releaseDate: z.string().nonempty({ message: "公開日は必須です" }),
  endDate: z.string().nonempty({ message: "終了日は必須です" }),

  thumbnail: z
    // z.inferでSchemaを定義したときに型がつくようにするため
    .custom<FileList>()
    // 必須にしたい場合
    .refine((file) => file.length !== 0, { message: "必須です" })
    // このあとのrefine()で扱いやすくするために整形
    .transform((file) => file[0])
    // ファイルサイズを制限したい場合
    .refine((file) => sizeInMB(file.size) <= MAX_IMAGE_SIZE, {
      message: "ファイルサイズは最大5MBです",
    })
    // 画像形式を制限したい場合
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: ".jpgもしくは.pngのみ可能です",
    }),

  movieImage: z
    // z.inferでSchemaを定義したときに型がつくようにするため
    .custom<FileList>()
    // 必須にしたい場合
    .refine((file) => file.length !== 0, { message: "必須です" })
    // このあとのrefine()で扱いやすくするために整形
    .transform((file) => file[0])
    // ファイルサイズを制限したい場合
    .refine((file) => sizeInMB(file.size) <= MAX_IMAGE_SIZE, {
      message: "ファイルサイズは最大5MBです",
    })
    // 画像形式を制限したい場合
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: ".jpgもしくは.pngのみ可能です",
    }),
});
