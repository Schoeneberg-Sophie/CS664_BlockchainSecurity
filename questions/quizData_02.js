// Blockchain Security - Lecture 02 quiz
// type: "single" = one correct answer, "multiple" = several correct answers
const quizData_02 = [
  {
    id: 1,
    type: "single",
    question: "What do miners have to provide to add a block to the blockchain?",
    options: [
      { id: "a", text: "Proof that they own the blockchain" },
      { id: "b", text: "Proof of work" },
      { id: "c", text: "Proof that their own transaction is part of the block" }
    ],
    correct: ["b"],
    explanation:
      "A miner must solve a computational puzzle (find a block header whose hash fulfills the difficulty pattern). This solution is the proof of work. It shows that real computing effort was spent, which makes changing the blockchain very expensive."
  },
  {
    id: 2,
    type: "single",
    question: "What are the consequences when block B and B' are mined at the same time?",
    options: [
      { id: "a", text: "No nodes are notified until the network decides on the valid blockchain" },
      { id: "b", text: "Every node receives both blocks as valid blocks at the same time" },
      { id: "c", text: "Some nodes receive B as a valid block, others receive B'" }
    ],
    correct: ["c"],
    explanation:
      "Blocks spread through the network with a delay. Nodes close to the miner of B see B first, nodes close to the miner of B' see B' first, and each node keeps the first valid block it sees. This creates a temporary split that is resolved when the next block is built on one of the two (the longest chain wins)."
  },
  {
    id: 3,
    type: "single",
    question: "What are orphan blocks?",
    options: [
      { id: "a", text: "Blocks not yet added to the blockchain" },
      { id: "b", text: "Blocks that contain invalid transactions" },
      { id: "c", text: "Blocks that were added to the blockchain but later discarded, because the nodes agreed on another block" }
    ],
    correct: ["c"],
    explanation:
      "When two blocks are mined at the same time, one of them ends up on the chain that the network builds on. The other block is discarded and becomes an orphan. Its transactions go back to the waiting area (mempool) unless they are already in the winning block."
  },
  {
    id: 4,
    type: "single",
    question: "What exactly is a fork?",
    options: [
      { id: "a", text: "Blocks being valid in one software version, but not in the other" },
      { id: "b", text: "A miner splitting its computing power across several blocks" },
      { id: "c", text: "A transaction that spends the same TxOut twice" }
    ],
    correct: ["a"],
    explanation:
      "A fork happens when different software versions follow different rules, so a block can be valid for one group of nodes and invalid for another. The network can then split into two chains. A transaction that spends the same TxOut twice is a double-spend, not a fork."
  },
  {
    id: 5,
    type: "single",
    question: "What is the partial inversion problem?",
    options: [
      { id: "a", text: "Given a message x, compute its hash value H(x)" },
      { id: "b", text: "Given some pattern ℓ, find a message x such that H(x) matches the pattern" },
      { id: "c", text: "Given a hash value y, compute the original message x for exactly that y" }
    ],
    correct: ["b"],
    explanation:
      "Only part of the hash (for example its first bits) has to match the pattern, not the whole hash. The only known way to solve it is trying many inputs x. This is exactly the puzzle miners solve."
  },
  {
    id: 6,
    type: "single",
    question: "When mining a blockchain, what does the pattern ℓ describe?",
    options: [
      { id: "a", text: "The leading bits of the hash value H(x) have to be zero" },
      { id: "b", text: "The number of transactions that fit into one block" },
      { id: "c", text: "The length of the nonce in bits" }
    ],
    correct: ["a"],
    explanation:
      "The miner needs a hash of the block header that starts with enough zero bits. The more leading zeros are required, the harder the puzzle."
  },
  {
    id: 7,
    type: "single",
    question: "What components are necessary when solving the computational puzzle in mining?",
    options: [
      { id: "a", text: "The block header" },
      { id: "b", text: "The block header plus all transactions" },
      { id: "c", text: "Only certain parts of the block header, such as the nonce" }
    ],
    correct: ["a"],
    explanation:
      "The miner hashes the whole block header. The transactions are included indirectly through the Merkle root, which is part of the header. Parts of the header such as the nonce are changed by the miner, but the hash is always computed over the complete header."
  },
  {
    id: 8,
    type: "multiple",
    question: "When solving the computational puzzle in mining, which components can be adjusted by the miner?",
    options: [
      { id: "a", text: "The Merkle root" },
      { id: "b", text: "The timestamp" },
      { id: "c", text: "The difficulty target" },
      { id: "d", text: "The nonce" },
      { id: "e", text: "All of the above" }
    ],
    correct: ["a", "b", "d"],
    explanation:
      "The miner can change the nonce, the timestamp (within allowed limits) and the Merkle root (by choosing or changing transactions) to get new hash values. The difficulty target is set by the network and cannot be changed by the miner, so 'all of the above' is wrong."
  },
  {
    id: 9,
    type: "single",
    question: "What is a coinbase transaction?",
    options: [
      { id: "a", text: "A transaction that exchanges bitcoins for normal money at an exchange" },
      { id: "b", text: "A transaction that moves coins from one user's wallet to another user's wallet" },
      { id: "c", text: "A special transaction that compensates successful miners for their efforts" }
    ],
    correct: ["c"],
    explanation:
      "It is the first transaction of every block. It has no normal TxIn, because it creates new coins (block reward) and collects the transaction fees of the block for the miner."
  },
  {
    id: 10,
    type: "multiple",
    question: "What is the compensation comprised of that the successful miner gets for solving the computational puzzle?",
    options: [
      { id: "a", text: "The transaction fees" },
      { id: "b", text: "A payment from the nodes that validate the block" },
      { id: "c", text: "The block reward" }
    ],
    correct: ["a", "c"],
    explanation:
      "The miner gets the newly created coins (block reward) plus the sum of all transaction fees in the block (sum of TxIns minus sum of TxOuts). Both are paid out through the coinbase transaction. Validating nodes receive no payment."
  },
  {
    id: 11,
    type: "multiple",
    question: "The more miners in a system...",
    options: [
      { id: "a", text: "the more difficult is the computational puzzle" },
      { id: "b", text: "the higher the difficulty target" },
      { id: "c", text: "the faster a puzzle gets solved" },
      { id: "d", text: "the less computational power is needed" }
    ],
    correct: ["a", "b"],
    explanation:
      "More miners means more total computing power. The network adjusts the difficulty so that a block is still found at about the same rate (about every 10 minutes in Bitcoin). So the puzzle gets harder (more leading zeros required) and puzzles are not solved faster on average. More power is needed, not less."
  },
  {
    id: 12,
    type: "multiple",
    question: "Why did mining pools form?",
    options: [
      { id: "a", text: "Because miners wanted to avoid paying transaction fees" },
      { id: "b", text: "Because successful mining is extremely unlikely for an individual miner" },
      { id: "c", text: "To increase the likelihood of getting a small share of the prize rather than none" }
    ],
    correct: ["b", "c"],
    explanation:
      "A single small miner may wait years for a block. In a pool, miners combine their power and split the reward, so each member gets small but regular payouts instead of (most likely) nothing."
  },
  {
    id: 13,
    type: "single",
    question: "What is a pool operator?",
    options: [
      { id: "a", text: "The miner with the most computing power in the network" },
      { id: "b", text: "Someone who manages a mining pool" },
      { id: "c", text: "The developer of the mining software" }
    ],
    correct: ["b"],
    explanation:
      "The pool operator organizes the pool: he coordinates the work of the members, collects their results and pays out the reward."
  },
  {
    id: 14,
    type: "single",
    question: "What are NOT tasks of a pool operator?",
    options: [
      { id: "a", text: "Distribute work among members" },
      { id: "b", text: "Collect solutions of workers" },
      { id: "c", text: "Decide which block to mine" },
      { id: "d", text: "Distribute the reward for successful mining" },
      { id: "e", text: "None of the above" }
    ],
    correct: ["e"],
    explanation:
      "All four are tasks of the operator. He decides which block candidate (which transactions) the pool works on, hands out the work, collects the solutions, and distributes the reward. So the correct answer is 'none of the above'."
  },
  {
    id: 15,
    type: "single",
    question: "True or False? To prevent members of a mining pool from cheating, the pool operator only allows nodes to join that he personally knows.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" }
    ],
    correct: ["b"],
    explanation:
      "Pools are open to anyone and the operator does not rely on personal trust. Cheating is prevented by technical means: members have to prove their work with shares (proofs of work at a lower difficulty)."
  },
  {
    id: 16,
    type: "single",
    question: "True or False? To prevent members of a mining pool from cheating, they have to submit proof of work.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" }
    ],
    correct: ["a"],
    explanation:
      "Members submit partial proofs of work (shares). This shows the operator that they really spent computing power on the pool's block, and it is also used to calculate each member's part of the reward."
  },
  {
    id: 17,
    type: "single",
    question: "How does a member of a mining pool prove that he does not cheat?",
    options: [
      { id: "a", text: "He must solve the full computational puzzle" },
      { id: "b", text: "He pays the pool operator a small fee" },
      { id: "c", text: "He shows a full proof of work at the original difficulty ℓ" },
      { id: "d", text: "He submits solutions to the puzzle at a lower difficulty (share, ℓ' < ℓ)" }
    ],
    correct: ["d"],
    explanation:
      "Solutions for the full puzzle are very rare. So members submit shares: solutions for an easier puzzle (ℓ' < ℓ). They are found often, so the operator can see how much work each member did. Once in a while, a share is also a solution for the real puzzle."
  },
  {
    id: 18,
    type: "single",
    question: "How does a member of a mining pool make sure the pool operator shares the reward?",
    options: [
      { id: "a", text: "He can withhold the solution to the puzzle" },
      { id: "b", text: "He can only detect the fraud, not prevent it" },
      { id: "c", text: "He can threaten to sabotage the mining efforts" }
    ],
    correct: ["b"],
    explanation:
      "The operator receives the reward in his own coinbase transaction, so members have to trust him. They can only notice afterwards if he does not pay them fairly. This weakness is the reason for decentralized pools such as P2Pool."
  },
  {
    id: 19,
    type: "single",
    question: "What is a share chain?",
    options: [
      { id: "a", text: "A chain of solutions to the computational puzzle at a lower difficulty target" },
      { id: "b", text: "A chain of pool operators that pass work on to each other" },
      { id: "c", text: "A chain of transactions between the members of a pool" }
    ],
    correct: ["a"],
    explanation:
      "Each share is a solution at a lower difficulty and points to the previous share, like a small blockchain inside the pool. It documents who contributed how much work and is used to decide who gets paid."
  },
  {
    id: 20,
    type: "single",
    question: "What is a P2Pool?",
    options: [
      { id: "a", text: "A decentralized mining pool without a central operator, where the payout is organized with a share chain" },
      { id: "b", text: "A mining pool in which only personally known nodes may take part" },
      { id: "c", text: "A mining pool that only mines transactions between its own members" }
    ],
    correct: ["a"],
    explanation:
      "In a P2Pool there is no operator who could cheat. The members keep a share chain together, and the coinbase transaction of a block pays all members according to their shares in this chain."
  },
  {
    id: 21,
    type: "multiple",
    question: "What is the security goal of a digital signature?",
    options: [
      { id: "a", text: "Anonymity" },
      { id: "b", text: "Pseudonymity" },
      { id: "c", text: "Authenticity" },
      { id: "d", text: "Confidentiality" },
      { id: "e", text: "Non-repudiation" },
      { id: "f", text: "Integrity" }
    ],
    correct: ["c", "e", "f"],
    explanation:
      "A signature shows who created a message (authenticity), that the message was not changed (integrity), and the signer cannot deny it later (non-repudiation). It does not hide the message (no confidentiality) and does not hide the identity (no anonymity)."
  },
  {
    id: 22,
    type: "multiple",
    question: "What are components of a digital signature scheme?",
    options: [
      { id: "a", text: "The key space K" },
      { id: "b", text: "The version v" },
      { id: "c", text: "The message space M" },
      { id: "d", text: "The signature space S" }
    ],
    correct: ["a", "c", "d"],
    explanation:
      "A scheme is defined by the key space K (pairs of secret key sk and public key pk), the message space M and the signature space S. A 'version' is not part of the definition."
  },
  {
    id: 23,
    type: "multiple",
    question: "What are the algorithms of a digital signature scheme?",
    options: [
      { id: "a", text: "Key generation" },
      { id: "b", text: "Encryption algorithm" },
      { id: "c", text: "Signature algorithm" },
      { id: "d", text: "Verification algorithm" },
      { id: "e", text: "Decryption algorithm" }
    ],
    correct: ["a", "c", "d"],
    explanation:
      "Key generation creates (pk, sk), the signature algorithm creates s = Sig(sk, m), and the verification algorithm checks Ver(pk, m, s). Encryption and decryption belong to encryption schemes, not signatures."
  },
  {
    id: 24,
    type: "single",
    question: "What does correctness of a digital signature mean?",
    options: [
      { id: "a", text: "For each message m ∈ M and each key pair (pk, sk) ∈ K it holds that: Ver(pk, m, Sig(sk, m)) = true" },
      { id: "b", text: "For each message m ∈ M and each key pair (pk, sk) ∈ K it holds that: Ver(pk, Sig(sk, m)) = true" },
      { id: "c", text: "For each message m ∈ M and each key pair (pk, sk) ∈ K it holds that: Ver(sk, m, Sig(pk, m)) = true" },
      { id: "d", text: "For each message m ∈ M and each key pair (pk, sk) ∈ K it holds that: Ver(pk, m, Sig(sk)) = true" }
    ],
    correct: ["a"],
    explanation:
      "A correctly created signature must always be accepted. Signing uses the secret key (Sig(sk, m)), verifying uses the public key and the message (Ver(pk, m, s)). The other options mix up the keys or leave out the message."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = quizData_o2;
}
