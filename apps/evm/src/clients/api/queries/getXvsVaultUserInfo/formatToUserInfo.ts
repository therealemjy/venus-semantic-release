import BigNumber from 'bignumber.js';

import type { XvsVault } from 'libs/contracts';

import type { GetXvsVaultUserInfoOutput } from './types';

const formatToUserInfo = ({
  amount,
  pendingWithdrawals,
  rewardDebt,
}: Awaited<ReturnType<XvsVault['getUserInfo']>>): GetXvsVaultUserInfoOutput => ({
  stakedAmountMantissa: new BigNumber(amount.toString()),
  pendingWithdrawalsTotalAmountMantissa: new BigNumber(pendingWithdrawals.toString()),
  rewardDebtAmountMantissa: new BigNumber(rewardDebt.toString()),
});

export default formatToUserInfo;
