// Ethereum  basics (accounts

const quizData_11 = [
  {
    id: 1,
    type: "multiple",
    question: "What are the two dypes of Ethereum Accounts?",
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
    type: "What is not a difference between Contract Accounts and EOAs?",
    question: "Single",
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
  }  
    
  ];
