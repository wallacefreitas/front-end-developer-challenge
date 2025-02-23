import { PathGroup } from ".";
import { Label } from "../label";
import { TalentTree } from "../talent-tree";
import { Connector } from "../connector";
import { useConnectorState } from "../../hooks/useConnectorState/useConnectorState";

interface PathGroupComponentProps {
  label: string;
  talentsPath: string[];
}

export function PathGroupComponent({
  label,
  talentsPath,
}: PathGroupComponentProps) {
  const talentsPathLength = talentsPath.length;
  const { connectorColors, borderColors, brightness, progress, moveTalent } =
    useConnectorState(talentsPathLength);

  return (
    <PathGroup.Root>
      <PathGroup.Section>
        <Label text={label} responsive={true} />
      </PathGroup.Section>
      <PathGroup.Section>
        {talentsPath.map((talentPath, index) => {
          return (
            <PathGroup.SectionItem key={index}>
              <TalentTree.Image
                src={`./src/assets/images/${talentPath}.png`}
                alt={"Skull"}
                borderColor={borderColors[index]}
                brightness={brightness[index]}
                handleClick={(event) => moveTalent(event, index)}
              />
              {index !== talentsPath.length - 1 && (
                <Connector.Root>
                  <Connector.Content
                    width={`${progress[index].toString()}%`}
                    backgroundColor={connectorColors[index]}
                  />
                </Connector.Root>
              )}
            </PathGroup.SectionItem>
          );
        })}
      </PathGroup.Section>
    </PathGroup.Root>
  );
}
