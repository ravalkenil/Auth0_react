import React, { Component } from 'react'
import {init, useConnectWallet ,useWallets} from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import abi from "./contracts/Demo.json"
import New from "./Componets/new"
import transactionPreviewModule from '@web3-onboard/transaction-preview'
import TransactionPreviewInitOptions from '@web3-onboard/transaction-preview';
import Notification from '@web3-onboard/transaction-preview';
import { useState ,useEffect } from "react";
import Onboard from '@web3-onboard/core'
import abiUSDT from "./Abi/USDT.json";
import abiBNB from "./Abi/BNB.json";
import abiBUSD from "./Abi/BUSD.json";
import abiMATIC from "./Abi/MATIC.json"
// import jspdf from "jspdf";
import BlocknativeSdk from 'bnc-sdk'
import jsPDF from 'jspdf'
import usdt1 from "./Abi/usdt1.json";
import Notify from "@web3-onboard/injected-wallets"
import { useNotifications } from '@web3-onboard/react'
import EthereumTransactionData from "bnc-sdk";
// import {transactionPreview} from '@blocknative/notify'

  const dappId = '1730eff0-9d50-4382-a3fe-89f0d34a2070'
  const injected = injectedModule()
  const transactionPreview= transactionPreviewModule()
  // const Notify1=Notify({transactionHandler})
  // const transactionPreview = TransactionPreviewAPI()
  // console.log("this is transection",transactionPreview);
  // console.log("this is transection",transactionPreview.valueOf);  
  
  // const NotifyOptions={enabled:true}
  // const Notify=Notify{transactionHandler}
  // apiKey: '55fc912f-dd56-4386-bca8-e6c9d283641b',
  const handler=()=>{
    const  transaction= async () => {
      // console.log({ transaction })  
      if (transaction.status === "confirmed"){
      console.log("confirmed");
      
      const transaction=transaction.status;
    }
    console.log(transaction);
    }
  }

  const transaction=EthereumTransactionData;
  const transaction1=transaction.status
  console.log("this is transect.status",transaction);
  
  // transaction=> {
  //   console.log({ transaction })  
  //   if (transaction.status === "confirmed"){
  //     console.log("confirmed");
      
  //     const transaction=transaction.status;
  //   }
  // }
  const onboard=init({
    // transactionPreview : transactionPreviewModule(),
    transactionPreview:TransactionPreviewInitOptions(),  
    apiKey: '55fc912f-dd56-4386-bca8-e6c9d283641b', 
    notify:{
      desktop: {
        enabled: true,
        transactionHandler:handler
        // transaction=> {
        //   console.log({ transaction })  
        //   if (transaction.status === "confirmed"){
        //     console.log("confirmed");
            
        //     const transaction=transaction.status;
        //   }
        // },
      }
    },
    wallets: [injected],  
    chains: [     
      {
        id: '0x1691',
        token: 'ETH',
        label: 'Localhost',
        rpcUrl:'HTTP://127.0.0.1:7545',
      },
      {
        id: '0x5',
        token: 'ETH',
        label: 'Goerli',
        rpcUrl: `https://goerli.infura.io/v3/5da7d25d859342beb5cafb9655c4d9cc`
      },
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum Mainnet',
        rpcUrl: 'https://mainnet.infura.io/v3/'
      },
    ]
  
}
  )

  // console.log("this is Leader",transaction.status);

  // cnst {apiKey} =init;
  // console.log(apiKey);o

  // const transactionHandler =Notify.

//   transactionHandler.onSend((transaction) => {
//     console.log('Transaction sent:', transaction)
// })

// transactionHandler.onConfirm((transaction) => {
//     console.log('Transaction confirmed:', transaction)
// })

// transactionHandler.onError((transaction) => {
//     console.log('Transaction failed:', transaction)
// })


    //  const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3'

    //       const injected = injectedModule()
    //       const transactionPreview = transactionPreviewModule()

    //       const onboard = Onboard({
    //         transactionPreview,
    //         apiKey: '55fc912f-dd56-4386-bca8-e6c9d283641b',
    //         wallets: [injected],
    //         chains: [
    //           {
    //             id: '0x1',
    //             token: 'ETH',
    //             label: 'Ethereum Mainnet',
    //             rpcUrl: MAINNET_RPC_URL
    //           },{
                
    //             id: '0x1691',
    //             token: 'ETH',
    //             label: 'Localhost',
    //             rpcUrl:'HTTP://127.0.0.1:7545',
    //           },
    //           {
    //             id: '0x5',
    //             token: 'ETH',
    //             label: 'Goerli',
    //             rpcUrl: `https://goerli.infura.io/v3/5da7d25d859342beb5cafb9655c4d9cc`
    //           },
    //         ]
    //       })

    //       const wallets =  onboard.connectWallet()

    //       console.log(wallets)

    //       if (wallets[0]) {
    //         // create an ethers provider with the last connected wallet provider
    //         const ethersProvider = new ethers.providers.Web3Provider(
    //           wallets[0].provider,
    //           'any'
    //         )

    //         const signer = ethersProvider.getSigner()

    //         // send a transaction with the ethers provider
    //         const txn =  signer.sendTransaction({
    //           to: '0x',
    //           value: 100000000000000
    //         })

    //         const receipt = txn.wait()
    //         console.log(receipt)
    //       }
