/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExperimentWhereInput } from "./ExperimentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExperimentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExperimentWhereInput,
  })
  @ValidateNested()
  @Type(() => ExperimentWhereInput)
  @IsOptional()
  @Field(() => ExperimentWhereInput, {
    nullable: true,
  })
  every?: ExperimentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExperimentWhereInput,
  })
  @ValidateNested()
  @Type(() => ExperimentWhereInput)
  @IsOptional()
  @Field(() => ExperimentWhereInput, {
    nullable: true,
  })
  some?: ExperimentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExperimentWhereInput,
  })
  @ValidateNested()
  @Type(() => ExperimentWhereInput)
  @IsOptional()
  @Field(() => ExperimentWhereInput, {
    nullable: true,
  })
  none?: ExperimentWhereInput;
}
export { ExperimentListRelationFilter as ExperimentListRelationFilter };