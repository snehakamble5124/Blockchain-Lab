
**Voting Mechanism**<br>
The voting mechanism in the DAO ensures that decision-making is restricted to authorized participants and follows a transparent and fair process. Only addresses that have been added as members are allowed to vote on proposals. When a proposal is created, it remains open for voting until a predefined deadline, which is calculated using the current block timestamp and the duration provided at the time of creation. During this period, members can cast their vote by calling the voting function. The system verifies that the voter is a valid member, has not already voted on the same proposal, and that the voting period has not yet expired. Once these conditions are satisfied, the vote is recorded by incrementing the vote count associated with the proposal. Each member is allowed to vote only once per proposal, ensuring fairness and preventing duplicate voting. The total number of votes collected represents the level of support for that proposal, which is later used to determine whether it can be executed.

**Proposal Creation in DAO**<br>
Proposal creation in the DAO is the process through which new ideas or decisions are formally introduced into the system. Only registered members are allowed to create proposals, ensuring that unauthorized users cannot influence the decision-making process. A member initiates a proposal by providing a description along with a specified duration for voting. Once the proposal is submitted, the system verifies the membership of the creator and then initializes the proposal with default values such as a vote count of zero and an execution status set to false. The deadline for voting is automatically calculated by adding the given duration to the current blockchain timestamp, which ensures that every proposal has a fixed and transparent voting period. After successful creation, the proposal is stored on the blockchain and becomes accessible to all members for review and participation.

**DAO Workflow**<br>
The workflow of the Decentralized Autonomous Organization (DAO) starts with the deployment of the smart contract, where the deployer becomes the owner and is automatically added as the first member. The owner is responsible for adding new members by registering their Ethereum addresses, allowing them to participate in the system. Once members are added, they can take part in the governance process of the DAO.
Any member can create a proposal by providing a description and a time duration for voting. When a proposal is created, it is stored on the blockchain with an initial vote count of zero, a deadline calculated using the current time, and an execution status set to false. This proposal is then available for all members to review and vote on.
During the voting period, members can cast their votes. The system ensures that only valid members can vote, each member can vote only once per proposal, and voting happens before the deadline. As members vote, the vote count increases, representing the level of support for the proposal.
Once the deadline is reached, the proposal becomes eligible for execution. At this stage, the system checks that the voting period has ended, the proposal has not already been executed, and it has received votes. After these conditions are satisfied, the proposal is executed and marked as completed. This completes the lifecycle of the proposal and ensures a transparent and decentralized decision-making process within the DAO.

**Steps:**<br>
Open Remix IDE and create a new file DAO.sol to paste the contract code.<br>
Compile the contract using Solidity compiler version 0.8.x to check for errors.<br>
Deploy the contract using Remix VM or MetaMask environment.<br>
Add members by entering Ethereum addresses and calling the addMember function.<br>
Create a proposal using createProposal(description, duration) function.<br>
Vote on the proposal using vote(proposalId) by authorized members.<br>
Execute the proposal after the deadline using executeProposal(proposalId).<br>
View proposal details using getProposal(proposalId) function.<br><br>

<img width="500" height="748" alt="Screenshot 2026-04-22 184408" src="https://github.com/user-attachments/assets/cc48f1dd-a4d0-42b8-8ac8-8de2bd85f63f" /><br>
<img width="308" height="264" alt="Screenshot 2026-04-22 184334" src="https://github.com/user-attachments/assets/c59818f4-a973-4577-b5f6-c1ffc53abf91" /><br>
<img width="465" height="755" alt="Screenshot 2026-04-22 183412" src="https://github.com/user-attachments/assets/ac453888-3d35-4904-89cf-0d1e4422a396" /><br>
<img width="489" height="738" alt="Screenshot 2026-04-22 182755" src="https://github.com/user-attachments/assets/6cb84288-1559-4b5b-84ac-93f71e2ca67b" /><br>
<img width="491" height="746" alt="Screenshot 2026-04-22 182711" src="https://github.com/user-attachments/assets/189aa487-eb18-45b9-b9a6-4ece50c2c9ab" /><br>


**Conclusion**<br>

This assignment demonstrated the implementation of a Decentralized Autonomous Organization (DAO) using a smart contract. It helped in understanding key concepts such as proposal creation, voting, and execution in a decentralized system. The project showed how blockchain ensures transparency, security, and automated decision-making without a central authority, while also providing hands-on experience with tools used to deploy and interact with smart contracts.
