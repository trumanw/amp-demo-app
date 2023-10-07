import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OptimizationConfigTitle } from "../optimizationConfig/OptimizationConfigTitle";
import { UserTitle } from "../user/UserTitle";
import { SearchSpaceTitle } from "../searchSpace/SearchSpaceTitle";
import { TrialTitle } from "../trial/TrialTitle";

export const ExperimentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <ReferenceArrayInput
          source="trials"
          reference="Trial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrialTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
