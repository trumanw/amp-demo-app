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
import { ParameterSpaceWhereUniqueInput } from "./ParameterSpaceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ParameterSpaceUpdateInput } from "./ParameterSpaceUpdateInput";

@ArgsType()
class UpdateParameterSpaceArgs {
  @ApiProperty({
    required: true,
    type: () => ParameterSpaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParameterSpaceWhereUniqueInput)
  @Field(() => ParameterSpaceWhereUniqueInput, { nullable: false })
  where!: ParameterSpaceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ParameterSpaceUpdateInput,
  })
  @ValidateNested()
  @Type(() => ParameterSpaceUpdateInput)
  @Field(() => ParameterSpaceUpdateInput, { nullable: false })
  data!: ParameterSpaceUpdateInput;
}

export { UpdateParameterSpaceArgs as UpdateParameterSpaceArgs };
