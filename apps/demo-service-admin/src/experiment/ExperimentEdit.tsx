import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { OptimizationConfigTitle } from "../optimizationConfig/OptimizationConfigTitle";
import { UserTitle } from "../user/UserTitle";
import { SearchSpaceTitle } from "../searchSpace/SearchSpaceTitle";

export const ExperimentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="goal"
          label="Goal"
          choices={[{ label: "MOO", value: "MOO" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="optimizationConfig.id"
          reference="OptimizationConfig"
          label="Optimization Config"
        >
          <SelectInput optionText={OptimizationConfigTitle} />
        </ReferenceInput>
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="searchSpace.id"
          reference="SearchSpace"
          label="Search Space"
        >
          <SelectInput optionText={SearchSpaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
