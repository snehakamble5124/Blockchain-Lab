## **Title:** Implement IPFS for decentralized file storage.


**IPFS Service / Library Used**<br>
In this implementation, IPFS Desktop is used as the IPFS service. It is a user-friendly application that allows uploading, storing, and managing files on the InterPlanetary File System (IPFS) network without requiring complex coding. IPFS is a decentralized storage system that distributes files across multiple nodes instead of storing them on a single central server.<br>

**File Storage in IPFS**<br>
Files in IPFS are stored using a content-based addressing mechanism. When a file is uploaded:
The file is divided into smaller chunks
A unique cryptographic hash is generated
This hash becomes the CID (Content Identifier) of the file
The file is then stored across the distributed IPFS network. To ensure the file remains available, it is pinned on the local node. The CID acts as a permanent and unique reference to the file.<br>

**File Retrieval from IPFS**<br>
Files are retrieved using the generated CID.
The CID is used to locate the file in the IPFS network
The system reconstructs the file from its stored chunk
Files can be accessed using an IPFS gateway such as:
https://ipfs.io/ipfs/<CID>
This allows users to view or download the file directly using a browser.<br>

**Integration with Blockchain**<br>
In this system, the actual files are stored on IPFS, while only the CID is stored on the blockchain using a smart contract.<br>
This approach provides:<br>
Reduced storage cost on the blockchain<br>
Improved efficiency and scalability<br>
Data integrity, as any change in the file results in a new CID<br>
<br>
<br>
**Steps to Implement IPFS for Decentralized File Storage**<br>
1.Download and install IPFS Desktop on your Windows system.<br>
2.Open IPFS Desktop, go to Files, upload your document, and pin it to generate a unique CID.<br>
3.Copy the generated CID after uploading and publishing the file.<br>
4.Install and open MetaMask and copy your wallet address.<br>
5.Use Sepolia Faucet to request free test ETH for transactions.<br>
6.Open Remix IDE in your browser and create a new Solidity file.<br>
7.Paste the given smart contract code and compile it using Solidity version 0.8.20.<br>
8.Go to Deploy & Run Transactions, select environment as Browser Wallet, and connect MetaMask.<br>
9.Ensure MetaMask is set to Sepolia Test Network and confirm connection in Remix.<br>
10.Deploy the smart contract using your MetaMask account.<br>
11.Call the submitSubmission function by entering your PRN and the copied IPFS CID.<br>
12.Approve the transaction in MetaMask to store the CID on the blockchain.<br>
13.Verify the stored data using functions like getSubmission or getAllSubmissions.<br>
<br><br>

**CID:**
QmXDFeE9x3PVv81KFLPvi668DSuDHBmAr59ie5eFex7hnY<br>

**IPNS address:**
https://ipfs.io/ipns/k51qzi5uqu5dl7yug7wprpae0cnm2f7fgvoc67auzv4mc25li1eznkximv8bbv<br>

**Transaction hash:**
0x4383cd73f382ae35090d7faddf04484b418ec9c3682df3153001d5d372bd57b2<br>
<br>

<img width="885" height="92" alt="Screenshot 2026-04-22 000254" src="https://github.com/user-attachments/assets/bae57456-1de4-4859-9366-509b00ce88bf" /><br>
<img width="320" height="523" alt="Screenshot 2026-04-22 000246" src="https://github.com/user-attachments/assets/68088aa6-256f-48e5-8275-763126a1acad" /><br>
<img width="763" height="566" alt="Screenshot 2026-04-22 000238" src="https://github.com/user-attachments/assets/643537e9-7602-4136-8cfa-3b9f70317b7c" /><br>
<img width="811" height="429" alt="Screenshot 2026-04-22 000230" src="https://github.com/user-attachments/assets/4e3dd80d-0e68-4494-8e9c-2d82612c6bec" /><br><br>


**Conclusion:**<br>
This assignment demonstrates how IPFS can be used for decentralized file storage by storing files off-chain and saving their CID on the blockchain. It ensures data integrity, transparency, and security without relying on centralized servers. By integrating IPFS with smart contracts on the Ethereum Sepolia test network, the system enables efficient and tamper-proof storage of student submissions.
