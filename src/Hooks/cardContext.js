import { useContext } from "react";

export function useCardContext({ cardContext }) {
  var context = useContext(cardContext);

  if (!context) {
    throw new Error(
      "Child components of customCard can't be render outside customCard Component !"
    );
  }
  return context;
}
