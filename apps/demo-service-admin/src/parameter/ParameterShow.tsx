import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SEARCHSPACE_TITLE_FIELD } from "../searchSpace/SearchSpaceTitle";

export const ParameterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Parameter Body" source="parameterBody" />
        <TextField label="Parameter Class" source="parameterClass" />
        <TextField label="Parameter Name" source="parameterName" />
        <ReferenceField
          label="Search Space"
          source="searchspace.id"
          reference="SearchSpace"
        >
          <TextField source={SEARCHSPACE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
