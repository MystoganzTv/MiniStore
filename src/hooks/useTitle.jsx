import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Mini Store`;
  }, [title]);

  return null;
};
