import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXPERIMENT_TITLE_FIELD } from "../experiment/ExperimentTitle";

export const TrialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Experiment"
          source="experiment.id"
          reference="Experiment"
        >
          <TextField source={EXPERIMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Trial Body" source="trialBody" />
        <TextField label="Trial Index" source="trialIndex" />
        <TextField label="Trial Type" source="trialType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
