import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ParameterSpaceTitle } from "../parameterSpace/ParameterSpaceTitle";

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
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="parameterSpace"
          reference="ParameterSpace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParameterSpaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
