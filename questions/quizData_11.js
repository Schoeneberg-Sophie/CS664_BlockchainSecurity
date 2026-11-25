// Ethereum  basics (accounts, transactions, account types, and basics)

const quizData_11 = [
  {
    id: 1,
    type: "multiple",
    question: "What are the two types of Ethereum Accounts?",
    options: [
      { id: "a", text: "An open account." },
      { id: "b", text: "Externally Owned Accounts (EOA)." },
      { id: "c", text: "Secret Accounts." },
      { id: "d", text: "Contract Accounts" }
    ],
    correct: ["b", "d"],
    explanation:
      "An externally owned account is a Ethereum address that is controlled by a user with a private key and has no code associated. A contract account (also named smart contract) is an account that is controlled by contract code."
  },
  {
    id: 2,
    type: "Single",
    question: "What is not a difference between Contract Accounts and EOAs?",
    options: [
      {id: "a", text: "The creation of a contract account costs money, while an EOAs does not."},
      {id: "b", text: "A transaction from a contract account can only be sent in response to a receiving transaction."},
      {id: "c", text: "A contract account publishes his secret spend key to allow users to initiate transactions, while an EOA does not."},
      {id: "d", text: "An EOA has no code associated with its account, while a contract account does."}
      ],
    correct: ["c"],
    explanation: "Both account types always hide their secret spend keys to not allow other users to spend the ETH, howver for an EOA, the private view key can be published. A contract account does not have a public key and instead uses code. "
  },
  {
    id: 3,
    type: "multiple",
    question: "What are not fields in an Ethereum account?",
    options: [
      {id: "a", text: "Unspent ETH"},
      {id: "b", text: "Nonce"},
      {id: "c", text: "Balance"},
      {id: "d", text: "Merkle-Patricia-Trie"},
      {id: "e", text: "CodeHash"},
      {id: "f", text: "StorageHash"}
      ],
    correct: ["a", "d"],
    explanation: "Unspent ETH are not recorded as the balance already records how many ETH a user has.The Merkle-Patricia-Trie is also not part of an account but rather of the Ethereum blockchain. The StorageHash does, however, save the root hash of the users own storage trie.   "
  },  
  {
    id: 4,
    type: "single",
    question: "True or False: Just like in Monero, an Ethereum User also has both a private view and spend key,as well as a public view and spend key.",
    options: [
      {id: "a", text: "True"},
      {id: "b", text: "False"}
      ],
    correct: ["b"],
    explanation: "An Ethereum user has a singel public key and a single private like like in Bitcoin. "
  },
  {
    id: 5, 
    type: "single",
    question: "In a contract account, how is code executed?",
    options: [
      {id: "a", text: "Via the Ethereum Network"},
      {id: "b", text: "Via specially made nodes"},
      {id: "c", text: "Via the Ethereum Virtual Machine (EVM)"},
      {id: "d", text: "Via miners"}
      ],
    correct: ["c"],
    explanation: "Code is executed on the Ethereum Virtual Machine."
  },
  {
    id: 6,
    type: "mutliple",
    question: "Compared to Bitcoin what are some advantages of Ethereum?",
    options: [
      {id: "a", text: "It is Turing-complete."},
      {id: "b", text: "It provides more anonymity."},
      {id: "c", text: "It allows ETH to be in another state other than spent or unspent."},
      {id: "d", text: "It allows finer control over the amount of ETH withdrawn."},
      {id: "e", text: "It has less users, thus its easier to mine."}
      ],
    correct: ["a", "c", "d"],
    explanation: "Ethereum allows more mathematical operators, such as loops, than Bitocin. In addition, It allows the users more freedom in choosing how many ETH to spent, compared to Bitcoins all-or-nothing approach. I Bitcoin, UTXO are either spent or unspent, which is not the case for ETH."
  },
  {
    id: 7,
    type: "multiple",
    question: "The Ethereum system is a finite state machine (FSM). What does this mean?",    
    options: [
      {id: "a", text: "Each code can only be executed once."},
      {id: "b", text: "The state can only change accoridng to pre-established rules."},
      {id: "c", text: "The machine can only be in exactly one state at a time."},
      {id: "d", text: "Finite State Machines are explicitly created to be executed only once."},
      {id: "e", text: "Each state can be reversed given a set of rules."}
      ],
    correct: ["b", "c"],
    explanation: "The Finite State Machine in Ethereum is triggered when new transactions are created and the account balance changes. The FSM can only be in exactly one state at a time. "
  },
  {
    id: 8,
    type: "single",
    question: "In Ethereum a state (of a Finite State Machine) is made up of...",
    options: [
      {id: "a", text: "Public Keys"},
      {id: "b", text: "Transactions"},
      {id: "c", text: "Accounts"},
      {id: "d", text: "Blocks of the Ethereum Blockchain."}
      ],
    correct: ["c"],
    explanation: "Each account has its own state in Ethereum, A transition into another set is induced by a set of transactions."
  },
  {
    id: 9,
    type: "single",
    question: "How do validators select which transaction to include into the Ethereum blockchain?",
    options: [
      {id: "a", text: "Based on the highest gas fee."},
      {id: "b", text: "Based on the highest transaction fee."},
      {id: "c", text: "Based on the block reward."},
      {id: "d", text: "All of the above."}
      ],
    correct: ["a"],
    explanation: "In Ethereum, validators include transaction based on the highest gas fee."
  },
  {
    id: 18,
    type: "multiple",
    question: "In Ethereum, what does a gas fee include?",
    options: [
      {id: "a", text: "The base fee."},
      {id: "b", text: "The priority tip paid to the validators"},
      {id: "c", text: "A percetnage fee based on the amount of ETH sent."},
      {id: "d", text: "The gas fee based upon the computational power used."}
      ],
    correct: ["a", "b", "d"],
    explanation: "The total gas fee is made up of the base fee, which is the base rate of the transaction, as well as a gas fee, based on the amount of computational power the transaction used. The priority tip is included as an incentive for validators to include the transaction into the next blockchain."
  },
  {
    id: 10,
    type: "single",
    question: "Validators in Ethereum provide a ...",
    options: [
      {id: "a", text: "A proof of work."},
      {id: "b", text: "A proof of stake."},
      {id: "c", text: "The correct solution to the computational puzzle."}
      ],
    correct: ["b"],
    explanation: "Users lock ETH into the protocol ('stake') to proof their honest interest in the the transaction and act as validators. Users can lose these tokens if they behave maliciously."
  },
  {
    id: 11,
    type: "single",
    question: "Unlike in bitcoin, the history of the whole blockchain...",
    options: [
      {id: "a", text: "Is not included in each block."},
      {id: "b", text: "Is also saved in a Merkle Tree in each block."},
      {id: "c", text: "Is copied as the most recent version in each block."},
      {id: "d", text: "Is saved in specialised nodes."}
      ],
    correct: ["c"],
    explanation: "In Ethereum, a copy of the most recent state of the blockchain is copied and stored in a Merkle-Patricia-Trie."
  },
  {
    id: 12,
    type: "multiple",
    question: "A Merkle-Patricia-Trie...",
    options: [
      {id: "a", text: "Has a fixed tree depth."},
      {id: "b", text: "Allows for individual data to be changed or deleted while leaving other branches unchanged."},
      {id: "c", text: "Is rebuilt per block."},
      {id: "d", text: "Is designed for key-based searches"}
      ],
    correct: ["b", "d"],
    explanation: ""
  },
  {
    id: 13,
    type: "single",
    question: "In Ethereum, why is a special adrdress used?",
    options: [
      {id: "a", text: "For storing ETH shared between accounts."},
      {id: "b", text: "For intiating a contract account"},
      {id: "c", text: "It acts as a seed node for contacting the Ethereum Network."},
      {id: "d", text: "Special Addresses are accounts made to store the base fee of each published transaction."}
      ],
    correct: ["b"],
    explanation: "Only an EOA can send ETH to a Special Address to create a contract account."
  },
  {
    id: 14,
    type: "single",
    question: "True or false: EOAs can sed ETH to a contract account, but the reverse is not true.",
    options: [
      {id: "a", text: "True"},
      {id: "b", text: "False"}
      ],
    correct: ["b"],
    Explanation: "A contract account can send ETH to an EOA, however, it can never initiate this transaction."
  },
  {
    id: 15,
    type: "single",
    question: "What is the purpose of a nonce in Ethereum?",
    options: [
      {id: "a", text: "It counts the number of transactions for each user."},
      {id: "b", text: "It acts as a random scalar for hiding the transaction information."},
      {id: "c", text: "It can be used by miners to solve the computational puzzle."},
      {id: "d", text: "It is only used for contract accounts "}
      ],
    correct: ["a"],
    explanation: "In Ethereum, the nonce is used to count how many trasnaction were recorded by each sender."
  },
  {
    id: 16,
    type: "single",
    question: "In Ethereum's TRansaction fields, when is the field 'init' used (init = 'true')?",
    options: [
      {id: "a", text: "To send ETH."},
      {id: "b", text: "To send ETH to contract accounts only."},
      {id: "c", text: "To contact a special adress to create a new contract account."},
      {id: "d", text: "To add a new condition to a contract account."}
      ],
    correct: ["c"],
    explanation: "The 'Init' field remains empty unless a user contacts a special adress to create a new contract account, in which case 'init' = True. In addition, the specific code is entered into the 'Data' field."
  },
  {
    id: 17,
    type: "single",
    question: "True or false: The StorageHash is only used for EOAs.",
    options: [
      {id: "a", text: "True"},
      {id: "b", text: "False"}
      ],
    correct: ["b"],
    explanation: "StorageHashes are not used in EOAs and are only used in contract accounts"
  } 
    ];
