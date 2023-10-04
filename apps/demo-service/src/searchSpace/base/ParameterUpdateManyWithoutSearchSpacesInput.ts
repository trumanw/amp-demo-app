/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ParameterWhereUniqueInput } from "../../parameter/base/ParameterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ParameterUpdateManyWithoutSearchSpacesInput {
  @Field(() => [ParameterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParameterWhereUniqueInput],
  })
  connect?: Array<ParameterWhereUniqueInput>;

  @Field(() => [ParameterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParameterWhereUniqueInput],
  })
  disconnect?: Array<ParameterWhereUniqueInput>;

  @Field(() => [ParameterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParameterWhereUniqueInput],
  })
  set?: Array<ParameterWhereUniqueInput>;
}

export { ParameterUpdateManyWithoutSearchSpacesInput as ParameterUpdateManyWithoutSearchSpacesInput };
