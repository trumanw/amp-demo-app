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
import { SearchSpaceWhereUniqueInput } from "../../searchSpace/base/SearchSpaceWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParameterConstraintCreateInput {
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
}

export { ParameterConstraintCreateInput as ParameterConstraintCreateInput };
