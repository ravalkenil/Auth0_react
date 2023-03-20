//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Demo{
    uint number=14;
    function set(uint number) public payable returns(uint) {
        number=number;
        return number;
    }
    function get()public view returns(uint) {
        return number;
    }
}