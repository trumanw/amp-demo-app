import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OptimizationConfigTitle } from "../optimizationConfig/OptimizationConfigTitle";

export const ObjectiveEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
