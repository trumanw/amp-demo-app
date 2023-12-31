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
import { EnumExperimentGoal } from "./EnumExperimentGoal";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { OptimizationConfigWhereUniqueInput } from "../../optimizationConfig/base/OptimizationConfigWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../../searchSpace/base/SearchSpaceWhereUniqueInput";
import { TrialListRelationFilter } from "../../trial/base/TrialListRelationFilter";

@InputType()
class ExperimentWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumExperimentGoal,
  })
  @IsEnum(EnumExperimentGoal)
  @IsOptional()
  @Field(() => EnumExperimentGoal, {
    nullable: true,
  })
  goal?: "MOO";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OptimizationConfigWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptimizationConfigWhereUniqueInput)
  @IsOptional()
  @Field(() => OptimizationConfigWhereUniqueInput, {
    nullable: true,
  })
  optimizationConfig?: OptimizationConfigWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SearchSpaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SearchSpaceWhereUniqueInput)
  @IsOptional()
  @Field(() => SearchSpaceWhereUniqueInput, {
    nullable: true,
  })
  searchSpace?: SearchSpaceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TrialListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TrialListRelationFilter)
  @IsOptional()
  @Field(() => TrialListRelationFilter, {
    nullable: true,
  })
  trials?: TrialListRelationFilter;
}

export { ExperimentWhereInput as ExperimentWhereInput };