function App() {
  
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [set,setvalue]=useState('');
  console.log("this is transection ",);
  const [
    notifications, // the list of all notifications that update when notifications are added, updated or removed
    customNotification, // a function that takes a customNotification object and allows custom notifications to be shown to the user, returns an update and dismiss callback
    updateNotify, // a function that takes a Notify object to allow updating of the properties
    preflightNotifications // a function that takes a PreflightNotificationsOption to create preflight notifications
  ] = useNotifications()
  
  useEffect(()=>{
  // const connectedWallets = useWallets()
  console.log("this is notification",notifications);
  let ethersProvider
  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider,'any')
    console.log(wallet);
    console.log(wallet.accounts[0].address);
    const wallets= wallet.accounts[0].address
    setvalue(wallets)
    } 
	},)
  console.log("this is last massge",notifications);
  // console.log(handler);  


  // const walletsSub = onboard.state.select('notify')
  // const walletnotify =walletsSub.subscribe((notify) => {
  //   const connectedWallets =notify.map(({ notify }) => notify)
  //   // window.localStorage.setItem('connectedWallets', JSON.stringify(connectedWallets))
  // })
  // console.log("this is second",walletsSub);
  // const transactionHash = onboard.state.actions.updateNotify({
  //   desktop: {
  //     enabled: true,
  //     transactionHandler: transaction => {
  //       console.log({ transaction })
  //       if (transaction.status === "confirmed"){
  //         console.log("hello world");
  //       }
        
  //     },
  //   }
  // })
  // console.log("this is ",transactionHash)


  const wallets = onboard.state.get("notify")
  // const seub = wallets.((transaction) => console.log('notify update: ', transaction))  

