#!/bin/bash
geth --rpc --rpcport 8545 --rpccorsdomain "*" --rpcapi "web3,eth,net,personal" \
--identity "MyTestNetNode" --nodiscover --networkid 15 \
--datadir ~/.ethereum-testnet \
--mine --etherbase 1 --minerthreads 1 $@ 