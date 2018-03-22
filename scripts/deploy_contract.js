// deploy contract
//personal.unlockAccount(eth.accounts[0], "petshop", 100)

// instantiate contract object with ABI
var adoptionContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"dogId","type":"uint256"}],"name":"giveBack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAdopters","outputs":[{"name":"","type":"address[16]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dogId","type":"uint256"}],"name":"adopt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"dogId","type":"uint256"}],"name":"Adopted","type":"event"}]);

// Deploy contract on chain
var adoption = adoptionContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b6103788061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630d5847b01461005c5780633de4eb171461007f5780638588b2c5146100d0575b600080fd5b341561006757600080fd5b61007d6004808035906020019091905050610107565b005b341561008a57600080fd5b6100926101e0565b6040518082601060200280838360005b838110156100bd5780820151818401526020810190506100a2565b5050505090500191505060405180910390f35b34156100db57600080fd5b6100f16004808035906020019091905050610261565b6040518082815260200191505060405180910390f35b60008110158015610119575060108111155b151561012457600080fd5b3373ffffffffffffffffffffffffffffffffffffffff1660008260108110151561014a57fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561018e57600080fd5b6000808260108110151561019e57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6101e861030d565b6000601080602002604051908101604052809291908260108015610257576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161020d575b5050505050905090565b6000808210158015610274575060108211155b151561027f57600080fd5b3360008360108110151561028f57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f7e79c268384d04176e7756f1c88bdafaf9ff08cd00c7bbb6a27b894b1276e333826040518082815260200191505060405180910390a1819050919050565b610200604051908101604052806010905b600073ffffffffffffffffffffffffffffffffffffffff1681526020019060019003908161031e57905050905600a165627a7a7230582043475ce831e27f6bba8e01f4ae3ac10ad6d1697444eeddac07c9d5d11b80647f0029', 
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

