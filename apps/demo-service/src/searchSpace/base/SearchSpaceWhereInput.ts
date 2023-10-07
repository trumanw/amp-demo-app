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
import { ExperimentListRelationFilter } from "../../experiment/base/ExperimentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ParameterListRelationFilter } from "../../parameter/base/ParameterListRelationFilter";

@InputType()
class SearchSpaceWhereInput {
  @ApiProperty({
    required: false,
    type: () => ExperimentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExperimentListRelationFilter)
  @IsOptional()
  @Field(() => ExperimentListRelationFilter, {
    nullable: true,
  })
  experiments?: ExperimentListRelationFilter;

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
    type: () => ParameterListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ParameterListRelationFilter)
  @IsOptional()
  @Field(() => ParameterListRelationFilter, {
    nullable: true,
  })
  parameters?: ParameterListRelationFilter;
}

export { SearchSpaceWhereInput as SearchSpaceWhereInput };
