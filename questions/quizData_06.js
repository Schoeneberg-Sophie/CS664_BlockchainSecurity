// quizData_06.js
// Lecture 6: SegWit, Scalability, and Confirmation Time
// type: "single" | "multiple" | "text"

const quizData_06 = [
  {
    id: 1,
    type: "single",
    question: "Why does the recipient wait some time to confirm that he actually received the BTC?",
    options: [
      { id: "a", text: "To allow the sender enough time to cancel or revoke the transaction." },
      { id: "b", text: "To ensure the Bitcoin network fees are refunded to the buyer." },
      { id: "c", text: "To make sure no new forks make the transaction invalid." },
      { id: "d", text: "To verify that the sender's private key is still valid." }
    ],
    correct: ["c"],
    explanation: "Because block reorganization (forking) can occur in the short term, waiting for multiple confirmations (typically 6 blocks) ensures the block containing the transaction is sufficiently deep in the longest chain to make invalidation via chain reorganization practically impossible."
  },
  {
    id: 2,
    type: "single",
    question: "The larger the mempool...",
    options: [
      { id: "a", text: "The lower the total transaction fees required for priority inclusion." },
      { id: "b", text: "The longer it takes for a single transaction to be included into the blockchain on average." },
      { id: "c", text: "The faster new blocks are mined by network participants." },
      { id: "d", text: "The larger the maximum block size limit automatically becomes." }
    ],
    correct: ["b"],
    explanation: "The mempool (memory pool) holds unconfirmed transactions. When network congestion grows and the mempool expands, competition for block space increases, leading to longer average waiting times for transactions with standard or low fees."
  },
  {
    id: 3,
    type: "multiple",
    question: "In theory, what could be done to increase the tps (Transactions per second) in bitcoin? (Select all that apply)",
    options: [
      { id: "a", text: "Reduce block generation time (BGT)" },
      { id: "b", text: "Increase the difficulty target requirement" },
      { id: "c", text: "Increase the block size limit" },
      { id: "d", text: "Restrict the total number of connected network nodes" }
    ],
    correct: ["a", "c"],
    explanation: "Bitcoin throughput (TPS) is constrained by block capacity and block interval time (TPS ≈ Block Capacity / Block Time). Decreasing the Block Generation Time (BGT) or increasing the block size allows more transactions to be processed per second."
  },
  {
    id: 4,
    type: "multiple",
    question: "What would be the consequences of reducing the block generation time in bitcoin? (Select all that apply)",
    options: [
      { id: "a", text: "The difficulty target would increase" },
      { id: "b", text: "The difficulty target would decrease" },
      { id: "c", text: "The risk of double spend attacks would decrease if BGT (block generation time) < RT (relay time)" },
      { id: "d", text: "The risk of double spending attacks would increase if BGT (block generation time) < RT (relay time)" }
    ],
    correct: ["b", "d"],
    // NOTE: check the wording of "difficulty target" against your lecture slides.
    // In standard Bitcoin terms the target value goes UP when mining gets easier.
    explanation: "Mining blocks faster requires lowering the proof-of-work difficulty (meaning the difficulty target value/threshold increases numerical range, represented here as decreasing mining difficulty). Additionally, if BGT is shorter than network Relay Time (RT), blocks won't propagate fast enough, causing high orphan block rates and increasing double-spending/fork risks."
  },
  {
    id: 5,
    type: "multiple",
    question: "What would be the consequences of increasing the block size in bitcoin? (Select all that apply)",
    options: [
      { id: "a", text: "The relay time would decrease" },
      { id: "b", text: "The relay time would increase" },
      { id: "c", text: "Nodes would take more time downloading new blocks" },
      { id: "d", text: "The difficulty target would increase" },
      { id: "e", text: "The difficulty target would decrease" }
    ],
    correct: ["b", "c"],
    explanation: "Larger blocks contain more data bytes, requiring more bandwidth and time to relay across peer-to-peer nodes (increasing Relay Time) and consuming more time and resource effort for full nodes to download and validate."
  },
  {
    id: 6,
    type: "single",
    question: "Why was SegWit introduced?",
    options: [
      { id: "a", text: "To convert Bitcoin from Proof-of-Work to Proof-of-Stake." },
      { id: "b", text: "To replace public-key cryptography with zero-knowledge proofs." },
      { id: "c", text: "To enforce a hard limit on the total supply of 21 million BTC." },
      { id: "d", text: "To solve transaction malleability" }
    ],
    correct: ["d"],
    explanation: "Segregated Witness (SegWit) was primarily designed to fix transaction malleability by moving witness/signature data outside the transaction hash calculation. As a side benefit, it increased effective block capacity (block weight) and enabled Layer 2 protocols like the Lightning Network."
  },
  {
    id: 7,
    type: "single",
    question: "SegWit is...",
    options: [
      { id: "a", text: "Backwards compatible (Soft fork)" },
      { id: "b", text: "Not backwards compatible (Hard fork)" }
    ],
    correct: ["a"],
    explanation: "SegWit was implemented as a soft fork (backwards compatible). Non-upgraded nodes treat SegWit spend conditions as 'anyone-can-spend' scripts that are always valid, while upgraded nodes enforce the full witness verification rules."
  },
  {
    id: 8,
    type: "single",
    question: "What part of the block header / transaction structure is moved outside in Segwit?",
    options: [
      { id: "a", text: "The unlocking script (scriptSig / Witness)" },
      { id: "b", text: "Transaction ID (TxID)" },
      { id: "c", text: "The block number" },
      { id: "d", text: "The timestamp" },
      { id: "e", text: "The locking script (scriptPubKey)" }
    ],
    correct: ["a"],
    explanation: "In Bitcoin's Segregated Witness (SegWit) upgrade, the signature and script data (known as the 'witness data' or the unlocking script / scriptSig) are segregated (moved outside) of the traditional transaction data structure into a separate witness field."
  },
  {
    id: 9,
    type: "single",
    question: "How can an attacker exploit non-SegWit compatible transactions?",
    options: [
      { id: "a", text: "By guessing the private key of the sender through cryptographic malleability." },
      { id: "b", text: "The attacker manipulates the transaction such that it remains valid and essentially the same while only the TxID is changed; the false transaction is then included in the blockchain and the attacker can claim that the original transaction was never included and demand a refund of the BTC, thus getting the same amount of bitcoin twice." },
      { id: "c", text: "By increasing the miner fee of a pending transaction to double-spend the outputs directly." },
      { id: "d", text: "By modifying the recipient address directly in the signature while keeping the original TxID intact." }
    ],
    correct: ["b"],
    explanation: "Transaction malleability allows modifying minor elements of the unlocking signature without invalidating the transaction itself. This alters the calculated TxID before block inclusion, allowing an unprincipled user or relay node to trick off-chain systems into believing an unconfirmed payment failed."
  }
];
