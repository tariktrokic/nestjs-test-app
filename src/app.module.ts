import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Setting } from './models/setting.model';
import { Account } from './models/account.model';
import { AccountsController } from './accounts/accounts.controller';
import { SettingsController } from './settings/settings.controller';
import { SettingsModule } from './settings/settings.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'aws-0-eu-central-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.ypxudayeoxjtkuhkzxla',
      password: 'K0Qvi6INiH5ond83',
      database: 'postgres',
      models: [Account, Setting],
    }),
    SettingsModule,
    AccountsModule,
  ],
  controllers: [AppController, AccountsController, SettingsController],
  providers: [AppService],
})
export class AppModule {}
