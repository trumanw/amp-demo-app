import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { ExperimentTitle } from "../experiment/ExperimentTitle";

export const ParameterSpaceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="experiments"
          reference="Experiment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperimentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="parameterType"
          label="ParameterType"
          choices={[
            { label: "Range", value: "Range" },
            { label: "Choice", value: "Choice" },
            { label: "Fixed", value: "Fixed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="valueType"
          label="ValueType"
          choices={[
            { label: "BOOL", value: "BOOL" },
            { label: "FLOAT", value: "FLOAT" },
            { label: "INT", value: "INT" },
            { label: "STRING", value: "STRING" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
