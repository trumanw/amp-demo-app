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
import { SEARCHSPACE_TITLE_FIELD } from "../searchSpace/SearchSpaceTitle";

export const ParameterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Parameters"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