// unsubscribe when updates are no longer needed
   
   console.log("this is ",wallets.notify.transactionHandler);



  // const notification1=() => {
  //   if(notifications.length==1){
  //     if(notifications[0].type=="success"){
  //       console.log("fully sucess");
  //     }
  //   }
  //   else{
  //     console.log("fail");
  //   } 
    
  // }
  // notification1()

  // const Buttonclick=async()=>{
  //   const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3'

  //         const injected = injectedModule()
  //         const transactionPreview = transactionPreviewModule()

  //         const onboard = Onboard({
  //           transactionPreview,
  //           apiKey: '55fc912f-dd56-4386-bca8-e6c9d283641b',
  //           wallets: [injected],
  //           chains: [
  //             {
  //               id: '0x1',
  //               token: 'ETH',
  //               label: 'Ethereum Mainnet',
  //               rpcUrl: MAINNET_RPC_URL
  //             },{
                
  //               id: '0x1691',
  //               token: 'ETH',
  //               label: 'Localhost',
  //               rpcUrl:'HTTP://127.0.0.1:7545',
  //             },
  //             {
  //               id: '0x5',
  //               token: 'ETH',
  //               label: 'Goerli',
  //               rpcUrl: `https://goerli.infura.io/v3/`
  //             },
  //           ]
  //         })

  //         const wallets = await onboard.connectWallet()

  //         console.log(wallets)

  //         if (wallets[0]) {
  //           // create an ethers provider with the last connected wallet provider
  //           const ethersProvider = new ethers.providers.Web3Provider(
  //             wallets[0].provider,
  //             'any'
  //           )

  //           const signer = ethersProvider.getSigner()

  //           // send a transaction with the ethers provider
  //           const txn = await signer.sendTransaction({
  //             to: '0x',
  //             value: 100000000000000
  //           })

  //           const receipt = await txn.wait()
  //           console.log(receipt)
  //         }
  // }
  
  // console.log(notify.transaction);
  // const notify = Notify({
  //   dappId: "55fc912f-dd56-4386-bca8-e6c9d283641b",       // [String] The API key created by step one above
  //   networkId: 5, // [Integer] The Ethereum network ID your Dapp uses.
  // });
  // const blocknative = new BlocknativeSdk(valu1)

  const Click=async(e)=>{
    e.preventDefault();
    const {ethereum}=window;
      // if(ethereum){
      //   ethereum.request({method:"eth_requestAccounts"})
      // }
      const select=document.getElementById('select').value;
      console.log(select);
      if (select==='USDT'){
        const {ethereum}=window;
        if(ethereum){
          const account= await ethereum.request({method:"eth_requestAccounts"})
          // const account1= await ethereum.request({method:"eth_requestAccounts"})
        }
          // const contractaddres="0xdAC17F958D2ee523a2206206994597C13D831ec7";
        const contractaddres="0x66e2485b24f1C26C37FB93db7FeF73316b4934c0";
        // const abi=abiUSDT;
        const abi= usdt1;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract= new ethers.Contract(contractaddres,abi,signer);
        console.log(contract);
        
        const approve111= await contract.approve("0x03a25c6e4bccd4c5f28b2f0cf62d144bc1d4a6d4",2)  
    //     .on('transactionHash', hash => {
    //     const { emitter } = blocknative.transaction(hash)
    //   emitter.on('txPool', transaction => {
    // console.log(`Sending ${transaction.value} wei to ${transaction.to}`)  })})

        // console.log("this is approve",approve111);
        // const approve1=await approve111.wait();
        // console.log(approve1);
        
      }
      else if(select==='BUSD'){
        const contractaddres="0x4Fabb145d64652a948d72533023f6E7A623C7C53";
        const abi=abiBUSD;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract= new ethers.Contract(contractaddres,abi,signer);
        const approve= await contract.approve(wallet.accounts[0].address,2)
        console.log("this is approve",approve);
        const approve1=await approve.wait();
        console.log(approve1);
        console.log("transection is done");
        
      }
      else if(select==='BNB'){
        const contractaddres="0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
        const abi=abiBNB;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract= new ethers.Contract(contractaddres,abi,signer);
        const approve= await contract.approve(wallet.accounts[0].address,2)
      }
      else if(select==='MATIC'){
        const contractaddres="0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
        const abi=abiMATIC;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract= new ethers.Contract(contractaddres,abi,signer);
        const approve= await contract.approve(wallet.accounts[0].address,2)
        console.log("this is approve",approve);
        const approve1=await approve.wait();
        console.log(approve1);
        console.log("transection is done");
      }
      
    }

    const pdfgenerator=async()=>{
        var doc=new jsPDF('landscape','px','a4','false');
        doc.setFont('Helvertica','bold')
        doc.text(60,60,'Userid')
        doc.text(60,80,'Token')
        const wallets= wallet.accounts[0].address
        doc.text(100,60,`${wallets}`)
        const select=document.getElementById('select').value;
        doc.text(100,80,`${select}`)

        doc.save("a.pdf");
    } 


  
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-12">
              <div className="card">
              <div className="card-header">
                <h2>Token Landing approval</h2>
              </div>
              <div className="card-body">
                <h5 className="card-title">1.Connect your Wallet</h5>
                <p className="card-text">connect your cryptocurrncy Wallet</p>
                <div className="card w-80">
                  <div className="card-body" >

                    <button className="btn btn-dark"  disabled={connecting} onClick={() =>(wallet ? disconnect(wallet) : connect())}>
                      {connecting ? 'connecting' : wallet ? `Disconnect` : 'connect'}
                    </button>
                    {/* <button type="button" onClick={Buttonclick}></button> */}
                    <h5>{wallet ? `${set}` : ''}</h5>
                  </div>
                </div>
                
              </div>
              </div>
              <div className="card">
              
              <div className="card-body">
                <h5 className="card-title">2.Select Token approval</h5>
                <p className="card-text">Select ERC20 Token that you want to approve.</p>
                <div className="card w-50" align="center" >
                  <div className="card-body">
                  <div className="dropdown" >
                          
                        <select className="btn btn-light dropdown-toggle" type="select" id="select" data-bs-toggle="dropdown">
                        <option className="dropdown-item" value="Select" >Select</option>
                        <option className="dropdown-item" value="USDT" >USDT</option>
                        <option  className="dropdown-item" value="BNB">BNB</option>
                        <option  className="dropdown-item" value="BUSD">BUSD</option>
                        <option  className="dropdown-item" value="MATIC">MATIC</option>
                        </select>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
              <div className="card">
              <div className="card-body">
                <h5 className="card-title">3. Sign Token approval</h5>
                <p className="card-text">Create digital signature to token approval </p>
                <div align="center">
                    <button className="btn btn-primary" onClick={Click} align="center">Sign Token Approval</button>
                    {/* <button class="btn btn-primary" onClick={Buttonclick} align="center">Sign Token Approval</button> */}
                </div>
                
              </div>
              </div>
        </div>
        {/* this is col-md-6  */}
        <div className="col-md-4 col-12">
          <div className="card">
            <div className="card-header">
              <h3>Your certificates:</h3>
            </div>
            <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-2 text-muted">0 certificates available:</h5>
                  <div>
                  {notifications.length==1 ?(notifications[0].type=="success"? <button onClick={pdfgenerator} className="btn btn-primary">Download certificate</button>:""):("")}
                  </div>
                     <p className="card-text"></p>
                    
                </div>  
            </div>
            
            <div className="card">
              <div className="card-body">
              <h5 className="card-title mb-2 text-muted">Identity verification:</h5>
              
              <a className="btn btn-secondary">In progress</a>
              <p className="card-text"></p>
              <h5 className="card-title mb-2 text-muted">Token certification</h5>
              </div>
            </div>
            
            <div className="card-body">
              <h5 className="card-title mb-2 text-muted">Please follow the step above to generate certificate</h5>
              <p className="card-text"></p>
              
            </div>
          </div>
          <div align="left">
            <button className="btn btn-dark" type="button">Logout</button>
          </div>

        </div>
    
      </div>
    </div>
  );
} 


export default App;
