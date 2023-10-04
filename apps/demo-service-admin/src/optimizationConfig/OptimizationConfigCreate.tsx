import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ExperimentTitle } from "../experiment/ExperimentTitle";
import { ObjectiveTitle } from "../objective/ObjectiveTitle";

export const OptimizationConfigCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="experiments"
          reference="Experiment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperimentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="objectives"
          reference="Objective"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ObjectiveTitle} />
        </ReferenceArrayInput>
        <TextInput label="Outcome Constraints" source="outcomeConstraints" />
      </SimpleForm>
    </Create>
  );
};
