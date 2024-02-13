import { BigNumber as BN } from 'ethers';

import { PoolLens } from 'libs/contracts';

const poolLensResponses: {
  getAllPools: Awaited<ReturnType<PoolLens['getAllPools']>>;
} = {
  getAllPools: [
    {
      name: 'Stablecoins',
      creator: '0xce10739590001705F7FF231611ba4A48B2820327',
      comptroller: '0x10b57706AD2345e590c2eA4DC02faef0d9f5b08B',
      blockPosted: BN.from('30886394'),
      timestampPosted: BN.from('1687354558'),
      category: '',
      logoURL: '',
      description: '',
      priceOracle: '0x3cD69251D04A28d887Ac14cbe2E14c52F3D57823',
      closeFactor: BN.from('500000000000000000'),
      liquidationIncentive: BN.from('1100000000000000000'),
      minLiquidatableCollateral: BN.from('100000000000000000000'),
      vTokens: [
        {
          vToken: '0x170d3b2da05cc2124334240fB34ad1359e34C562',
          exchangeRateCurrent: BN.from('10009513981946918783702935862'),
          supplyRatePerBlock: BN.from('3166451056'),
          borrowRatePerBlock: BN.from('7877402152'),
          reserveFactorMantissa: BN.from('200000000000000000'),
          supplyCaps: BN.from('500000000000000000000000'),
          borrowCaps: BN.from('200000000000000000000000'),
          totalBorrows: BN.from('10108946968195341959120'),
          totalReserves: BN.from('4789396150529737779'),
          totalSupply: BN.from('2009986555261'),
          totalCash: BN.from('10014830956365490406867'),
          isListed: true,
          collateralFactorMantissa: BN.from('650000000000000000'),
          underlyingAssetAddress: '0xe73774DfCD551BF75650772dC2cC56a2B6323453',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x3338988d0beb4419Acb8fE624218754053362D06',
          exchangeRateCurrent: BN.from('10000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('1902587519'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('1000000000000'),
          borrowCaps: BN.from('400000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('11017500000000'),
          totalCash: BN.from('110175000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('800000000000000000'),
          underlyingAssetAddress: '0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('6'),
        },
        {
          vToken: '0x899dDf81DfbbF5889a16D075c352F2b959Dd24A4',
          exchangeRateCurrent: BN.from('10000007594776571017713194299'),
          supplyRatePerBlock: BN.from('291819614'),
          borrowRatePerBlock: BN.from('3133173952'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('1000000000000000000000000'),
          borrowCaps: BN.from('400000000000000000000000'),
          totalBorrows: BN.from('2525009366324644274628'),
          totalReserves: BN.from('936632464427462'),
          totalSupply: BN.from('2439917834237'),
          totalCash: BN.from('21874188443308622824282'),
          isListed: true,
          collateralFactorMantissa: BN.from('650000000000000000'),
          underlyingAssetAddress: '0x2E2466e22FcbE0732Be385ee2FBb9C59a1098382',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
      ],
    },
    {
      name: 'DeFi',
      creator: '0xce10739590001705F7FF231611ba4A48B2820327',
      comptroller: '0x23a73971A6B9f6580c048B9CB188869B2A2aA2aD',
      blockPosted: BN.from('31235584'),
      timestampPosted: BN.from('1688402353'),
      category: '',
      logoURL: '',
      description: '',
      priceOracle: '0x3cD69251D04A28d887Ac14cbe2E14c52F3D57823',
      closeFactor: BN.from('500000000000000000'),
      liquidationIncentive: BN.from('1100000000000000000'),
      minLiquidatableCollateral: BN.from('100000000000000000000'),
      vTokens: [
        {
          vToken: '0xEF949287834Be010C1A5EDd757c385FB9b644E4A',
          exchangeRateCurrent: BN.from('10007691182524124108474788538'),
          supplyRatePerBlock: BN.from('636663134'),
          borrowRatePerBlock: BN.from('5081151415'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('379000000000000000000'),
          borrowCaps: BN.from('266000000000000000000'),
          totalBorrows: BN.from('30082036393257651982'),
          totalReserves: BN.from('20509098314412995'),
          totalSupply: BN.from('17992314512'),
          totalCash: BN.from('150000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0x5B662703775171c4212F2FBAdb7F92e64116c154',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x5e68913fbbfb91af30366ab1B21324410b49a308',
          exchangeRateCurrent: BN.from('10011516336363967037873865126'),
          supplyRatePerBlock: BN.from('181270579'),
          borrowRatePerBlock: BN.from('3297226775'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('15000000000000000000000000'),
          borrowCaps: BN.from('10500000000000000000000000'),
          totalBorrows: BN.from('301191080856852418660667'),
          totalReserves: BN.from('297770214213104665166'),
          totalSupply: BN.from('410416681409015'),
          totalCash: BN.from('3808000000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0x7FCC76fc1F573d8Eb445c236Cc282246bC562bCE',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0xb7caC5Ef82cb7f9197ee184779bdc52c5490C02a',
          exchangeRateCurrent: BN.from('10000001023419474209103454095'),
          supplyRatePerBlock: BN.from('1601927693'),
          borrowRatePerBlock: BN.from('7396632771'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('2500000000000000000000000'),
          borrowCaps: BN.from('1750000000000000000000000'),
          totalBorrows: BN.from('3000000708067249722000'),
          totalReserves: BN.from('177016812430500'),
          totalSupply: BN.from('1038899946782'),
          totalCash: BN.from('7389000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0x6923189d91fdF62dBAe623a55273F1d20306D9f2',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x80CC30811e362aC9aB857C3d7875CbcCc0b65750',
          exchangeRateCurrent: BN.from('10000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('2853881278'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('18600000000000'),
          borrowCaps: BN.from('14880000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('101000000000000'),
          totalCash: BN.from('1010000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('800000000000000000'),
          underlyingAssetAddress: '0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('6'),
        },
        {
          vToken: '0xa109DE0abaeefC521Ec29D89eA42E64F37A6882E',
          exchangeRateCurrent: BN.from('10000000164934184014342404175'),
          supplyRatePerBlock: BN.from('971545947'),
          borrowRatePerBlock: BN.from('4934836431'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('2000000000000000000000000'),
          borrowCaps: BN.from('1600000000000000000000000'),
          totalBorrows: BN.from('5600000183257229814400'),
          totalReserves: BN.from('18325722981440'),
          totalSupply: BN.from('2559999974270'),
          totalCash: BN.from('20000000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('650000000000000000'),
          underlyingAssetAddress: '0x2E2466e22FcbE0732Be385ee2FBb9C59a1098382',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0xb677e080148368EeeE70fA3865d07E92c6500174',
          exchangeRateCurrent: BN.from('10005084885110644583721945686'),
          supplyRatePerBlock: BN.from('2547591516'),
          borrowRatePerBlock: BN.from('9046467473'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('9508802000000000000000000'),
          borrowCaps: BN.from('6656161000000000000000000'),
          totalBorrows: BN.from('300542351767931817219789'),
          totalReserves: BN.from('135587941982954304947'),
          totalSupply: BN.from('80000996794851'),
          totalCash: BN.from('500010000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0xe4a90EB942CF2DA7238e8F6cC9EF510c49FC8B4B',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
      ],
    },
    {
      name: 'GameFi',
      creator: '0xce10739590001705F7FF231611ba4A48B2820327',
      comptroller: '0x1F4f0989C51f12DAcacD4025018176711f3Bf289',
      blockPosted: BN.from('31235584'),
      timestampPosted: BN.from('1688402353'),
      category: '',
      logoURL: '',
      description: '',
      priceOracle: '0x3cD69251D04A28d887Ac14cbe2E14c52F3D57823',
      closeFactor: BN.from('500000000000000000'),
      liquidationIncentive: BN.from('1100000000000000000'),
      minLiquidatableCollateral: BN.from('100000000000000000000'),
      vTokens: [
        {
          vToken: '0x1958035231E125830bA5d17D168cEa07Bb42184a',
          exchangeRateCurrent: BN.from('10000000541651875349407274693'),
          supplyRatePerBlock: BN.from('1862302840'),
          borrowRatePerBlock: BN.from('7890137206'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('4000000000000000000000000000'),
          borrowCaps: BN.from('2800000000000000000000000000'),
          totalBorrows: BN.from('80250012609882635357914003'),
          totalReserves: BN.from('3159635939332215065'),
          totalSupply: BN.from('25500024566677169'),
          totalCash: BN.from('174750250028661121970946259'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0xD60cC803d888A3e743F21D0bdE4bF2cAfdEA1F26',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0xef470AbC365F88e4582D8027172a392C473A5B53',
          exchangeRateCurrent: BN.from('10000759933783960854550248414'),
          supplyRatePerBlock: BN.from('251260309'),
          borrowRatePerBlock: BN.from('3649235480'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('40000000000000000000000000000'),
          borrowCaps: BN.from('28000000000000000000000000000'),
          totalBorrows: BN.from('152668504413064337929318747'),
          totalReserves: BN.from('42119925527765890460883'),
          totalSupply: BN.from('166286009342028426'),
          totalCash: BN.from('1510360075289046725632524790'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0xb22cF15FBc089d470f8e532aeAd2baB76bE87c88',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x0bFE4e0B8A2a096A27e5B18b078d25be57C08634',
          exchangeRateCurrent: BN.from('10000000000000000'),
          supplyRatePerBlock: BN.from('300884001'),
          borrowRatePerBlock: BN.from('3710902682'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('18600000000000'),
          borrowCaps: BN.from('14880000000000'),
          totalBorrows: BN.from('10000000000'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('11100000000000'),
          totalCash: BN.from('101000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('800000000000000000'),
          underlyingAssetAddress: '0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('6'),
        },
        {
          vToken: '0xdeDf3B2bcF25d0023115fd71a0F8221C91C92B1a',
          exchangeRateCurrent: BN.from('10000000338969965454068234867'),
          supplyRatePerBlock: BN.from('1917107601'),
          borrowRatePerBlock: BN.from('6149212762'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('2000000000000000000000000'),
          borrowCaps: BN.from('1600000000000000000000000'),
          totalBorrows: BN.from('5300000376626712283100'),
          totalReserves: BN.from('37662671228310'),
          totalSupply: BN.from('1529999982034'),
          totalCash: BN.from('10000000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('650000000000000000'),
          underlyingAssetAddress: '0x2E2466e22FcbE0732Be385ee2FBb9C59a1098382',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
      ],
    },
    {
      name: 'Liquid Staked BNB',
      creator: '0xce10739590001705F7FF231611ba4A48B2820327',
      comptroller: '0x596B11acAACF03217287939f88d63b51d3771704',
      blockPosted: BN.from('31235584'),
      timestampPosted: BN.from('1688402353'),
      category: '',
      logoURL: '',
      description: '',
      priceOracle: '0x3cD69251D04A28d887Ac14cbe2E14c52F3D57823',
      closeFactor: BN.from('500000000000000000'),
      liquidationIncentive: BN.from('1100000000000000000'),
      minLiquidatableCollateral: BN.from('100000000000000000000'),
      vTokens: [
        {
          vToken: '0x57a664Dd7f1dE19545fEE9c86C949e3BF43d6D47',
          exchangeRateCurrent: BN.from('10004355872626109928092952710'),
          supplyRatePerBlock: BN.from('2252321478'),
          borrowRatePerBlock: BN.from('8569789430'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('8000000000000000000000'),
          borrowCaps: BN.from('5600000000000000000000'),
          totalBorrows: BN.from('21034846287373538922'),
          totalReserves: BN.from('8711571843384730'),
          totalSupply: BN.from('5999999948'),
          totalCash: BN.from('39000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('350000000000000000'),
          underlyingAssetAddress: '0x167F1F9EF531b3576201aa3146b13c57dbEda514',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x644A149853E5507AdF3e682218b8AC86cdD62951',
          exchangeRateCurrent: BN.from('10000001667355478104604470108'),
          supplyRatePerBlock: BN.from('2707330762'),
          borrowRatePerBlock: BN.from('9293000783'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('1818000000000000000000'),
          borrowCaps: BN.from('1272000000000000000000'),
          totalBorrows: BN.from('25000008748132215725'),
          totalReserves: BN.from('2187033053931'),
          totalSupply: BN.from('6435999583'),
          totalCash: BN.from('39360000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('350000000000000000'),
          underlyingAssetAddress: '0x327d6E6FAC0228070884e913263CFF9eFed4a2C8',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x75aa42c832a8911B77219DbeBABBB40040d16987',
          exchangeRateCurrent: BN.from('10000271043924222030581567842'),
          supplyRatePerBlock: BN.from('123416976'),
          borrowRatePerBlock: BN.from('2960219131'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('540000000000000000000'),
          borrowCaps: BN.from('378000000000000000000'),
          totalBorrows: BN.from('25015759955162180577'),
          totalReserves: BN.from('3939988790545144'),
          totalSupply: BN.from('44999962300'),
          totalCash: BN.from('425000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('350000000000000000'),
          underlyingAssetAddress: '0x2999C176eBf66ecda3a646E70CeB5FF4d5fCFb8C',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x231dED0Dfc99634e52EE1a1329586bc970d773b3',
          exchangeRateCurrent: BN.from('10000000894977228598481906565'),
          supplyRatePerBlock: BN.from('2061136728'),
          borrowRatePerBlock: BN.from('8244546350'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('80000000000000000000000'),
          borrowCaps: BN.from('56000000000000000000000'),
          totalBorrows: BN.from('50000004566210045'),
          totalReserves: BN.from('1141552511'),
          totalSupply: BN.from('14999999'),
          totalCash: BN.from('100000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('450000000000000000'),
          underlyingAssetAddress: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x2197d02cC9cd1ad51317A0a85A656a0c82383A7c',
          exchangeRateCurrent: BN.from('10000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('2853881278'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('18600000000000'),
          borrowCaps: BN.from('14880000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('101000000000000'),
          totalCash: BN.from('1010000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('800000000000000000'),
          underlyingAssetAddress: '0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('6'),
        },
        {
          vToken: '0xD5b20708d8f0FcA52cb609938D0594C4e32E5DaD',
          exchangeRateCurrent: BN.from('10000000000000000000000000000'),
          supplyRatePerBlock: BN.from('1779965752'),
          borrowRatePerBlock: BN.from('5993150684'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('2000000000000000000000000'),
          borrowCaps: BN.from('1600000000000000000000000'),
          totalBorrows: BN.from('3300000000000000000000'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('1000000000000'),
          totalCash: BN.from('6700000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('650000000000000000'),
          underlyingAssetAddress: '0x2E2466e22FcbE0732Be385ee2FBb9C59a1098382',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
      ],
    },
    {
      name: 'Tron',
      creator: '0xce10739590001705F7FF231611ba4A48B2820327',
      comptroller: '0x11537D023f489E4EF0C7157cc729C7B69CbE0c97',
      blockPosted: BN.from('31235584'),
      timestampPosted: BN.from('1688402353'),
      category: '',
      logoURL: '',
      description: '',
      priceOracle: '0x3cD69251D04A28d887Ac14cbe2E14c52F3D57823',
      closeFactor: BN.from('500000000000000000'),
      liquidationIncentive: BN.from('1100000000000000000'),
      minLiquidatableCollateral: BN.from('100000000000000000000'),
      vTokens: [
        {
          vToken: '0x47793540757c6E6D84155B33cd8D9535CFdb9334',
          exchangeRateCurrent: BN.from('10000000000000000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('1902587519'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('1500000000000000000000000000000'),
          borrowCaps: BN.from('1050000000000000000000000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('1675300020500000000'),
          totalCash: BN.from('16753000205000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0xE98344A7c691B200EF47c9b8829110087D832C64',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0xEe543D5de2Dbb5b07675Fc72831A2f1812428393',
          exchangeRateCurrent: BN.from('10000000000000000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('1902587519'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('3000000000000000000000000000'),
          borrowCaps: BN.from('2100000000000000000000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('13400000000000000'),
          totalCash: BN.from('134000000000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0x2E6Af3f3F059F43D764060968658c9F3c8f9479D',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
        {
          vToken: '0x410286c43a525E1DCC7468a9B091C111C8324cd1',
          exchangeRateCurrent: BN.from('10000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('1902587519'),
          reserveFactorMantissa: BN.from('250000000000000000'),
          supplyCaps: BN.from('11000000000000'),
          borrowCaps: BN.from('7700000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('12900000000000'),
          totalCash: BN.from('129000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('250000000000000000'),
          underlyingAssetAddress: '0x7D21841DC10BA1C5797951EFc62fADBBDD06704B',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('6'),
        },
        {
          vToken: '0x712774CBFFCBD60e9825871CcEFF2F917442b2c3',
          exchangeRateCurrent: BN.from('10000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('2853881278'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('18600000000000'),
          borrowCaps: BN.from('14880000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('1000000000000'),
          totalCash: BN.from('10000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('800000000000000000'),
          underlyingAssetAddress: '0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('6'),
        },
        {
          vToken: '0xD804F74fe21290d213c46610ab171f7c2EeEBDE7',
          exchangeRateCurrent: BN.from('10000000000000000000000000000'),
          supplyRatePerBlock: BN.from('0'),
          borrowRatePerBlock: BN.from('2853881278'),
          reserveFactorMantissa: BN.from('100000000000000000'),
          supplyCaps: BN.from('2000000000000000000000000'),
          borrowCaps: BN.from('1600000000000000000000000'),
          totalBorrows: BN.from('0'),
          totalReserves: BN.from('0'),
          totalSupply: BN.from('1000000000000'),
          totalCash: BN.from('10000000000000000000000'),
          isListed: true,
          collateralFactorMantissa: BN.from('650000000000000000'),
          underlyingAssetAddress: '0x2E2466e22FcbE0732Be385ee2FBb9C59a1098382',
          vTokenDecimals: BN.from('8'),
          underlyingDecimals: BN.from('18'),
        },
      ],
    },
  ] as Awaited<ReturnType<PoolLens['getAllPools']>>,
};

export default poolLensResponses;
