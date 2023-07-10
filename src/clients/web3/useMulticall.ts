import { Multicall } from 'ethereum-multicall';
import { useMemo } from 'react';

import { useAuth } from 'context/AuthContext';

// TODO: remove in favor of 0xsequence multicall contract
// (https://www.npmjs.com/package/@0xsequence/multicall)
const useMulticall = () => {
  const { provider } = useAuth();
  return useMemo(
    () =>
      new Multicall({
        ethersProvider: provider,
        tryAggregate: true,
      }),
    [provider],
  );
};

export default useMulticall;
