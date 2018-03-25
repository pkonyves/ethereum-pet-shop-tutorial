pragma solidity ^0.4.17;

contract Adopters {
    address[16] adopters; // internal by default


    function adopt(uint dogId) public returns (uint) {
        require(dogId >= 0 && dogId <= 16);
        adopters[dogId] = msg.sender;
        return dogId;
    }

    function getAdopters() public view returns (address[16]) {
        return adopters;
    }
}