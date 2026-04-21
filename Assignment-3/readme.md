**Title:** Design a web interface where users can sign and send transactions (e.g., product transactions) to the blockchain using MetaMask. 
<br><br>

**frontend Connection to Blockchain**
The frontend connects to the blockchain using JavaScript libraries and browser-based wallet providers. In this implementation, the connection is established through the window.ethereum object provided by the MetaMask extension.<br>
When a user opens the web application, the frontend interacts with the blockchain by:<br>
->Requesting access to the user’s wallet<br>
->Sending transaction requests<br>
->Receiving responses such as account address and transaction hash<br>
The frontend does not directly communicate with the blockchain. Instead, it uses MetaMask as a bridge (provider) that connects the web application to the blockchain network.<br>
<br><br>
**Role of MetaMask**<br>
MetaMask is a browser extension wallet that enables interaction between users and blockchain networks.<br>
It performs the following functions:<br>
->Stores user Ethereum accounts and private keys securely<br>
->Connects the web application to blockchain networks like Sepolia or Polygon<br>
->Prompts the user to approve or reject transactions<br>
->Signs transactions before sending them to the blockchain<br>
MetaMask acts as a secure intermediary, ensuring that the user has full control over their transactions.<br>
<br><br>

**Steps to Design and Run the MetaMask Transaction Web Interface**<br>
1.Install the MetaMask extension in your browser and set up a wallet connected to a test network like Sepolia.<br>
2.Create a project folder and add two files named index.html and script.js.<br>
3.Design the web interface using HTML and CSS with a connect wallet button, account display, input fields, and a send button.<br>
4.Write JavaScript code using window.ethereum to connect the wallet and send transactions.<br>
5.Click the Connect MetaMask button to allow the user to connect their wallet through the MetaMask popup.<br>
6.Enter the receiver address and ETH amount, then click Send to initiate the transaction.<br>
7.Approve the transaction in MetaMask and view the transaction hash displayed on the screen.<br>
8.Open the index.html file in a browser and test the full functionality of connecting the wallet and sending transactions.<br>
<br><br>
<img width="407" height="502" alt="Screenshot 2026-04-21 234539" src="https://github.com/user-attachments/assets/6545909d-b5bc-4e45-9a23-7c63cbf6a9aa" /><br><br>
<img width="296" height="469" alt="Screenshot 2026-04-21 234532" src="https://github.com/user-attachments/assets/1502c64f-93ad-47d5-bd55-923bec77d75e" /><br>
<br><br>
**Conclusion:**<br>
This assignment successfully demonstrates how to design a web interface that interacts with blockchain using MetaMask. Users can securely connect their wallet, sign transactions, and send cryptocurrency directly from the browser.
It provides hands-on understanding of:<br>
-Blockchain interaction using JavaScript<br>
-Wallet integration via MetaMask<br>
-Transaction signing and broadcasting<br>
Overall, this implementation shows how decentralized applications (dApps) enable secure and transparent peer-to-peer transactions without intermediaries.<br>

<br>
