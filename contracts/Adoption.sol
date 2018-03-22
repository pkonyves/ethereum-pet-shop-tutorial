pragma solidity ^0.4.17;

contract Adopters {
    address[16] adopters; // internal by default

    function adopt(uint dogId) public returns (uint) {
        require(dogId >= 0 && dogId <= 16);
        adopters[dogId] = msg.sender;
        return dogId;
    }

    function giveBack(uint dogId) public {
        require(dogId >= 0 && dogId <= 16);
        require(adopters[dogId] == msg.sender);
        adopters[dogId] = 0;
    }

    function getAdopters() public view returns (address[16]) {
        return adopters;
    }
}