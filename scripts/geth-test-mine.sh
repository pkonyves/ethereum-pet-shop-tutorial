#!/bin/bash
geth --rpc --rpcport 8545 --rpccorsdomain "*" --rpcapi "web3,eth,net,personal" \ #setting up RPC options
  --unlock 0 --password unlock.pw \   #unlocking account index 0 
  --identity "MyTestNetNode" --nodiscover --networkid 15 \ #network id
  --datadir ~/.ethereum-testnet \     #data directory
  --mine --etherbase 1 --minerthreads 1 $@   #mining options