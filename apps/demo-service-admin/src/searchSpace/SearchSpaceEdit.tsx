import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ExperimentTitle } from "../experiment/ExperimentTitle";
import { ParameterTitle } from "../parameter/ParameterTitle";

export const SearchSpaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
