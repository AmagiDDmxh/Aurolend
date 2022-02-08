import { useContract, useProvider } from 'wagmi'
import CErc20Delegator from '../contracts/CToken/CErc20Delegator.sol/CErc20Delegator.json'

const cErc20DelegatorAddress = '0x70A71b86594EabB041c92f6D983c23c77848c868'
// export const getCTokenContract = async (address: string) => {
//   const signer = provider.getSigner(address)
//   return new ethers.Contract(cErc20DelegatorAddress, CErc20Delegator.abi, signer)
// }
export const useCTokenContract = () => {
  const provider = useProvider()
  return useContract({
    addressOrName: cErc20DelegatorAddress,
    contractInterface: CErc20Delegator.abi,
    signerOrProvider: provider,
  })
}
