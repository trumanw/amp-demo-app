import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SearchSpaceTitle } from "../searchSpace/SearchSpaceTitle";

export const ParameterConstraintEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="searchSpace.id"
          reference="SearchSpace"
          label="SearchSpace"
        >
          <SelectInput optionText={SearchSpaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
