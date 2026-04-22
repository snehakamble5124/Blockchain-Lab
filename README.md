**Student Name:** Sneha Mahendra Kamble<br>
**Roll Number (PRN):** 124B2B030<br>
**Course Name:** Blockchain Technology<br>

##   Overview<br>
This repository contains a complete set of blockchain lab assignments demonstrating core concepts of Web3 development, including smart contracts, decentralized applications, IPFS storage, and DAO governance.
Brief Description of Assignments<br>

**Assignment 1**<br>
This assignment focuses on creating and deploying a simple smart contract using Remix IDE. A basic HelloWorld contract is written in Solidity and deployed on a test network. The objective is to understand smart contract structure, compilation, and deployment process.
<br>
**Assignment 2**<br>
This assignment demonstrates the implementation of a SimpleBank smart contract. It allows users to deposit, withdraw, and check balances using blockchain. The goal is to understand Solidity concepts such as mapping, functions, payable, and transaction handling.
<br>
**Assignment 3**<br>
This assignment involves connecting a frontend web interface with the blockchain using MetaMask. A web application is developed using HTML, CSS, and JavaScript to connect a wallet, send transactions, and display transaction details.
<br>
**Assignment 4**<br>
This assignment implements decentralized file storage using IPFS. Files are uploaded to IPFS Desktop, and the generated CID is stored on the blockchain using a smart contract. The goal is to understand integration between blockchain and decentralized storage.
<br>
**Assignment 5**<br>
This assignment demonstrates the implementation of a DAO smart contract. It allows adding members, creating proposals, voting on proposals, and executing them based on voting results. The objective is to understand decentralized governance using smart contracts
<br>
## **Tech Stack Used**<br>
1. Solidity for smart contract development<br>
2. Remix IDE for writing, compiling, and deploying contracts<br>
3. MetaMask for wallet integration and transaction signing<br>
4. Polygon Amoy and Sepolia Test Networks for deployment and testing<br>
5. HTML and CSS for frontend design<br>
6. JavaScript for blockchain interaction<br>
7. IPFS Desktop for decentralized file storage<br>

## **How to Run Each Assignment**<br>

**Assignment 1**<br>
Open Remix IDE in browser<br>
Create HelloWorld.sol file<br>
Write the smart contract code<br>
Compile using Solidity version 0.8.x<br>
Connect MetaMask<br>
Select Injected Provider<br>
Deploy the contract<br>
Verify deployment in block explorer<br>

**Assignment 2**<br>
Open Remix IDE<br>
Create SimpleBank.sol file<br>
Write the smart contract code<br>
Compile the contract<br>
Connect MetaMask<br>
Deploy using Injected Provider<br>
Test functions such as deposit, withdraw, and checkBalance<br>

**Assignment 3**<br>
Install MetaMask extension and connect to Sepolia network<br>
Create project folder with index.html and script.js<br>
Design frontend interface<br>
Write JavaScript code using window.ethereum<br>
Open index.html in browser<br>
Click Connect Wallet<br>
Enter receiver address and amount<br>
Click Send and approve transaction in MetaMask<br>
View transaction hash<br>

**Assignment 4**<br>
Install IPFS Desktop<br>
Upload file and pin it<br>
Copy generated CID<br>
Open Remix IDE<br>
Create and compile smart contract<br>
Connect MetaMask using Browser Wallet<br>
Deploy contract on Sepolia network<br>
Call function to store CID<br>
Approve transaction<br>
Retrieve stored CID using contract functions<br>

**Assignment 5**<br>
Open Remix IDE and create a new file DAO.sol<br>
Paste the smart contract code<br>
Compile using Solidity compiler version 0.8.x<br>
Deploy the contract using Remix VM or MetaMask environment<br>
Add members by entering Ethereum addresses and calling addMember function<br>
Create a proposal using createProposal(description, duration)<br>
Vote on the proposal using vote(proposalId) by authorized members<br>
Execute the proposal after the deadline using executeProposal(proposalId)<br>
View proposal details using getProposal(proposalId) function<br>
