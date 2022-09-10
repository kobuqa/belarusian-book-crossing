import { useRouter } from "next/router";
import { BookDto } from "../types";
export const useBook = () => {
  const router = useRouter();

  const addBook = async (book: BookDto) => {
    const update = await fetch("http://104.248.94.208:8181/api/books", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(book),
    });
    if (update.status == 200) router.replace(router.asPath);
  };

  return {
    addBook,
  };
};
