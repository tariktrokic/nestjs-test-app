import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Setting } from '../models/setting.model';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting)
    private readonly settingModel: typeof Setting,
  ) {}

  async createSetting(
    accountId: number,
    name: string,
    dataType: string,
    value: any,
  ): Promise<Setting> {
    if (typeof value !== dataType) {
      throw new BadRequestException(
        `Value does not match data type ${dataType}`,
      );
    }

    return this.settingModel.create({
      account_id: accountId,
      name,
      data_type: dataType,
      value: value.toString(),
    });
  }

  async updateSetting(id: number, value: any): Promise<Setting> {
    const setting = await this.settingModel.findByPk(id);
    if (!setting) {
      throw new BadRequestException('Setting not found');
    }

    if (typeof value !== setting.data_type) {
      throw new BadRequestException(
        `Value does not match data type ${setting.data_type}`,
      );
    }

    setting.value = value.toString();
    return setting.save();
  }

  async deleteSetting(id: number): Promise<void> {
    const setting = await this.settingModel.findByPk(id);
    if (!setting) {
      throw new BadRequestException('Setting not found');
    }
    await setting.destroy();
  }
}
