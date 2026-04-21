// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleBank {

    mapping(address => uint) public balances;

    // Deposit Ether into contract
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    // Withdraw Ether from contract
    function withdraw(uint amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;

        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
    }

    // Check balance
    function checkBalance() public view returns (uint) {
        return balances[msg.sender];
    }
}
