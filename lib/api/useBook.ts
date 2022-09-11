import { useRouter } from "next/router";
import { BookDto } from "../types";
import https from "https";

import axios from "axios";

export const useBook = () => {
  const router = useRouter();

  const addBook = async (book: BookDto) => {
    const update = await axios.post(
      "https://bookcrossing.hopto.org/api/books",
      book,
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
    if (update.status == 201) router.replace(router.asPath);
  };

  return {
    addBook,
  };
};
