import { PathGroup } from ".";
import { Label } from "../label";
import { TalentTree } from "../talent-tree";
import { Connector } from "../connector";
import { useConnectorState } from "../../hooks/useConnectorState/useConnectorState";
import { Skill } from "../../shared/utils/types";

interface PathGroupComponentProps {
  label: string;
  skills: Skill[];
}

export function PathGroupComponent({ label, skills }: PathGroupComponentProps) {
  const { connectorColors, borderColors, brightness, progress, moveTalent } =
    useConnectorState(skills);

  return (
    <PathGroup.Root>
      <PathGroup.Section>
        <Label text={label} responsive={true} />
      </PathGroup.Section>
      <PathGroup.Section>
        {skills.map((skill, index) => {
          return (
            <PathGroup.SectionItem key={index}>
              <TalentTree.Image
                src={`./src/assets/images/icons/${skill.icon}.png`}
                alt={skill.alt}
                borderColor={borderColors[index]}
                brightness={brightness[index]}
                handleClick={(event) => moveTalent(event, index)}
              />
              {index !== skills.length - 1 && (
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
