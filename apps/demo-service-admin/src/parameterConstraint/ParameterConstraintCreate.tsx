import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SearchSpaceTitle } from "../searchSpace/SearchSpaceTitle";

export const ParameterConstraintCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="searchSpace.id"
          reference="SearchSpace"
          label="SearchSpace"
        >
          <SelectInput optionText={SearchSpaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
