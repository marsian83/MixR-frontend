import React, { useEffect, useState } from "react";
import { getCoords } from "../utils";

export default function useCoords(
  element: React.MutableRefObject<HTMLElement>
) {
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setPos(getCoords(element.current));
  }, []);

  return pos;
}
