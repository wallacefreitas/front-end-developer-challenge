import { useState } from "react";
import { Points } from "../../shared/utils/enums";

export const useTalentPoints = () => {
  const [points, setPoints] = useState(0);

  function increasePoints() {
    setPoints((prev) => {
      if (prev < Points.MAX_POINTS) {
        return prev + 1;
      }
      return prev;
    });
  }

  function decreasePoints() {
    setPoints((prev) => {
      if (prev > Points.MIN_POINTS) {
        return prev - 1;
      }
      return prev;
    });
  }

  return {
    points,
    increasePoints,
    decreasePoints,
  };
};
