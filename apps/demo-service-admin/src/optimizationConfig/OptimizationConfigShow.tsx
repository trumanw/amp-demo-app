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

import { OPTIMIZATIONCONFIG_TITLE_FIELD } from "./OptimizationConfigTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SEARCHSPACE_TITLE_FIELD } from "../searchSpace/SearchSpaceTitle";

export const OptimizationConfigShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Outcome Constraints" source="outcomeConstraints" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Experiment"
          target="optimizationConfigId"
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
          reference="Objective"
          target="optimizationConfigId"
          label="Objectives"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
