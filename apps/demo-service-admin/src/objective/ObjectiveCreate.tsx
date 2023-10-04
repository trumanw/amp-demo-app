import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OptimizationConfigTitle } from "../optimizationConfig/OptimizationConfigTitle";

export const ObjectiveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Objective Body" source="objectiveBody" />
        <TextInput label="Objective Class" source="objectiveClass" />
        <TextInput label="Objective Name" source="objectiveName" />
        <ReferenceInput
          source="optimizationConfig.id"
          reference="OptimizationConfig"
          label="Optimization Config"
        >
          <SelectInput optionText={OptimizationConfigTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
