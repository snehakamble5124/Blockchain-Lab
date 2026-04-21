
**Title:** Design a smart contract deployed on a blockchain network.

## 1. Purpose of the Contract

The SimpleBank smart contract represents a decentralized banking system built on blockchain technology. Its main purpose is to allow users to store, manage, and transfer Ether securely without relying on a centralized authority such as a traditional bank.<br>
This contract ensures that:<br>
Each user has an independent account (linked to their wallet address)<br>
Transactions are transparent and immutable<br>
Funds are controlled only by the user<br>
The contract demonstrates how blockchain can be used for financial applications (DeFi) by enabling secure deposits, withdrawals, and balance tracking.<br><br>


## 1. State Variables
State variables are variables declared inside a contract whose values are permanently stored on the blockchain. These variables maintain the contract’s state and can be accessed or modified by functions.<br>
**Syntax:**<br>
type visibility variableName;<br>
**Example:**<br>
uint public balance;<br><br>


## 2. Mapping
Mapping is a key-value data structure in Solidity used for efficient storage and retrieval of data using unique keys.<br>
**Syntax:**<br>
mapping(keyType => valueType) visibility variableName;<br>
**Example:**<br>
mapping(address => uint) public balances;<br><br>


## 3. Functions
Functions are blocks of code that define the behavior of a smart contract and are executed when called.<br>
**Syntax:**<br>
function functionName(parameters) visibility returns(returnType) {<br>
&nbsp;&nbsp;// logic<br>
}<br>
**Example:**<br>
function getValue() public returns(uint) {<br>
&nbsp;&nbsp;return 10;<br>
}<br><br>


## 4. Payable Functions
Payable functions are functions that can receive Ether along with a transaction.<br>
**Syntax:**<br>
function functionName() public payable {<br>
&nbsp;&nbsp;// logic<br>
}<br>
**Example:**<br>
function deposit() public payable {<br>
}<br><br>


## 5. View Functions
View functions are used to read data from the blockchain without modifying the state.<br>
**Syntax:**<br>
function functionName() public view returns(returnType) {<br>
&nbsp;&nbsp;// read-only logic<br>
}<br>
**Example:**<br>
function checkBalance() public view returns(uint) {<br>
&nbsp;&nbsp;return 100;<br>
}<br><br>


## 6. Address Type
Address is a built-in data type used to store Ethereum account addresses and interact with them.<br>
**Syntax:**<br>
address variableName;<br>
**Example:**<br>
address public owner;<br><br>


## 7. msg Object
msg is a global object that provides information about the current transaction and call.<br>
**Common Properties:**<br>
msg.sender → Address of the caller<br>
msg.value → Amount of Ether sent<br><br>
**Example:**<br>
address user = msg.sender;<br>
uint amount = msg.value;<br><br>


## 8. Require Statement
The require statement is used for validation and error handling, ensuring conditions are met before execution.<br><br>
**Syntax:**<br>
require(condition, "Error message");<br><br>
**Example:**<br>
require(balance > 0, "Insufficient balance");<br><br>


## 9. Ether Transfer
Ether transfer is the process of sending Ether from a contract to an address.<br>
**Syntax:**<br>
payable(address).transfer(amount);<br>
or<br>
(bool success, ) = payable(address).call{value: amount}("");<br>
require(success);<br><br>
**Example:**<br>
payable(msg.sender).transfer(1 ether);<br><br>


## 10. Visibility Specifiers
Visibility specifiers define who can access variables and functions.<br>
**Types:**<br>
public → Accessible from anywhere<br>
private → Accessible only within the contract<br>
internal → Accessible within contract and derived contracts<br>
external → Accessible only from outside the contract<br>
**Syntax:**<br>
type visibility variableName;<br>
function functionName() visibility {}<br>
**Example:**<br>
uint private data;<br>
function getData() public {}<br><br>


## 11. Constructor
A constructor is a special function that is executed only once during contract deployment and is used for initialization.<br>
**Syntax:**<br>
constructor() {<br>
&nbsp;&nbsp;// initialization logic<br>
}<br>
**Example:**<br>
constructor() {<br>
&nbsp;&nbsp;owner = msg.sender;<br>
}<br><br>


## 12. Events
Events are used to log information on the blockchain, which can be accessed by external applications.<br><br>
**Syntax:**<br>
event EventName(parameters);<br>
emit EventName(values);<br>
**Example:**<br>
event Deposited(address user, uint amount);<br>
emit Deposited(msg.sender, msg.value);
<br>
<br>

## **Steps to Design and Deploy Smart Contracts on Blockchain**<br>
1.Open Remix IDE in a web browser. The IDE loads directly without requiring any installation.<br>
2.In the File Explorer, create a new file named Bank.sol and paste the given SimpleBank Solidity smart contract code into the file.<br>
3.Go to the Solidity Compiler tab, select version 0.8.0 or above, and compile the Bank.sol contract, ensuring there are no errors.<br>
4.Navigate to Deploy & Run Transactions, choose JavaScript VM as the environment, select the SimpleBank contract, and click Deploy.<br>
5.After deployment, the contract will appear under deployed contracts where its functions can be accessed.<br>
6.To test deposit functionality, enter an Ether value and execute the deposit() function to store funds in the contract.<br>
7.To withdraw funds, enter the required amount and call the withdraw() function, which transfers Ether back to the user.<br>
8.Use the checkBalance() function to view the current balance associated with the user’s account.<br>
9.Each transaction generates a unique transaction hash, which can be used to verify and track transactions on a blockchain explorer when deployed on a live network.<br>


**Contract address**:0xd9145CCE52D386f254917e481eB44e9943F39138 <br>
**Transaction hash:** 0xff427b3272103af411d02dc848916d4f953660f7ba683d39f766b3de6c7fb89d

<img width="394" height="488" alt="Screenshot 2026-04-21 230636" src="https://github.com/user-attachments/assets/ef804aae-8351-4838-ad1e-325ddd96602f" />
<br>
<img width="862" height="93" alt="Screenshot 2026-04-21 230726" src="https://github.com/user-attachments/assets/b60f6238-6608-4284-aeaf-10d2693fdb0b" />

<br>
<br>

<img width="903" height="83" alt="Screenshot 2026-04-21 230906" src="https://github.com/user-attachments/assets/4fc01422-0b75-4184-87fb-7e1f9c8aa248" /><br>
<img width="389" height="508" alt="Screenshot 2026-04-21 230849" src="https://github.com/user-attachments/assets/500e04d6-b1e2-4c04-9856-b36959783903" />


<br>
<br>
Conclusion:<br>
The smart contracts were successfully created, compiled, and deployed using Remix IDE. the SimpleBank contract showed secure handling of deposits and withdrawals using blockchain technology.

