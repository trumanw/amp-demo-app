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
import { ParameterWhereInput } from "./ParameterWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ParameterCountArgs {
  @ApiProperty({
    required: false,
    type: () => ParameterWhereInput,
  })
  @Field(() => ParameterWhereInput, { nullable: true })
  @Type(() => ParameterWhereInput)
  where?: ParameterWhereInput;
}

export { ParameterCountArgs as ParameterCountArgs };
