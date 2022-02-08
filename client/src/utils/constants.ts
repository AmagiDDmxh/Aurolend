export enum Networks {
  MainNet = 1313161554,
  TestNet = 1313161555,
}

export const comptrollerImplAddr = {
  // Aurora Mainnet
  [Networks.MainNet]: '',
  // Aurora Testnet
  [Networks.TestNet]: '0x24f11f5df6dF7B2100C70aDeC2be0e7fd10d280F',
}

export const TT1Addr = { [Networks.MainNet]: '', [Networks.TestNet]: '0x9fb47402890c87917df7680dee29d9bf6ba8fc6e' }
export const CompAddr = { [Networks.MainNet]: '', [Networks.TestNet]: '0x6168b737ce55b897435f1dd702a21f8caaa444cc' }
export const CErc20DelegatorAddr = {
  [Networks.MainNet]: '',
  [Networks.TestNet]: '0x70a71b86594eabb041c92f6d983c23c77848c868',
}
export const UnitrollerAddr = {
  [Networks.MainNet]: '',
  [Networks.TestNet]: '0x47d3be8c545ca50a657ec906578458b28aed4ae4',
}
export const priceOracleAddr = {
  [Networks.MainNet]: '',
  [Networks.TestNet]: '0xa6ef2f0bc5a8b136946270fc10f16160b60120ba',
}
