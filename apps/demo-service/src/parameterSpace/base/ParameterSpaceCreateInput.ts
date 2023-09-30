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
import { IsJSONValue } from "@app/custom-validators";
import { IsOptional, ValidateNested, IsString, IsEnum } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ExperimentCreateNestedManyWithoutParameterSpacesInput } from "./ExperimentCreateNestedManyWithoutParameterSpacesInput";
import { Type } from "class-transformer";
import { EnumParameterSpaceParameterType } from "./EnumParameterSpaceParameterType";
import { EnumParameterSpaceValueType } from "./EnumParameterSpaceValueType";

@InputType()
class ParameterSpaceCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  bounds?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ExperimentCreateNestedManyWithoutParameterSpacesInput,
  })
  @ValidateNested()
  @Type(() => ExperimentCreateNestedManyWithoutParameterSpacesInput)
  @IsOptional()
  @Field(() => ExperimentCreateNestedManyWithoutParameterSpacesInput, {
    nullable: true,
  })
  experiments?: ExperimentCreateNestedManyWithoutParameterSpacesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumParameterSpaceParameterType,
  })
  @IsEnum(EnumParameterSpaceParameterType)
  @Field(() => EnumParameterSpaceParameterType)
  parameterType!: "Range" | "Choice" | "Fixed";

  @ApiProperty({
    required: false,
    enum: EnumParameterSpaceValueType,
  })
  @IsEnum(EnumParameterSpaceValueType)
  @IsOptional()
  @Field(() => EnumParameterSpaceValueType, {
    nullable: true,
  })
  valueType?: "BOOL" | "FLOAT" | "INT" | "STRING" | null;
}

export { ParameterSpaceCreateInput as ParameterSpaceCreateInput };
