import BigNumber from 'bignumber.js';
import { Prime } from 'packages/contracts';

import getPrimeClaimWaitingPeriod from '.';

vi.mock('packages/contracts');

describe('getPrimeStatus', () => {
  it('returns the the data describing the status of the Prime contract', async () => {
    const mockPeriodInSeconds = 600;
    const mockMinimumStakedXvs = 1000;
    const tokenLimit = 1000;
    const claimedTokens = 300;

    const fakePrimeContract = {
      STAKING_PERIOD: vi.fn(() => new BigNumber(mockPeriodInSeconds)),
      MINIMUM_STAKED_XVS: vi.fn(() => new BigNumber(mockMinimumStakedXvs)),
      totalRevocable: vi.fn(() => new BigNumber(tokenLimit)),
      revocableLimit: vi.fn(() => new BigNumber(claimedTokens)),
      xvsVault: vi.fn(() => ''),
      xvsVaultPoolId: vi.fn(() => new BigNumber(1)),
      xvsVaultRewardToken: vi.fn(() => ''),
    } as unknown as Prime;

    const response = await getPrimeClaimWaitingPeriod({
      primeContract: fakePrimeContract,
    });

    expect(fakePrimeContract.STAKING_PERIOD).toHaveBeenCalledTimes(1);
    expect(fakePrimeContract.MINIMUM_STAKED_XVS).toHaveBeenCalledTimes(1);
    expect(fakePrimeContract.totalRevocable).toHaveBeenCalledTimes(1);
    expect(fakePrimeContract.revocableLimit).toHaveBeenCalledTimes(1);
    expect(fakePrimeContract.xvsVault).toHaveBeenCalledTimes(1);
    expect(fakePrimeContract.xvsVaultPoolId).toHaveBeenCalledTimes(1);
    expect(fakePrimeContract.xvsVaultRewardToken).toHaveBeenCalledTimes(1);

    expect(response).toMatchSnapshot();
  });
});
