import {
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('settings')
@UseGuards(AuthGuard)
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  async createSetting(
    @Body()
    createSettingDto: {
      accountId: number;
      name: string;
      dataType: string;
      value: any;
    },
  ) {
    return this.settingsService.createSetting(
      createSettingDto.accountId,
      createSettingDto.name,
      createSettingDto.dataType,
      createSettingDto.value,
    );
  }

  @Put(':id')
  async updateSetting(@Param('id') id: number, @Body('value') value: any) {
    return this.settingsService.updateSetting(id, value);
  }

  @Delete(':id')
  async deleteSetting(@Param('id') id: number) {
    return this.settingsService.deleteSetting(id);
  }
}
