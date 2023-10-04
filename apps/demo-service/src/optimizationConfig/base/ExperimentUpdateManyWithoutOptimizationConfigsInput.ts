/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExperimentWhereUniqueInput } from "../../experiment/base/ExperimentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ExperimentUpdateManyWithoutOptimizationConfigsInput {
  @Field(() => [ExperimentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExperimentWhereUniqueInput],
  })
  connect?: Array<ExperimentWhereUniqueInput>;

  @Field(() => [ExperimentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExperimentWhereUniqueInput],
  })
  disconnect?: Array<ExperimentWhereUniqueInput>;

  @Field(() => [ExperimentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExperimentWhereUniqueInput],
  })
  set?: Array<ExperimentWhereUniqueInput>;
}

export { ExperimentUpdateManyWithoutOptimizationConfigsInput as ExperimentUpdateManyWithoutOptimizationConfigsInput };
