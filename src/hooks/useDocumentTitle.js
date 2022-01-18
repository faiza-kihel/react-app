import { useEffect } from "react";
export default function useDocumentTitle() {
  useEffect((title) => {
    document.title = title;
    return () => {
      console.log("Clean up ");
    };
  });
}
