import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const ExperimentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
