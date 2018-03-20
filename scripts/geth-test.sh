#!/bin/bash
geth --unlock 0 --password unlock.pw --datadir ~/.ethereum-testnet $@
