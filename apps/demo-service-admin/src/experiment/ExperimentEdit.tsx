import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const ExperimentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="goal"
          label="Goal"
          choices={[{ label: "MOO", value: "MOO" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
