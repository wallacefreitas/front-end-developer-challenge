import { useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Container } from "./components/container";
import { Main } from "./components/main";
import { Board } from "./components/board";
import { TalentTree } from "./components/talent-tree";
import { ScoreCard } from "./components/score-card";
import { PathGroupComponent } from "./components/path-group/PathGroup";
import { TalentContext } from "./context/TalentContext";
import { talentsPath1, talentsPath2 } from "./shared/utils/types";
import { Points } from "./shared/utils/enums";

export default function App() {
  const { points, toastMessage, setToastMessage } = useContext(TalentContext);

  useEffect(() => {
    if (toastMessage !== "") {
      toast(toastMessage);
      setToastMessage("");
    }
  }, [toastMessage, setToastMessage]);

  return (
    <Container onContextMenu={(e) => e.preventDefault()}>
      <Main>
        <Board.Root>
          <Board.Header />
          <Board.Body>
            <TalentTree.Root>
              <TalentTree.Group>
                <TalentTree.Path>
                  <PathGroupComponent
                    label={`Talent Path 1`}
                    talentsPath={talentsPath1}
                  />
                </TalentTree.Path>
              </TalentTree.Group>
              <TalentTree.Group>
                <TalentTree.Path>
                  <PathGroupComponent
                    label={`Talent Path 2`}
                    talentsPath={talentsPath2}
                  />
                </TalentTree.Path>
              </TalentTree.Group>
            </TalentTree.Root>
            <ScoreCard.Root>
              <ScoreCard.Content>
                <span>{`${points}/${Points.MAX_POINTS}`}</span>
                <span>{`Points Spent`}</span>
              </ScoreCard.Content>
            </ScoreCard.Root>
          </Board.Body>
        </Board.Root>
        <ToastContainer theme="dark" />
      </Main>
    </Container>
  );
}
