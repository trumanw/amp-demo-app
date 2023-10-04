import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SearchSpaceTitle } from "../searchSpace/SearchSpaceTitle";

export const ParameterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Parameter Body" source="parameterBody" />
        <TextInput label="Parameter Class" source="parameterClass" />
        <TextInput label="Parameter Name" source="parameterName" />
        <ReferenceInput
          source="searchSpace.id"
          reference="SearchSpace"
          label="Search Space"
        >
          <SelectInput optionText={SearchSpaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
