/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Staff } from "./Staff";
import { StaffCountArgs } from "./StaffCountArgs";
import { StaffFindManyArgs } from "./StaffFindManyArgs";
import { StaffFindUniqueArgs } from "./StaffFindUniqueArgs";
import { DeleteStaffArgs } from "./DeleteStaffArgs";
import { StaffService } from "../staff.service";
@graphql.Resolver(() => Staff)
export class StaffResolverBase {
  constructor(protected readonly service: StaffService) {}

  async _staffItemsMeta(
    @graphql.Args() args: StaffCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Staff])
  async staffItems(@graphql.Args() args: StaffFindManyArgs): Promise<Staff[]> {
    return this.service.staffItems(args);
  }

  @graphql.Query(() => Staff, { nullable: true })
  async staff(
    @graphql.Args() args: StaffFindUniqueArgs
  ): Promise<Staff | null> {
    const result = await this.service.staff(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Staff)
  async deleteStaff(
    @graphql.Args() args: DeleteStaffArgs
  ): Promise<Staff | null> {
    try {
      return await this.service.deleteStaff(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
