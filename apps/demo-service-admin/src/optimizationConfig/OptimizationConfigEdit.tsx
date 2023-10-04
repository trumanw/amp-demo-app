import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ExperimentTitle } from "../experiment/ExperimentTitle";
import { ObjectiveTitle } from "../objective/ObjectiveTitle";

export const OptimizationConfigEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
