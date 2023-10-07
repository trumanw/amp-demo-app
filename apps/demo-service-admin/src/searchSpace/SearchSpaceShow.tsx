import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OPTIMIZATIONCONFIG_TITLE_FIELD } from "../optimizationConfig/OptimizationConfigTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SEARCHSPACE_TITLE_FIELD } from "./SearchSpaceTitle";

export const SearchSpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Experiment"
          target="searchSpaceId"
          label="Experiments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Parameter"
          target="searchSpaceId"
          label="Parameters"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
