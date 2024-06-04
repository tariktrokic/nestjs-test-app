import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from '../models/account.model';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: typeof Account,
  ) {}

  async createAccount(name: string): Promise<Account> {
    const existingAccount = await this.accountModel.findOne({
      where: { name },
    });

    if (existingAccount) {
      throw new BadRequestException('Account name already exists');
    }

    return this.accountModel.create({ name });
  }
}
