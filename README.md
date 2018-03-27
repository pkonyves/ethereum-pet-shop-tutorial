# ethereum-pet-shop-tutorial

For full comprehension see the following tutorial: https://medium.com/@pkonyves/ethereum-dapp-on-localhosted-blockchain-part-1-1c7bb6fcea50

This is an Ethereum-based DApp with a web-gui frontend. The web-gui communicates with the blockchain directly via the web3 api.

## Files and folders

* `contracts/Adoption.sol` the main and only contract that handles the "business logic" of the DApp
* `src` The source code of the web application
* `scripts` Various shell scripts to run the blockchain. 

    **All of the scripts should be executed within the root folder of this project** because they expect the current working directory to be that.
    * `install-geth-solc.sh` Installs geth and solidity compiler on ubuntu
    * `geth-test.sh` runs geth on the datadir `~/.ethereum-test` e.g. 
        * `./scripts/geth-test.sh console` start a geth javascript console
        * `./scripts/geth-test.sh attach` attach to local geth node
        * `./scripts/geth-test.sh accounts list`
    * `geth-test-genesis.sh` creates the genesis block e.g. `./scripts/geth-test-genesis.sh`
    * `geth-test-mine.sh` starts a mining node
    * `deploy.sh` uses `deploy_contract.js` to deploy the contract to the blockchain using `geth`
    * `solc_compile.sh` compiles the Adoption contract e.g. `./scripts/solc_compile.sh`
    * `run_http.sh` runs python SimpleHTTPServer to serve the web application, **This must be executed within the /src working directory**
* `unlock.pw` is used by the `./scripts/geth-*` commands
* `genesis.json` is used by `./scripts/geth-test-genesis.sh`
