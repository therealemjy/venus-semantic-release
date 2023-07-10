import { abi as comptrollerAbi } from '@venusprotocol/isolated-pools/artifacts/contracts/Comptroller.sol/Comptroller.json';
import { abi as poolLensAbi } from '@venusprotocol/isolated-pools/artifacts/contracts/Lens/PoolLens.sol/PoolLens.json';
import { abi as rewardsDistributorAbi } from '@venusprotocol/isolated-pools/artifacts/contracts/Rewards/RewardsDistributor.sol/RewardsDistributor.json';
import { getContractAddress } from 'utilities';

import { getComptrollerContract } from 'clients/contracts';

import { GetCorePoolInput, GetCorePoolOutput } from './types';

export type { GetCorePoolInput, GetCorePoolOutput } from './types';

const MAIN_POOL_COMPTROLLER_ADDRESS = getContractAddress('comptroller');

const getCorePool = async ({
  accountAddress,
  multicallProvider,
}: GetCorePoolInput): Promise<GetCorePoolOutput> => {
  const poolComptrollerContract = getComptrollerContract(
    MAIN_POOL_COMPTROLLER_ADDRESS,
    multicallProvider,
  );

  throw new Error('Work in progress');
};

export default getCorePool;
