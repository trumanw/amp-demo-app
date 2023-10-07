import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ExperimentTitle } from "../experiment/ExperimentTitle";

export const TrialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="experiment.id"
          reference="Experiment"
          label="Experiment"
        >
          <SelectInput optionText={ExperimentTitle} />
        </ReferenceInput>
        <div />
        <NumberInput step={1} label="Trial Index" source="trialIndex" />
        <SelectInput
          source="trialType"
          label="Trial Type"
          choices={[
            { label: "INIT", value: "init" },
            { label: "AUTOGEN", value: "autogen" },
            { label: "VALID", value: "valid" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
