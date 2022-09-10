import { useRouter } from "next/router";
import { BookDto } from "../types";

import axios from 'axios';

export const useBook = () => {
  const router = useRouter();

  const addBook = async (book: BookDto) => {
    const update = await axios.post("https://104.248.94.208/api/books", book);
    if (update.status == 200) router.replace(router.asPath);
  };

  return {
    addBook,
  };
};
