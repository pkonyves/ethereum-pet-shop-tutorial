// deploy contract
//personal.unlockAccount(eth.accounts[0], "petshop", 100)

// instantiate contract object with ABI
var adoptionContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getAdopters","outputs":[{"name":"","type":"address[16]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dogId","type":"uint256"}],"name":"adopt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

// Deploy contract on chain
var adoption = adoptionContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b61023a8061001e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb17146100515780638588b2c5146100a2575b600080fd5b341561005c57600080fd5b6100646100d9565b6040518082601060200280838360005b8381101561008f578082015181840152602081019050610074565b5050505090500191505060405180910390f35b34156100ad57600080fd5b6100c3600480803590602001909190505061015a565b6040518082815260200191505060405180910390f35b6100e16101cf565b6000601080602002604051908101604052809291908260108015610150576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610106575b5050505050905090565b600080821015801561016d575060108211155b151561017857600080fd5b3360008360108110151561018857fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b610200604051908101604052806010905b600073ffffffffffffffffffffffffffffffffffffffff168152602001906001900390816101e057905050905600a165627a7a72305820a4b07f5d89594fed06ada240f092e01e54ac23fb24ed2623b4bfe70fb192358f0029', 
     gas: '4700000'
   }, 
   function (e, contract){
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
    else if (e !== null) {
      console.log(e);
    }
    else {
      console.log(e, contract);
    }
 });

