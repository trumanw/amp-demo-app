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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SEARCHSPACE_TITLE_FIELD } from "../searchSpace/SearchSpaceTitle";

export const ExperimentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Goal" source="goal" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Optimization Config"
          source="optimizationconfig.id"
          reference="OptimizationConfig"
        >
          <TextField source={OPTIMIZATIONCONFIG_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
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
