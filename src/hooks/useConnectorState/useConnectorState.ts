import { MouseEvent, useContext, useState } from "react";
import { TalentContext } from "../../context/TalentContext";
import { Skill } from "../../shared/utils/types";
import { Colors, Mouse, Points, Progress } from "../../shared/utils/enums";

export function useConnectorState(skills: Skill[]) {
  const { points, increasePoints, decreasePoints, setToastMessage } =
    useContext(TalentContext);
  const [connectorColors, setConnectorColors] = useState<string[]>(
    Array(skills.length - 1).fill(Colors.DEFAULT)
  );
  const [borderColors, setBorderColors] = useState<string[]>(
    Array(skills.length).fill(Colors.DEFAULT)
  );
  const [progress, setProgress] = useState<number[]>(
    Array(skills.length).fill(0)
  );
  const [brightness, setBrightness] = useState<number[]>(
    Array(skills.length).fill(50)
  );

  let touchTimeout: ReturnType<typeof setTimeout>;

  function handleTouchStart(
    _: React.TouchEvent<HTMLButtonElement>,
    index: number
  ) {
    touchTimeout = setTimeout(() => {
      moveTalent(
        { button: Mouse.RIGHT_BUTTON } as MouseEvent<HTMLButtonElement>,
        index
      );
    }, 500);
  }

  function handleTouchEnd() {
    clearTimeout(touchTimeout);
  }

  function moveTalent(event: MouseEvent<HTMLButtonElement>, index: number) {
    const newProgress = [...progress];
    const newBackgroundColors = [...connectorColors];
    const newBorderColors = [...borderColors];
    const newBrightness = [...brightness];

    if (event.button === Mouse.LEFT_BUTTON) {
      moveForward(skills, index);
    } else if (event.button === Mouse.RIGHT_BUTTON) {
      moveBackward(skills, index);
    }

    setConnectorColors(newBackgroundColors);
    setBorderColors(newBorderColors);
    setBrightness(newBrightness);
    setProgress(newProgress);

    function moveForward(skills: Skill[], index: number) {
      const skillSelected = skills[index];
      const lastSkillSelected = skills.filter((skill) => skill.active).pop();
      const next = lastSkillSelected ? lastSkillSelected?.id + 1 : 0;

      if (index === next && points < Points.MAX_POINTS) {
        skillSelected.active = true;
        increasePoints();
        setToastMessage("🧙‍♂️ Rune mastered");

        newBackgroundColors[index] = Colors.GRAY;
        newProgress[index] = Progress.FULL;
        newBorderColors[index] = Colors.BLUE;
        newBrightness[index] = 100;

        if (index > 0) {
          newBackgroundColors[index - 1] = Colors.GREEN;
          newProgress[index - 1] = Progress.FULL;
        }
      } else {
        if (index !== next) {
          setToastMessage("❌ Skills must be mastered in order");
        } else {
          setToastMessage("❌ Insufficient points!");
        }
      }
    }

    function moveBackward(skills: Skill[], index: number) {
      const skillSelected = skills[index];
      const lastSkillSelected = skills.filter((skill) => skill.active).pop();
      const currentIndex = lastSkillSelected ? lastSkillSelected?.id : 0;

      if (index === currentIndex && points > Points.MIN_POINTS) {
        skillSelected.active = false;
        decreasePoints();

        newBackgroundColors[index] = Colors.DEFAULT;
        newProgress[index] = Progress.EMPTY;
        newBorderColors[index] = Colors.DEFAULT;
        newBrightness[index] = 50;

        if (index < skills.length - 1 || index === skills.length - 1) {
          newBackgroundColors[index - 1] = Colors.GRAY;
          newProgress[index - 1] = Progress.FULL;
        }
      } else {
        if (index !== currentIndex) {
          setToastMessage("❌ Skills must be mastered in order");
        } else {
          setToastMessage("❌ Insufficient points!");
        }
      }
    }
  }

  return {
    connectorColors,
    borderColors,
    brightness,
    progress,
    moveTalent,
    handleTouchStart,
    handleTouchEnd,
  };
}
