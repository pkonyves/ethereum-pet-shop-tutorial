#!/bin/bash
geth --datadir ~/.ethereum-testnet --exec 'personal.unlockAccount(eth.accounts[0], "petshop", 100); loadScript("deploy_contract.js"); ' attach