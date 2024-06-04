import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { Setting } from '../models/setting.model';
import { AuthGuard } from '../common/guards/auth.guard';

@Module({
  imports: [SequelizeModule.forFeature([Setting])],
  providers: [SettingsService, AuthGuard],
  controllers: [SettingsController],
})
export class SettingsModule {}
