import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { EXPERIMENT_TITLE_FIELD } from "../experiment/ExperimentTitle";

export const TrialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
