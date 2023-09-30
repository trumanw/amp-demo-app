import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ParameterSpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bounds" source="bounds" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="ParameterType" source="parameterType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ValueType" source="valueType" />
      </SimpleShowLayout>
    </Show>
  );
};
