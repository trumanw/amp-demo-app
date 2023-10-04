/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParameterConstraintWhereInput } from "./ParameterConstraintWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ParameterConstraintOrderByInput } from "./ParameterConstraintOrderByInput";

@ArgsType()
class ParameterConstraintFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ParameterConstraintWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ParameterConstraintWhereInput, { nullable: true })
  @Type(() => ParameterConstraintWhereInput)
  where?: ParameterConstraintWhereInput;

  @ApiProperty({
    required: false,
    type: [ParameterConstraintOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ParameterConstraintOrderByInput], { nullable: true })
  @Type(() => ParameterConstraintOrderByInput)
  orderBy?: Array<ParameterConstraintOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ParameterConstraintFindManyArgs as ParameterConstraintFindManyArgs };
