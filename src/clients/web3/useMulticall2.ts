import { providers } from '@0xsequence/multicall';
import { useMemo } from 'react';

import { useAuth } from 'context/AuthContext';

const useMulticall = () => {
  const { provider } = useAuth();

  return useMemo(() => new providers.MulticallProvider(provider), [provider]);
};

export default useMulticall;
