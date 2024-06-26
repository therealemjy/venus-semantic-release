import type { ContractTransaction } from 'ethers';

import type { XvsVesting } from 'libs/contracts';

export interface WithdrawXvsInput {
  xvsVestingContract: XvsVesting;
}

export type WithdrawXvsOutput = ContractTransaction;

const withdrawXvs = async ({ xvsVestingContract }: WithdrawXvsInput): Promise<WithdrawXvsOutput> =>
  xvsVestingContract.withdraw();

export default withdrawXvs;
