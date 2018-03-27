#!/bin/bash
geth --unlock 0 --password unlock.pw --datadir ~/.ethereum-testnet --networkid 15 account new

echo "list accounts:"
geth --unlock 0 --password unlock.pw --datadir ~/.ethereum-testnet --networkid 15 account list
