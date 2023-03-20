import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'




function Blocknative(){
        async function connectWallet(){
        // const wallets = await Onboard.connectWallet()
        // console.log(wallets)

            const injected = injectedModule()

            const onboard = Onboard({
            wallets: [injected],
            chains: [
                {
                id: '5777',
                token: 'ETH',
                label: 'Localhost',
                rpcUrl: 'HTTP://127.0.0.1:7545',
                }
            ]
            })

            const wallets = await onboard.connectWallet()
            console.log(wallets)
            }
      connectWallet()
        return(
            <button type="button" onClick={()=>{connectWallet()}}>connect</button>
        );

}

export default Blocknative;