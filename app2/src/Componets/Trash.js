import React from 'react'
import { init, useConnectWallet ,useWallets} from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import abi from "./contracts/Demo.json"
import transactionPreviewModule from '@web3-onboard/transaction-preview'
import { useState ,useEffect } from "react";
import Onboard from '@web3-onboard/core'



// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true



// const infuraKey = '<INFURA_KEY>'
// const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

// initialize Onboard




// type UseWallets = (): WalletState[]
const dappId = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

  const injected = injectedModule()
  const transactionPreview = transactionPreviewModule()
init({
  // transactionPreview,
  // apiKey: 'xxx387fb-bxx1-4xxc-a0x3-9d37e426xxxx',
  wallets: [injected],
  chains: [
    {
      id: '5777',
      token: 'ETH',
      label: 'Localhost',
      rpcUrl:'HTTP://127.0.0.1:7545',
    }
  ]
})
function App() {

  // const [state, setState] = useState({
  //   provider: null,
  //   signer: null,
  //   contract: null,
  // });
  // useEffect(()=>{
  //   const connectWallet = async () => {
  //     const contractaddres="0x8BF52a77F720f6E1B0656B8502b9952bD7165B5f";
  //     const contrcatAbi=abi.abi;
  //     try{
  //       const {ethereum}=window;
  //       if(ethereum){
  //         const account= await ethereum.request({method:"eth_requestAccounts"})
  //         // const account1= await ethereum.request({method:"eth_requestAccounts"})
  //       }
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer=provider.getSigner();
  //       const contract= new ethers.Contract(contractaddres,contrcatAbi,signer);
  //       setState({provider,signer,contract})
  //     }
  //     catch(error){ 
  //       console.log(error);
  //     }
  //   }
  //   connectWallet();
  // },[])



  // const [
  //   {
  //     wallet, // the wallet that has been connected or null if not yet connected
  //     connecting // boolean indicating if connection is in progress
  //   },
  //   connect, // function to call to initiate user to connect wallet
  //   disconnect, // function to call with wallet<DisconnectOptions> to disconnect wallet
  //   updateBalances, // function to be called with an optional array of wallet addresses connected through Onboard to update balance or empty/no params to update all connected wallets
  //   setWalletModules, // function to be called with an array of wallet modules to conditionally allow connection of wallet types i.e. setWalletModules([ledger, trezor, injected])
  //   setPrimaryWallet // function that can set the primary wallet and/or primary account within that wallet. The wallet that is set needs to be passed in for the first parameter and if you would like to set the primary account, the address of that account also needs to be passed in
  // ] = useConnectWallet()
  
 
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const connectedWallets = useWallets()
  let ethersProvider
  if (wallet) {
    // wallet.request({method:"eth_requestAccounts"})
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    console.log(wallet.accounts[0].address);
  }
  
  // const Handleclick = async()=>{
  //   const {contract}=state;
  //   const contract1= await contract.set(10)
  //   console.log(Number(contract1));
  // }
  

  const Click=async()=>{
    const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>'

      const injected = injectedModule()

      const onboard = Onboard({
        wallets: [injected],
        chains: [
          {
            id: '0x1',
            token: 'ETH',
            label: 'Ethereum Mainnet',
            rpcUrl: MAINNET_RPC_URL
          }
        ]
      })
      const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
      const wallets = await onboard.connectWallet()

      console.log(wallets[0].accounts[0].address)

      if (wallets[0]) {
        // create an ethers provider with the last connected wallet provider
        const ethersProvider = new ethers.providers.Web3Provider(
          wallets[0].provider,
          'any'
        )
        const signer = ethersProvider.getSigner()
        const txn = await signer.sendTransaction({
          to: '0x',
          value: 100000000000000
        })
        const receipt = await txn.wait()
        // console.log(receipt[0].accounts[0].address)
        console.log(receipt)
    }
  }

  return (
    <div>
      <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
        {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
      </button>
      {/* <button disabled={connecting} onClick={() =>(wallet ? updateBalances(wallet) : updateBalances())}>
        Balance
      </button> */}
      {/* <button onClick={Handleclick} >click</button> */}
      {/* <button onClick={Click}>Connect</button> */}
    </div>
  );
} 


export default App;
