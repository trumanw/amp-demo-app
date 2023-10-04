import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SearchSpaceModuleBase } from "./base/searchSpace.module.base";
import { SearchSpaceService } from "./searchSpace.service";
import { SearchSpaceController } from "./searchSpace.controller";
import { SearchSpaceResolver } from "./searchSpace.resolver";

@Module({
  imports: [SearchSpaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [SearchSpaceController],
  providers: [SearchSpaceService, SearchSpaceResolver],
  exports: [SearchSpaceService],
})
export class SearchSpaceModule {}
