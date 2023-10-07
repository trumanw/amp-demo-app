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
import { IsEnum, IsString, ValidateNested, IsOptional } from "class-validator";
import { OptimizationConfigWhereUniqueInput } from "../../optimizationConfig/base/OptimizationConfigWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SearchSpaceWhereUniqueInput } from "../../searchSpace/base/SearchSpaceWhereUniqueInput";
import { TrialCreateNestedManyWithoutExperimentsInput } from "./TrialCreateNestedManyWithoutExperimentsInput";

@InputType()
class ExperimentCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumExperimentGoal,
  })
  @IsEnum(EnumExperimentGoal)
  @Field(() => EnumExperimentGoal)
  goal!: "MOO";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
  optimizationConfig?: OptimizationConfigWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  owner!: UserWhereUniqueInput;

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
  searchSpace?: SearchSpaceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TrialCreateNestedManyWithoutExperimentsInput,
  })
  @ValidateNested()
  @Type(() => TrialCreateNestedManyWithoutExperimentsInput)
  @IsOptional()
  @Field(() => TrialCreateNestedManyWithoutExperimentsInput, {
    nullable: true,
  })
  trials?: TrialCreateNestedManyWithoutExperimentsInput;
}

export { ExperimentCreateInput as ExperimentCreateInput };
