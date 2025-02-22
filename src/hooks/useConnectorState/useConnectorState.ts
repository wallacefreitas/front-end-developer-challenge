import { useState, useContext } from "react";
import { TalentContext } from "../../context/TalentContext";
import { Mouse, Points, Colors, Progress } from "../../shared/utils/enums";

export function useConnectorState(talentsPathLength: number) {
  const { points, increasePoints, decreasePoints } = useContext(TalentContext);
  const [connectorColors, setConnectorColors] = useState<string[]>(
    Array(talentsPathLength - 1).fill(Colors.DEFAULT)
  );
  const [borderColors, setBorderColors] = useState<string[]>(
    Array(talentsPathLength).fill(Colors.DEFAULT)
  );
  const [progress, setProgress] = useState<number[]>(
    Array(talentsPathLength).fill(0)
  );

  function moveTalent(
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) {
    const newProgress = [...progress];
    const newBackgroundColors = [...connectorColors];
    const newBorderColors = [...borderColors];

    function moveForward() {
      if (index === points && points < Points.MAX_POINTS) {
        increasePoints();

        newBackgroundColors[index] = Colors.GRAY;
        newProgress[index] = Progress.FULL;
        newBorderColors[index] = Colors.BLUE;

        if (index > 0) {
          newBackgroundColors[index - 1] = Colors.GREEN;
          newProgress[index - 1] = Progress.FULL;
        }
      }
    }

    function moveBackward() {
      if (index === points - 1 && points > Points.MIN_POINTS) {
        decreasePoints();

        newBackgroundColors[index] = Colors.DEFAULT;
        newProgress[index] = Progress.EMPTY;
        newBorderColors[index] = Colors.DEFAULT;

        if (index < talentsPathLength - 1 || index === talentsPathLength - 1) {
          newBackgroundColors[index - 1] = Colors.GRAY;
          newProgress[index - 1] = Progress.FULL;
        }
      }
    }

    if (event.button == Mouse.LEFT_BUTTON) {
      moveForward();
    } else if (event.button == Mouse.RIGHT_BUTTON) {
      moveBackward();
    }

    setConnectorColors(newBackgroundColors);
    setBorderColors(newBorderColors);
    setProgress(newProgress);
  }

  return {
    connectorColors,
    borderColors,
    progress,
    moveTalent,
  };
}
