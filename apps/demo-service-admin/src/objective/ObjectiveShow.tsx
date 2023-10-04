import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OPTIMIZATIONCONFIG_TITLE_FIELD } from "../optimizationConfig/OptimizationConfigTitle";

export const ObjectiveShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Objective Body" source="objectiveBody" />
        <TextField label="Objective Class" source="objectiveClass" />
        <TextField label="Objective Name" source="objectiveName" />
        <ReferenceField
          label="Optimization Config"
          source="optimizationconfig.id"
          reference="OptimizationConfig"
        >
          <TextField source={OPTIMIZATIONCONFIG_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
