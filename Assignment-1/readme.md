
**Title: ** Design a smart contract deployed on a blockchain network.

**Program Code:**
**hello.sol:**
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract HelloWorld {
    string public message = "Hello, Blockchain!";
}

**Contract address**:0xd9145CCE52D386f254917e481eB44e9943F39138
**Transaction hash:** 0xff427b3272103af411d02dc848916d4f953660f7ba683d39f766b3de6c7fb89d

<img width="394" height="488" alt="Screenshot 2026-04-21 230636" src="https://github.com/user-attachments/assets/ef804aae-8351-4838-ad1e-325ddd96602f" />
<img width="862" height="93" alt="Screenshot 2026-04-21 230726" src="https://github.com/user-attachments/assets/b60f6238-6608-4284-aeaf-10d2693fdb0b" />


**2.Bank.sol:**
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

<img width="903" height="83" alt="Screenshot 2026-04-21 230906" src="https://github.com/user-attachments/assets/4fc01422-0b75-4184-87fb-7e1f9c8aa248" />
<img width="389" height="508" alt="Screenshot 2026-04-21 230849" src="https://github.com/user-attachments/assets/500e04d6-b1e2-4c04-9856-b36959783903" />


**Steps to Design and Deploy Smart Contracts on Blockchain**
1.Open Remix IDE in a web browser. The IDE loads directly without requiring any installation.
2.In the File Explorer, create a new file named Bank.sol and paste the given SimpleBank Solidity smart contract code into the file.
3.Go to the Solidity Compiler tab, select version 0.8.0 or above, and compile the Bank.sol contract, ensuring there are no errors.
4.Navigate to Deploy & Run Transactions, choose JavaScript VM as the environment, select the SimpleBank contract, and click Deploy.
5.After deployment, the contract will appear under deployed contracts where its functions can be accessed.
6.To test deposit functionality, enter an Ether value and execute the deposit() function to store funds in the contract.
7.To withdraw funds, enter the required amount and call the withdraw() function, which transfers Ether back to the user.
8.Use the checkBalance() function to view the current balance associated with the user’s account.
9.Each transaction generates a unique transaction hash, which can be used to verify and track transactions on a blockchain explorer when deployed on a live network.
