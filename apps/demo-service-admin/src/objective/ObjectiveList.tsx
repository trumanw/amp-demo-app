import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OPTIMIZATIONCONFIG_TITLE_FIELD } from "../optimizationConfig/OptimizationConfigTitle";

export const ObjectiveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Objectives"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
