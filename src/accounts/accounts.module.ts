import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { Setting } from '../models/setting.model';
import { AuthGuard } from '../common/guards/auth.guard';

@Module({
  imports: [SequelizeModule.forFeature([Setting])],
  providers: [AccountsService, AuthGuard],
  controllers: [AccountsController],
})
export class AccountsModule {}
