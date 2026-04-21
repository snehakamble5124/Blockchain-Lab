## **Title:** Set up a Polygon test network. Deploy the previously created smart contract to Polygon for improved scalability. 
<br>

**Network Configuration Details**<br>
For deploying and testing the smart contract, the Polygon Amoy Testnet is used. This is a test network that allows developers to perform transactions without using real cryptocurrency.<br><br>
The Polygon Amoy Testnet is a blockchain testing environment used for deploying and verifying smart contracts. It provides free test tokens through faucet services, enabling developers to simulate real-world transactions without financial risk. The network is integrated with wallets like MetaMask, allowing easy deployment and interaction with smart contracts.<br><br>
After deployment, all transactions and contract details can be verified using the Polygon block explorer, ensuring transparency and correctness of the deployed application.<br><br>

**Network Name:** Polygon Amoy Testnet<br>
**RPC URL:** https://rpc-amoy.polygon.technology/ <br><br><br>

**Steps:**<br>
1.Open Remix IDE in your browser and create a new file named HelloWorld.sol, then write a simple smart contract with a message like “Hello, Blockchain!”.<br>
2.Open MetaMask and log in to your wallet or create a new account if you don’t have one.<br>
3.Go to Polygon Faucet and click on “Add Chain to Wallet” to add the Polygon Amoy test network to MetaMask.<br>
4.In the faucet website, go to the third-party faucet section, copy your MetaMask wallet address, paste it there, and request test tokens.<br>
5.After requesting, you will see around 0.10 test tokens added to your MetaMask wallet.<br>
6.Go back to Remix IDE, open the Solidity Compiler tab, select version 0.8.x, and compile the HelloWorld contract.<br>
7.Open the Deploy & Run Transactions tab, select environment as Injected Provider (MetaMask), choose the contract, and click on Deploy.<br>
8.A MetaMask popup will open, then confirm the transaction to deploy the contract.<br>
9.After deployment, go to the Activity tab in MetaMask, click on the transaction, and open it in the block explorer to view contract details and confirm successful deployment.<br>
<br><br>
<img width="796" height="423" alt="Screenshot 2026-04-21 233456" src="https://github.com/user-attachments/assets/a9e16fd4-5cb8-4a6c-a969-611ad78eca0c" /><br>
<img width="380" height="394" alt="Screenshot 2026-04-21 233504" src="https://github.com/user-attachments/assets/cc293231-74a2-41e2-8fdf-bf37e5a0a753" /><br>
<img width="752" height="326" alt="image" src="https://github.com/user-attachments/assets/15100750-ce97-47d6-8f50-ac6c32e6b8a7" /><br>

<br>
## **Conclusion:**<br>
The Polygon Amoy test network was successfully set up using MetaMask, and test tokens were obtained through the Polygon Faucet. The HelloWorld smart contract was compiled and deployed using Remix IDE with the Injected Provider environment. The deployment was confirmed through MetaMask and verified on the blockchain explorer. This experiment demonstrates how blockchain applications can be deployed on Polygon for better scalability, lower transaction costs, and efficient smart contract execution.
