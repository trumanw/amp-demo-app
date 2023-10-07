import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ExperimentTitle } from "../experiment/ExperimentTitle";
import { ParameterTitle } from "../parameter/ParameterTitle";

export const SearchSpaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="experiments"
          reference="Experiment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperimentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="parameters"
          reference="Parameter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParameterTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
