import { providers } from '@0xsequence/multicall';
import { Pool } from 'types';

export interface GetCorePoolInput {
  multicallProvider: providers.MulticallProvider;
  accountAddress?: string;
}

export interface GetCorePoolOutput {
  pool: Pool;
}
