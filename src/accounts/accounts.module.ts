import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AuthGuard } from '../common/guards/auth.guard';
import { Account } from 'src/models/account.model';

@Module({
  imports: [SequelizeModule.forFeature([Account])],
  providers: [AccountsService, AuthGuard],
  controllers: [AccountsController],
})
export class AccountsModule {}
