// Blockchain Security - Lecture 03 quiz
// Topics: Wallets and addresses, signatures, UTXO, transactions, Script, transaction lifecycle
// type: "single" = one correct answer, "multiple" = several correct answers
const quizData_03 = [
  // ---------------------------------------------------------------
  // Wallets, addresses and signatures
  // ---------------------------------------------------------------
  {
    id: 1,
    type: "single",
    question: "What is a wallet in Bitcoin?",
    options: [
      { id: "a", text: "Software realizing one or several Bitcoin accounts" },
      { id: "b", text: "A database in which the network stores the balance of every user" },
      { id: "c", text: "A hardware device that stores the whole blockchain" },
      { id: "d", text: "The software that miners use to solve the puzzle" }
    ],
    correct: ["a"],
    explanation:
      "A wallet is software that manages one or several Bitcoin accounts. Transactions take place between wallets."
  },
  {
    id: 2,
    type: "multiple",
    question: "What are Bitcoin addresses?",
    options: [
      { id: "a", text: "Strings that identify the Bitcoin accounts" },
      { id: "b", text: "Pseudonyms for the users" },
      { id: "c", text: "The real names of the users, registered in the network" },
      { id: "d", text: "Encrypted copies of the users' secret keys" }
    ],
    correct: ["a", "b"],
    explanation:
      "An address is a string that identifies an account and works as a pseudonym for its user. It does not contain a real name and it does not reveal the secret key."
  },
  {
    id: 3,
    type: "multiple",
    question: "What does a transaction essentially specify?",
    options: [
      { id: "a", text: "The number of bitcoins, e.g., 0.03 BTC" },
      { id: "b", text: "Sender and recipient, uniquely characterized by Bitcoin addresses" },
      { id: "c", text: "The secret key of the sender" },
      { id: "d", text: "The miner who must include it in a block" }
    ],
    correct: ["a", "b"],
    explanation:
      "A transaction is a piece of data with the amount and the sender and recipient addresses. This information is broadcast to the P2P network. The secret key is never part of it, and the sender cannot choose the miner."
  },
  {
    id: 4,
    type: "single",
    question: "Why must it be possible to check the authenticity of a transaction?",
    options: [
      { id: "a", text: "To make transactions faster" },
      { id: "b", text: "Otherwise anybody could post any transaction and no transaction could be trusted" },
      { id: "c", text: "To lower the transaction fees" },
      { id: "d", text: "To hide the amount that is sent" }
    ],
    correct: ["b"],
    explanation:
      "Without a check, an attacker could pretend to be address A and send A's coins to himself (as in the slide with 300 BTC). The standard cryptographic solution is digital signatures."
  },
  {
    id: 5,
    type: "single",
    question:
      "An attacker with address A' broadcasts the transaction 'A sends 300 BTC to A''. Why does this fail in Bitcoin?",
    options: [
      { id: "a", text: "Because the network does not accept transactions of 300 BTC or more" },
      { id: "b", text: "Because the attacker has to pay a fee that is higher than 300 BTC" },
      { id: "c", text: "Because the attacker cannot create a valid signature for A without A's secret key" },
      { id: "d", text: "Because only miners are allowed to create transactions" }
    ],
    correct: ["c"],
    explanation:
      "Only the owner of the secret key sk of A can create a signature s such that Ver(pk, Tx, s) = true. The network rejects every transaction without a valid signature."
  },
  {
    id: 6,
    type: "single",
    question: "How are transactions signed and checked in Bitcoin?",
    options: [
      { id: "a", text: "The wallet signs Tx with the public key pk, and the network checks the signature with the secret key sk" },
      { id: "b", text: "The wallet signs Tx with its secret key sk, and the network checks the signature s with the public key pk" },
      { id: "c", text: "The network signs Tx, and the wallet checks the signature" },
      { id: "d", text: "Wallet and network use the same shared secret key" }
    ],
    correct: ["b"],
    explanation:
      "The wallet computes s = Sig(sk, Tx) and sends (Tx, s). The network checks Ver(pk, Tx, s) = true. The secret key never leaves the wallet, because only the public key is needed for checking."
  },
  {
    id: 7,
    type: "single",
    question: "A digital signature links a transaction to a verification key pk. What links pk to the Bitcoin address?",
    options: [
      { id: "a", text: "The address is (essentially) derived from the public key" },
      { id: "b", text: "A central register that stores which pk belongs to which address" },
      { id: "c", text: "The miner who includes the transaction decides this" },
      { id: "d", text: "The secret key is stored inside the address" }
    ],
    correct: ["a"],
    explanation:
      "The lecture's solution is that the Bitcoin address is essentially the public key. More precisely, it contains a hash of the public key (type + doubly hashed public key + checksum). No central register is needed."
  },
  {
    id: 8,
    type: "single",
    question: "What is the general format of a Bitcoin address?",
    options: [
      { id: "a", text: "<type> || <string of alphanumeric Latin characters and digits>" },
      { id: "b", text: "<public key> || <secret key>" },
      { id: "c", text: "<checksum> || <timestamp>" },
      { id: "d", text: "<version> || <nonce>" }
    ],
    correct: ["a"],
    explanation:
      "An address is a type marker followed by a string. The string has a length of 26-33 characters (as on the slide) and is base58 encoded."
  },
  {
    id: 9,
    type: "multiple",
    question: "Which statements about the string of a Bitcoin address are correct?",
    options: [
      { id: "a", text: "It has a length of 26-33 characters" },
      { id: "b", text: "It is base58 encoded" },
      { id: "c", text: "It can contain the symbols 0, O and I" },
      { id: "d", text: "It always has exactly 20 characters" }
    ],
    correct: ["a", "b"],
    explanation:
      "Base58 leaves out symbols such as 0, O and I, so that one symbol cannot be mistaken for another when an address is read or typed."
  },
  {
    id: 10,
    type: "single",
    question: "Which address type starts with the number 1?",
    options: [
      { id: "a", text: "P2SH (Pay 2 Script Hash)" },
      { id: "b", text: "P2PKH (Pay 2 Public Key Hash)" },
      { id: "c", text: "SegWit" },
      { id: "d", text: "Taproot" }
    ],
    correct: ["b"],
    explanation:
      "P2PKH addresses start with 1. It is the traditional address format that Bitcoin started with, and the lecture focuses on it."
  },
  {
    id: 11,
    type: "single",
    question: "Which address type starts with the number 3?",
    options: [
      { id: "a", text: "P2PKH" },
      { id: "b", text: "P2SH (Pay 2 Script Hash)" },
      { id: "c", text: "SegWit" },
      { id: "d", text: "Taproot" }
    ],
    correct: ["b"],
    explanation:
      "P2SH addresses start with 3. They accept transactions with arbitrary Bitcoin scripts."
  },
  {
    id: 12,
    type: "single",
    question: "Which prefix does the slide list for Taproot-type addresses?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "3" },
      { id: "c", text: "bc1p" },
      { id: "d", text: "bc2" }
    ],
    correct: ["c"],
    explanation:
      "SegWit addresses start with bc1 or bc1p, and Taproot addresses start with bc1p."
  },
  {
    id: 13,
    type: "single",
    question: "What does P2PKH stand for?",
    options: [
      { id: "a", text: "Pay to Public Key Hash" },
      { id: "b", text: "Peer to Peer Key Hash" },
      { id: "c", text: "Proof to Public Key Hash" },
      { id: "d", text: "Pay to Private Key Holder" }
    ],
    correct: ["a"],
    explanation:
      "The address contains the hash of the public key, not the public key itself. That is why it is called Pay 2 Public Key Hash."
  },
  {
    id: 14,
    type: "multiple",
    question: "What are the three components of a P2PKH Bitcoin address?",
    options: [
      { id: "a", text: "The type of the address (here '1')" },
      { id: "b", text: "The doubly hashed public key" },
      { id: "c", text: "A checksum" },
      { id: "d", text: "The secret key" }
    ],
    correct: ["a", "b", "c"],
    explanation:
      "Address = type (1 byte) + doubly hashed public key (20 bytes) + checksum (4 bytes). The whole block is then written in base58."
  },
  {
    id: 15,
    type: "single",
    question: "How is the 'doubly hashed public key' in an address computed?",
    options: [
      { id: "a", text: "SHA-256 applied to the public key, then SHA-256 again" },
      { id: "b", text: "SHA-256 applied to the public key, then RIPEMD-160 applied to the result" },
      { id: "c", text: "RIPEMD-160 applied to the public key, then SHA-1 applied to the result" },
      { id: "d", text: "The public key is hashed with SHA-256 and then encrypted with the secret key" }
    ],
    correct: ["b"],
    explanation:
      "Two different hash functions are applied one after the other: public key, then SHA-256, then RIPEMD-160. The result has 20 bytes."
  },
  {
    id: 16,
    type: "single",
    question: "How large are the components of a Bitcoin address (before base58 encoding)?",
    options: [
      { id: "a", text: "Type: 1 byte, doubly hashed public key: 20 bytes, checksum: 4 bytes (25 bytes in total)" },
      { id: "b", text: "Type: 4 bytes, doubly hashed public key: 20 bytes, checksum: 1 byte (25 bytes in total)" },
      { id: "c", text: "Type: 1 byte, doubly hashed public key: 32 bytes, checksum: 4 bytes (37 bytes in total)" },
      { id: "d", text: "Type: 1 byte, doubly hashed public key: 20 bytes, checksum: 20 bytes (41 bytes in total)" }
    ],
    correct: ["a"],
    explanation:
      "1 + 20 + 4 = 25 bytes. SHA-256 gives 32 bytes, but RIPEMD-160 shortens it to 20 bytes (160 bits)."
  },
  {
    id: 17,
    type: "single",
    question: "What is the purpose of the checksum in a Bitcoin address?",
    options: [
      { id: "a", text: "It encrypts the address" },
      { id: "b", text: "It is a small safety code to catch typos" },
      { id: "c", text: "It proves that the owner has enough coins" },
      { id: "d", text: "It contains the signature of the transaction" }
    ],
    correct: ["b"],
    explanation:
      "If someone copies an address and mistypes a character, the checksum no longer matches, and the wallet can reject the address instead of sending coins to a wrong address."
  },
  {
    id: 18,
    type: "single",
    question: "How is the checksum of a Bitcoin address created?",
    options: [
      { id: "a", text: "SHA-256 is applied twice to the 21 bytes (type + doubly hashed public key), and the first 4 bytes are kept" },
      { id: "b", text: "SHA-256 and RIPEMD-160 are applied to the public key, and the last 4 bytes are kept" },
      { id: "c", text: "SHA-256 is applied once to the public key, and the first 20 bytes are kept" },
      { id: "d", text: "The public key is signed with the secret key, and the signature is shortened to 4 bytes" }
    ],
    correct: ["a"],
    explanation:
      "On the slide, the type byte and the 20-byte hash (the bracketed part) go through SHA-256 twice. The first 4 bytes of the result are the checksum, which is appended at the end."
  },
  {
    id: 19,
    type: "single",
    question: "What is the difference between the 'doubly hashed public key' and the checksum computation?",
    options: [
      { id: "a", text: "The doubly hashed public key uses two different hash functions (SHA-256, then RIPEMD-160); the checksum uses one hash function (SHA-256) applied twice" },
      { id: "b", text: "Both use exactly the same two functions" },
      { id: "c", text: "The checksum uses RIPEMD-160 twice, the public key hash uses SHA-256 twice" },
      { id: "d", text: "There is no difference, they are the same value" }
    ],
    correct: ["a"],
    explanation:
      "Both involve 'two' hash steps, but they are different: public key path = SHA-256 then RIPEMD-160. Checksum path = SHA-256 then SHA-256 on the result, of which only 4 bytes are kept."
  },
  {
    id: 20,
    type: "single",
    question: "How is a Bitcoin address checked for typos?",
    options: [
      { id: "a", text: "The checksum is recomputed from the first 21 bytes and compared with the last 4 bytes" },
      { id: "b", text: "The public key is recomputed from the address and compared with the secret key" },
      { id: "c", text: "The address is sent to a central server that approves it" },
      { id: "d", text: "A miner checks that the address has received coins before" }
    ],
    correct: ["a"],
    explanation:
      "If the recomputed checksum equals the last 4 bytes, there is almost certainly no typo and the address is valid."
  },
  {
    id: 21,
    type: "single",
    question: "Which bytes are written in base58 to form the address string?",
    options: [
      { id: "a", text: "Only the doubly hashed public key" },
      { id: "b", text: "Type, doubly hashed public key and checksum (25 bytes)" },
      { id: "c", text: "The public key and the signature" },
      { id: "d", text: "Only the checksum" }
    ],
    correct: ["b"],
    explanation:
      "The red frame on the slide covers type, doubly hashed public key and checksum. Base58 turns these 25 bytes into the familiar address string."
  },

  // ---------------------------------------------------------------
  // UTXO and transaction structure
  // ---------------------------------------------------------------
  {
    id: 22,
    type: "single",
    question: "What does UTXO stand for?",
    options: [
      { id: "a", text: "Unspent Transaction Output" },
      { id: "b", text: "Unique Transaction Index Object" },
      { id: "c", text: "Unconfirmed Transfer Operation" },
      { id: "d", text: "Unlocked Transaction Order" }
    ],
    correct: ["a"],
    explanation:
      "A UTXO is a transaction output that has not been used as input of another transaction yet, so it can still be spent."
  },
  {
    id: 23,
    type: "single",
    question: "Does Bitcoin store accounts or balances directly?",
    options: [
      { id: "a", text: "Yes, every account has a balance that is updated after each transaction" },
      { id: "b", text: "No, it (essentially) keeps track of bitcoins that can be spent (UTXOs)" },
      { id: "c", text: "Yes, but only for miners" },
      { id: "d", text: "No, balances are stored by the wallets and the network does not know them" }
    ],
    correct: ["b"],
    explanation:
      "There are no accounts with balances in the blockchain. What a user 'owns' are the UTXOs that his keys can unlock. A wallet adds up their values and displays the sum as the balance."
  },
  {
    id: 24,
    type: "single",
    question: "How does the lecture describe (in simplified form) a transaction from wallet W to wallet W'?",
    options: [
      { id: "a", text: "The UTXOs of W are spent and removed from the system, and W' becomes the owner of a new UTXO" },
      { id: "b", text: "The balance of W is reduced and the balance of W' is increased" },
      { id: "c", text: "The UTXOs of W are copied to W'" },
      { id: "d", text: "The UTXOs of W stay in the system and are marked with the name of W'" }
    ],
    correct: ["a"],
    explanation:
      "UTXO O of W is spent and no longer available. Only the new UTXO O' (owned by W') exists afterwards."
  },
  {
    id: 25,
    type: "multiple",
    question: "Which parts does the data structure of a transaction contain?",
    options: [
      { id: "a", text: "Version" },
      { id: "b", text: "One or several TxIns" },
      { id: "c", text: "One or several TxOuts" },
      { id: "d", text: "Timestamp/block number" },
      { id: "e", text: "The secret key of the sender" }
    ],
    correct: ["a", "b", "c", "d"],
    explanation:
      "A transaction consists of four parameters: version, TxIns, TxOuts and timestamp/block number. The secret key is never part of a transaction."
  },
  {
    id: 26,
    type: "single",
    question: "What do TxIns and TxOuts represent?",
    options: [
      { id: "a", text: "TxIns are the sources (inputs) and TxOuts are the destinations (outputs) of the transferred bitcoins" },
      { id: "b", text: "TxIns are the destinations and TxOuts are the sources" },
      { id: "c", text: "TxIns are the fees and TxOuts are the rewards" },
      { id: "d", text: "TxIns are the signatures and TxOuts are the public keys" }
    ],
    correct: ["a"],
    explanation:
      "A transaction transfers bitcoins from sources (TxIns) to destinations (TxOuts). In short: a transaction takes existing UTXOs and hands them over to other users."
  },
  {
    id: 27,
    type: "single",
    question: "What do TxIns refer to?",
    options: [
      { id: "a", text: "To TxOuts of previous transactions" },
      { id: "b", text: "To TxOuts of the same transaction" },
      { id: "c", text: "To TxIns of previous transactions" },
      { id: "d", text: "To the next block in the blockchain" }
    ],
    correct: ["a"],
    explanation:
      "A TxIn can only point to an output that already exists in an earlier transaction. It cannot point to something that has not been created yet."
  },
  {
    id: 28,
    type: "single",
    question: "When is a TxOut called spent, and which TxOuts are UTXOs?",
    options: [
      { id: "a", text: "A TxOut is spent once it is used as TxIn of another transaction; UTXOs are the unspent TxOuts" },
      { id: "b", text: "A TxOut is spent as soon as it is created; UTXOs are the TxOuts of the latest block" },
      { id: "c", text: "A TxOut is spent when its owner signs a message; UTXOs are the TxOuts with a fee" },
      { id: "d", text: "A TxOut is spent after 10 minutes; UTXOs are the TxOuts of miners" }
    ],
    correct: ["a"],
    explanation:
      "Every coin is first a TxOut. It becomes a TxIn only at the moment someone spends it. UTXO = unspent TxOut."
  },
  {
    id: 29,
    type: "multiple",
    question: "What does a TxOut contain?",
    options: [
      { id: "a", text: "The number of bitcoins" },
      { id: "b", text: "A locking script" },
      { id: "c", text: "An unlocking script" },
      { id: "d", text: "A pointer to a previous transaction" }
    ],
    correct: ["a", "b"],
    explanation:
      "A TxOut has the amount and the locking script that sets the rules for spending it later. Pointer and unlocking script belong to the TxIn."
  },
  {
    id: 30,
    type: "multiple",
    question: "What does a TxIn contain?",
    options: [
      { id: "a", text: "A pointer to a transaction" },
      { id: "b", text: "The index number of the UTXO to be spent" },
      { id: "c", text: "An unlocking script" },
      { id: "d", text: "The number of bitcoins" }
    ],
    correct: ["a", "b", "c"],
    explanation:
      "A TxIn does not hold coins. It is a reference to an old TxOut (pointer + index) together with the proof that the spender may use it (unlocking script). The amount is the one stored in the referenced TxOut."
  },
  {
    id: 31,
    type: "single",
    question: "Why does a TxIn need an index number besides the pointer to a transaction?",
    options: [
      { id: "a", text: "Because a transaction can have several TxOuts, and the index says which one is spent" },
      { id: "b", text: "Because the index contains the fee" },
      { id: "c", text: "Because the index is the signature" },
      { id: "d", text: "Because the index states in which block the transaction is" }
    ],
    correct: ["a"],
    explanation:
      "A transaction can have TxOut 0, TxOut 1, TxOut 2, and so on. The pointer finds the transaction, and the index selects the exact output."
  },
  {
    id: 32,
    type: "single",
    question: "Can a UTXO be divided and spent partially?",
    options: [
      { id: "a", text: "Yes, any part of a UTXO can be spent" },
      { id: "b", text: "No, a UTXO cannot be divided and has to be spent fully" },
      { id: "c", text: "Only if the fee is zero" },
      { id: "d", text: "Only if the UTXO is older than one block" }
    ],
    correct: ["b"],
    explanation:
      "A TxOut is one single record. It is like a banknote: you cannot tear it in half. You hand over the whole note and receive change."
  },
  {
    id: 33,
    type: "single",
    question: "Which condition must hold for the amounts in a transaction?",
    options: [
      { id: "a", text: "Sum of TxIns ≥ sum of TxOuts" },
      { id: "b", text: "Sum of TxIns ≤ sum of TxOuts" },
      { id: "c", text: "Sum of TxIns = sum of TxOuts, always" },
      { id: "d", text: "Sum of TxIns = 2 × sum of TxOuts" }
    ],
    correct: ["a"],
    explanation:
      "Coins cannot be created from nothing. Since UTXOs must be spent fully, the inputs are at least as large as the outputs. The difference is the fee."
  },
  {
    id: 34,
    type: "single",
    question: "When does a transaction need a change output?",
    options: [
      { id: "a", text: "When the value of the selected UTXOs is larger than the amount to be paid (plus fee)" },
      { id: "b", text: "Always, even if the inputs equal the payment" },
      { id: "c", text: "Only when the recipient asks for it" },
      { id: "d", text: "When the fee is zero" }
    ],
    correct: ["a"],
    explanation:
      "Because a UTXO cannot be split, the rest goes back to the sender in a new TxOut (change). Its locking script can only be unlocked by the sender."
  },
  {
    id: 35,
    type: "single",
    question: "How is the transaction fee calculated?",
    options: [
      { id: "a", text: "Fee = sum of TxIns − sum of TxOuts" },
      { id: "b", text: "Fee = sum of TxOuts − sum of TxIns" },
      { id: "c", text: "Fee = sum of TxIns + sum of TxOuts" },
      { id: "d", text: "Fee = number of TxIns × number of TxOuts" }
    ],
    correct: ["a"],
    explanation:
      "The fee is whatever is left over between inputs and outputs. It is not written anywhere as a separate value."
  },
  {
    id: 36,
    type: "multiple",
    question: "Which statements about the transaction fee are correct?",
    options: [
      { id: "a", text: "It is collected by the miner" },
      { id: "b", text: "It can be zero" },
      { id: "c", text: "It is stored as a separate TxOut in the transaction" },
      { id: "d", text: "It is always paid to the recipient" }
    ],
    correct: ["a", "b"],
    explanation:
      "The fee is not a separate TxOut. It results from the difference between inputs and outputs and is collected by the miner. A fee of zero is allowed by the rules on the slide."
  },
  {
    id: 37,
    type: "single",
    question:
      "In the slide example, Transaction 3 uses two inputs of 5 BTC each and creates outputs of 6 BTC (recipient) and 3 BTC (change). What is the fee?",
    options: [
      { id: "a", text: "0 BTC" },
      { id: "b", text: "1 BTC" },
      { id: "c", text: "3 BTC" },
      { id: "d", text: "9 BTC" }
    ],
    correct: ["b"],
    explanation:
      "Inputs: 5 + 5 = 10 BTC. Outputs: 6 + 3 = 9 BTC. Fee = 10 − 9 = 1 BTC."
  },
  {
    id: 38,
    type: "single",
    question:
      "Alice spends two UTXOs of 4 BTC and 3 BTC to pay Bob 6 BTC and wants to leave a fee of 0.1 BTC. How large is her change output?",
    options: [
      { id: "a", text: "0.1 BTC" },
      { id: "b", text: "0.9 BTC" },
      { id: "c", text: "1 BTC" },
      { id: "d", text: "7 BTC" }
    ],
    correct: ["b"],
    explanation:
      "Inputs: 4 + 3 = 7 BTC. Outputs: 6 BTC (Bob) + change. Fee 0.1 BTC means that change = 7 − 6 − 0.1 = 0.9 BTC."
  },
  {
    id: 39,
    type: "single",
    question:
      "You owe 12 BTC and have UTXOs of 10 BTC and 5 BTC. You create a transaction with both UTXOs as inputs and only one output of 12 BTC for the recipient (no change output). What happens?",
    options: [
      { id: "a", text: "The network rejects the transaction, because the change is missing" },
      { id: "b", text: "The remaining 3 BTC automatically return to you" },
      { id: "c", text: "The remaining 3 BTC become the transaction fee and are collected by the miner" },
      { id: "d", text: "The 3 BTC are destroyed" }
    ],
    correct: ["c"],
    explanation:
      "The only rule is that inputs ≥ outputs. Fee = 15 − 12 = 3 BTC. The network does not warn about a forgotten change output, which is why wallets add it automatically."
  },
  {
    id: 40,
    type: "single",
    question: "What is the UTXO set?",
    options: [
      { id: "a", text: "All UTXOs that are currently in the Bitcoin system" },
      { id: "b", text: "All transactions ever made" },
      { id: "c", text: "All addresses with a positive balance" },
      { id: "d", text: "All transactions in the mempool" }
    ],
    correct: ["a"],
    explanation:
      "The UTXO set contains every unspent TxOut. It is used to quickly check whether the inputs of a new transaction exist and are still unspent."
  },
  {
    id: 41,
    type: "single",
    question: "What is double-spending?",
    options: [
      { id: "a", text: "An attacker tries to spend more money than she has" },
      { id: "b", text: "A miner collects the fee twice" },
      { id: "c", text: "A transaction is included in two blocks of the same chain" },
      { id: "d", text: "A wallet signs a transaction twice" }
    ],
    correct: ["a"],
    explanation:
      "The attacker tries to use the same coins more than once, for example by creating two transactions that spend the same TxOut."
  },
  {
    id: 42,
    type: "single",
    question: "How does the UTXO set help to prevent double-spending?",
    options: [
      { id: "a", text: "Once a UTXO is spent, it is removed from the UTXO set, so a second transaction that uses it is rejected" },
      { id: "b", text: "The UTXO set stores the secret keys and blocks the second signature" },
      { id: "c", text: "The UTXO set forbids transactions of more than one input" },
      { id: "d", text: "The UTXO set deletes the second transaction from the mempool of the attacker" }
    ],
    correct: ["a"],
    explanation:
      "TxOuts can only be used as inputs if they are contained in the UTXO set. After the first spending, the output is no longer there, so every further attempt to spend it is invalid."
  },
  {
    id: 43,
    type: "multiple",
    question: "Which statements about the UTXO set are correct?",
    options: [
      { id: "a", text: "A spent UTXO is removed from the UTXO set" },
      { id: "b", text: "TxOuts can only be used as inputs if they are contained in the UTXO set" },
      { id: "c", text: "The UTXO set can be generated from the full blockchain" },
      { id: "d", text: "The UTXO set is stored inside every block header" }
    ],
    correct: ["a", "b", "c"],
    explanation:
      "The UTXO set is derived data. It is not part of the block header. Every node can rebuild it from the blockchain."
  },
  {
    id: 44,
    type: "single",
    question: "What does it mean that a node generates its own UTXO set?",
    options: [
      { id: "a", text: "The node goes through the blockchain, adds every new TxOut, and removes every TxOut that is spent as TxIn; what remains is the UTXO set" },
      { id: "b", text: "The node asks a trusted server for the UTXO set" },
      { id: "c", text: "The node invents new UTXOs for its own wallet" },
      { id: "d", text: "The node only keeps the UTXOs of its own wallet" }
    ],
    correct: ["a"],
    explanation:
      "Nodes do not need to trust others. Since all honest nodes have the same blockchain, they all end up with the same UTXO set."
  },

  // ---------------------------------------------------------------
  // Locking and unlocking scripts, Script language
  // ---------------------------------------------------------------
  {
    id: 45,
    type: "single",
    question: "Where are the locking script and the unlocking script specified?",
    options: [
      { id: "a", text: "The TxOut specifies the locking script, and the TxIn specifies the unlocking script" },
      { id: "b", text: "The TxIn specifies the locking script, and the TxOut specifies the unlocking script" },
      { id: "c", text: "Both are specified in the TxOut" },
      { id: "d", text: "Both are specified in the block header" }
    ],
    correct: ["a"],
    explanation:
      "The locking script is written when the output is created (the padlock is attached to the coins). The unlocking script is written later, when someone spends the output in a new transaction."
  },
  {
    id: 46,
    type: "single",
    question: "What does the locking script specify?",
    options: [
      { id: "a", text: "The conditions that must be met to spend the output in the future" },
      { id: "b", text: "The fee of the transaction" },
      { id: "c", text: "The block in which the output will be included" },
      { id: "d", text: "The miner who may spend the output" }
    ],
    correct: ["a"],
    explanation:
      "For a normal address it says: whoever spends this must show a public key that hashes to this value, and a valid signature for that public key."
  },
  {
    id: 47,
    type: "single",
    question: "What must the unlocking script do?",
    options: [
      { id: "a", text: "It must satisfy the conditions of the locking script of the referenced output" },
      { id: "b", text: "It must contain the secret key of the output's owner" },
      { id: "c", text: "It must contain all earlier transactions of the owner" },
      { id: "d", text: "It must specify the fee" }
    ],
    correct: ["a"],
    explanation:
      "It provides the answer to the puzzle set by the locking script, for P2PKH the signature and the public key. The secret key itself is never revealed."
  },
  {
    id: 48,
    type: "single",
    question: "How is it checked that a TxIn may spend a TxOut?",
    options: [
      { id: "a", text: "By executing the unlocking script and the locking script together, starting with the unlocking script" },
      { id: "b", text: "By executing the locking script alone" },
      { id: "c", text: "By asking the owner of the TxOut for confirmation" },
      { id: "d", text: "By comparing the sizes of the two scripts" }
    ],
    correct: ["a"],
    explanation:
      "Both scripts are run one after the other on the same stack. First the unlocking script pushes its values, then the locking script checks them."
  },
  {
    id: 49,
    type: "single",
    question: "Which statement about the secret key and scripts is correct?",
    options: [
      { id: "a", text: "The secret key is only used in the wallet to create the signature; the unlocking script contains the signature and the public key" },
      { id: "b", text: "The unlocking script contains the secret key" },
      { id: "c", text: "The locking script contains the secret key of the recipient" },
      { id: "d", text: "The secret key is published together with the transaction" }
    ],
    correct: ["a"],
    explanation:
      "Digital signatures let you prove that you own the secret key without showing it."
  },
  {
    id: 50,
    type: "single",
    question: "What kind of programming language is Bitcoin's Script?",
    options: [
      { id: "a", text: "Stack-based, without variables" },
      { id: "b", text: "Object-oriented, with classes and variables" },
      { id: "c", text: "Functional, with recursion" },
      { id: "d", text: "A markup language like HTML" }
    ],
    correct: ["a"],
    explanation:
      "Script does not support variables. All values are stored on a stack."
  },
  {
    id: 51,
    type: "single",
    question: "Which operations can a Script program perform on the stack, and what are its statements?",
    options: [
      { id: "a", text: "push puts a value on top, pop takes the top-most value; statements are either <values> (pushed on the stack) or commands (may take values from the stack)" },
      { id: "b", text: "push takes the bottom value, pop puts a value at the bottom; statements are only commands" },
      { id: "c", text: "push and pop can access any position of the stack; statements are only values" },
      { id: "d", text: "push removes the whole stack, pop copies it" }
    ],
    correct: ["a"],
    explanation:
      "A stack works last-in, first-out. Values in <angle brackets> are pushed. Commands like DUP, HASH160 or CHECKSIG take values from the top."
  },
  {
    id: 52,
    type: "single",
    question: "Which pair is the unlocking script and the locking script of a standard P2PKH output?",
    options: [
      { id: "a", text: "Unlocking: <sig> <PubK>; Locking: DUP HASH160 <PubKHash> EQUALVERIFY CHECKSIG" },
      { id: "b", text: "Unlocking: DUP HASH160 <PubKHash> EQUALVERIFY CHECKSIG; Locking: <sig> <PubK>" },
      { id: "c", text: "Unlocking: <PubKHash>; Locking: <sig>" },
      { id: "d", text: "Unlocking: CHECKSIG; Locking: DUP" }
    ],
    correct: ["a"],
    explanation:
      "The unlocking script (scriptSig) supplies signature and public key. The locking script (scriptPubKey) contains the public key hash and the commands that check them."
  },
  {
    id: 53,
    type: "single",
    question: "After the values <sig> <PubK> have been pushed and DUP has been executed, what is on the stack (top first)?",
    options: [
      { id: "a", text: "<PubK>, <PubK>, <sig>" },
      { id: "b", text: "<sig>, <PubK>, <PubK>" },
      { id: "c", text: "<PubK>, <sig>" },
      { id: "d", text: "<sig>, <sig>, <PubK>" }
    ],
    correct: ["a"],
    explanation:
      "DUP duplicates the top-most element. The signature was pushed first, so it is at the bottom, and the public key now appears twice on top."
  },
  {
    id: 54,
    type: "single",
    question: "What does HASH160 do in the P2PKH script, and what is on the stack afterwards (top first)?",
    options: [
      { id: "a", text: "It hashes the top-most element (the public key); stack: <Hash(PubK)>, <PubK>, <sig>" },
      { id: "b", text: "It hashes the signature; stack: <PubK>, <PubK>, <Hash(sig)>" },
      { id: "c", text: "It hashes all elements on the stack; stack: <Hash(all)>" },
      { id: "d", text: "It deletes the top-most element; stack: <PubK>, <sig>" }
    ],
    correct: ["a"],
    explanation:
      "HASH160 replaces the duplicated public key by its hash (SHA-256 followed by RIPEMD-160, the same procedure as for the address). The original public key stays below it for the signature check."
  },
  {
    id: 55,
    type: "single",
    question: "What does EQUALVERIFY check?",
    options: [
      { id: "a", text: "Whether the two top-most values (the hash of the provided public key and <PubKHash> from the locking script) are equal; the script is invalid if not" },
      { id: "b", text: "Whether the signature is valid" },
      { id: "c", text: "Whether the fee is large enough" },
      { id: "d", text: "Whether the transaction is already in the blockchain" }
    ],
    correct: ["a"],
    explanation:
      "This step links the public key to the address: the provided public key must hash to the value stored in the locking script. If someone provides a different public key, the script fails here."
  },
  {
    id: 56,
    type: "single",
    question: "What does CHECKSIG do, and what remains on the stack after a successful run?",
    options: [
      { id: "a", text: "It checks whether the signature is correct for the public key; a 1 (true) remains on the stack" },
      { id: "b", text: "It signs the transaction; the signature remains on the stack" },
      { id: "c", text: "It hashes the public key; the hash remains on the stack" },
      { id: "d", text: "It checks the checksum of the address; an empty stack remains" }
    ],
    correct: ["a"],
    explanation:
      "CHECKSIG takes the public key and the signature from the stack and verifies the signature. If it is correct, the result is 1 and the output can be spent."
  },
  {
    id: 57,
    type: "single",
    question: "In the P2PKH script, which command makes sure that the provided public key belongs to the address, and which one makes sure that the signature is valid?",
    options: [
      { id: "a", text: "EQUALVERIFY (public key matches address), CHECKSIG (signature valid)" },
      { id: "b", text: "CHECKSIG (public key matches address), EQUALVERIFY (signature valid)" },
      { id: "c", text: "DUP (public key matches address), HASH160 (signature valid)" },
      { id: "d", text: "HASH160 (both)" }
    ],
    correct: ["a"],
    explanation:
      "Two checks are needed. First the hash comparison links the public key to the address (EQUALVERIFY). Then the signature is verified with this public key (CHECKSIG)."
  },
  {
    id: 58,
    type: "multiple",
    question: "Which statements about Bitcoin's scripting language are correct?",
    options: [
      { id: "a", text: "It contains many operators" },
      { id: "b", text: "It supports cryptographic operations and if-constructions" },
      { id: "c", text: "It is Turing complete" },
      { id: "d", text: "Loops are not possible" }
    ],
    correct: ["a", "b", "d"],
    explanation:
      "Script is deliberately not Turing complete. There are no loops, which keeps the complexity limited and the execution time predictable."
  },
  {
    id: 59,
    type: "single",
    question: "Why is Bitcoin's scripting language not Turing complete?",
    options: [
      { id: "a", text: "To keep the complexity limited and the execution times predictable" },
      { id: "b", text: "Because it cannot do any cryptographic operations" },
      { id: "c", text: "Because miners are not able to execute scripts" },
      { id: "d", text: "Because scripts are only used for the coinbase transaction" }
    ],
    correct: ["a"],
    explanation:
      "Every node has to execute the scripts of every transaction. Without loops, a script always ends and cannot be used to block nodes with endless computations."
  },
  {
    id: 60,
    type: "single",
    question: "What is the difference between P2SH and P2PKH addresses regarding scripts?",
    options: [
      { id: "a", text: "P2SH (starts with 3) accepts transactions with arbitrary Bitcoin scripts; P2PKH (starts with 1) is like P2SH with the standard script" },
      { id: "b", text: "P2PKH accepts arbitrary scripts, P2SH only accepts the standard script" },
      { id: "c", text: "Neither type uses scripts" },
      { id: "d", text: "P2SH addresses start with 1 and P2PKH with 3" }
    ],
    correct: ["a"],
    explanation:
      "P2PKH is the common special case: pay to a public key hash with the standard script. P2SH allows any script."
  },
  {
    id: 61,
    type: "single",
    question: "How is the script handled for P2PKH addresses in practice?",
    options: [
      { id: "a", text: "The script is not included in the transaction but filled in by the Bitcoin software when validation takes place" },
      { id: "b", text: "The full script is always written by hand by the user" },
      { id: "c", text: "The script is stored in the block header" },
      { id: "d", text: "The script is sent to the miners in a separate message" }
    ],
    correct: ["a"],
    explanation:
      "The script looks the same in all P2PKH cases. Only the public key, the signature and the public key hash have to be specified."
  },

  // ---------------------------------------------------------------
  // Transaction lifecycle
  // ---------------------------------------------------------------
  {
    id: 62,
    type: "single",
    question:
      "Which phase of the transaction lifecycle is incorrect?\n\nPhase 1: Creation of a transaction\nPhase 2: Propagation within the Bitcoin network\nPhase 3: Inclusion into the mempool",
    options: [
      { id: "a", text: "Phase 1" },
      { id: "b", text: "Phase 2" },
      { id: "c", text: "Phase 3" },
      { id: "d", text: "All phases are correct" }
    ],
    correct: ["c"],
    explanation:
      "Phase 3 is the inclusion into the blockchain, not into the mempool. The mempool is where unconfirmed transactions wait during phase 2."
  },
  {
    id: 63,
    type: "single",
    question: "In which order do the phases of the transaction lifecycle take place?",
    options: [
      { id: "a", text: "Creation, propagation within the network, inclusion into the blockchain" },
      { id: "b", text: "Propagation, creation, inclusion" },
      { id: "c", text: "Inclusion into the blockchain, creation, propagation" },
      { id: "d", text: "Creation, inclusion into the blockchain, propagation" }
    ],
    correct: ["a"],
    explanation:
      "The wallet creates the transaction, it spreads through the P2P network, and a miner finally includes it in a block."
  },
  {
    id: 64,
    type: "single",
    question: "What is the first step of creating the TxIns in phase 1?",
    options: [
      { id: "a", text: "Select sufficient unspent TxOuts, so that the sum of their bitcoins is at least x" },
      { id: "b", text: "Broadcast the transaction to all peers" },
      { id: "c", text: "Solve the computational puzzle" },
      { id: "d", text: "Create the coinbase transaction" }
    ],
    correct: ["a"],
    explanation:
      "To transfer x BTC, the wallet needs UTXOs worth at least x BTC (plus the fee, if any)."
  },
  {
    id: 65,
    type: "multiple",
    question: "What is created for each selected TxOut when the TxIns are built?",
    options: [
      { id: "a", text: "One appropriate TxIn" },
      { id: "b", text: "A pointer to the TxOut (transaction and index)" },
      { id: "c", text: "An unlocking script that fits to the locking script of the TxOut" },
      { id: "d", text: "A new locking script for the miner" }
    ],
    correct: ["a", "b", "c"],
    explanation:
      "For each selected UTXO, the wallet creates one TxIn that points to it and carries the unlocking script (signature and public key) that opens its locking script."
  },
  {
    id: 66,
    type: "multiple",
    question: "Which statements about creating the TxOuts in phase 1 are correct?",
    options: [
      { id: "a", text: "For each recipient address, at least one TxOut is created" },
      { id: "b", text: "The recipient is specified within the locking script, so only the recipient can unlock it" },
      { id: "c", text: "If necessary, a TxOut for the change is created, whose locking script can only be unlocked by the sender" },
      { id: "d", text: "The fee is added as a separate TxOut for the miner" }
    ],
    correct: ["a", "b", "c"],
    explanation:
      "The fee is not a separate TxOut. It is simply the difference between the sum of inputs and outputs."
  },
  {
    id: 67,
    type: "single",
    question: "How does a transaction spread through the network in phase 2 (broadcasting)?",
    options: [
      { id: "a", text: "The wallet node sends it to all its peers, these forward it to their peers, and so on" },
      { id: "b", text: "The wallet sends it directly to every node in the network at once" },
      { id: "c", text: "The wallet sends it to one central server that distributes it" },
      { id: "d", text: "The wallet sends it only to the recipient, who forwards it" }
    ],
    correct: ["a"],
    explanation:
      "There is no central server. The transaction is passed on from peer to peer through the P2P network."
  },
  {
    id: 68,
    type: "multiple",
    question: "What can a node check about a transaction before it forwards it?",
    options: [
      { id: "a", text: "Are the signatures correct?" },
      { id: "b", text: "Do the unlocking scripts fit to the locking scripts?" },
      { id: "c", text: "Is the number of bitcoins sufficient?" },
      { id: "d", text: "Do the TxIns refer to unspent TxOuts?" },
      { id: "e", text: "Has a miner already included the transaction in a block?" }
    ],
    correct: ["a", "b", "c", "d"],
    explanation:
      "These are the validity requirements named on the slide. A transaction does not have to be in a block yet to be validated, because it is still unconfirmed."
  },
  {
    id: 69,
    type: "single",
    question: "Why does every node check the validity of a transaction before forwarding it?",
    options: [
      { id: "a", text: "To avoid DoS attacks: invalid transactions are stopped and do not flood the network" },
      { id: "b", text: "To collect the transaction fee for itself" },
      { id: "c", text: "To be allowed to mine the next block" },
      { id: "d", text: "To find out the identity of the sender" }
    ],
    correct: ["a"],
    explanation:
      "If nodes forwarded everything, an attacker could flood the network with invalid transactions. Each honest node drops them."
  },
  {
    id: 70,
    type: "multiple",
    question: "Which of the following transactions would a node reject?",
    options: [
      { id: "a", text: "A transaction whose TxIn refers to a TxOut that is already spent" },
      { id: "b", text: "A transaction whose outputs are worth more than its inputs" },
      { id: "c", text: "A transaction with an invalid signature" },
      { id: "d", text: "A transaction with a fee of exactly zero (according to the rules on the slides)" }
    ],
    correct: ["a", "b", "c"],
    explanation:
      "The first three violate the validity requirements. A fee of zero is allowed by the rules on the slide ('fee can be zero'), although in practice miners prefer transactions with fees and nodes can set their own minimum fee."
  },
  {
    id: 71,
    type: "single",
    question: "What is an unconfirmed transaction?",
    options: [
      { id: "a", text: "A transaction that has not been included in the blockchain" },
      { id: "b", text: "A transaction with an invalid signature" },
      { id: "c", text: "A transaction without a fee" },
      { id: "d", text: "A transaction that was discarded by the network" }
    ],
    correct: ["a"],
    explanation:
      "An unconfirmed transaction has been validated by nodes but is still waiting to be put into a block."
  },
  {
    id: 72,
    type: "single",
    question: "What is the mempool?",
    options: [
      { id: "a", text: "A database in which nodes store the unconfirmed transactions they receive" },
      { id: "b", text: "The pool in which miners share their rewards" },
      { id: "c", text: "The set of all unspent transaction outputs" },
      { id: "d", text: "The memory in which the blockchain is stored" }
    ],
    correct: ["a"],
    explanation:
      "Every miner has a separate mempool and updates it when it receives new transactions from its peers. Do not confuse it with a mining pool or the UTXO set."
  },
  {
    id: 73,
    type: "single",
    question: "Does a transaction have to reach every node before it can be included in the blockchain?",
    options: [
      { id: "a", text: "Yes, all nodes must have received it" },
      { id: "b", text: "No, it only has to reach one miner who includes it in a block" },
      { id: "c", text: "Yes, at least 50% of the nodes must have confirmed it" },
      { id: "d", text: "No, but it must have reached all miners" }
    ],
    correct: ["b"],
    explanation:
      "There is no vote beforehand. Other nodes receive the transaction as part of the block and validate it again."
  },
  {
    id: 74,
    type: "single",
    question: "What has to be done before miners try to solve the computational puzzle?",
    options: [
      { id: "a", text: "The block needs to be prepared, which includes selecting the transactions" },
      { id: "b", text: "The block must already be accepted by the network" },
      { id: "c", text: "All transactions in the mempool must be deleted" },
      { id: "d", text: "The difficulty target must be set by the miner" }
    ],
    correct: ["a"],
    explanation:
      "The miner first builds the block (transactions, Merkle root, header). Only then does he search for a nonce that solves the puzzle."
  },
  {
    id: 75,
    type: "single",
    question: "What is the first transaction in a block?",
    options: [
      { id: "a", text: "The coinbase transaction, which specifies the recipient of the block reward" },
      { id: "b", text: "The transaction with the highest fee" },
      { id: "c", text: "The oldest transaction in the mempool" },
      { id: "d", text: "A transaction of the previous block's miner" }
    ],
    correct: ["a"],
    explanation:
      "The coinbase transaction pays the miner. It is created by the miner himself and has no normal inputs."
  },
  {
    id: 76,
    type: "single",
    question: "Where do the remaining transactions of a block come from?",
    options: [
      { id: "a", text: "From the mempool of the miner" },
      { id: "b", text: "From the UTXO set" },
      { id: "c", text: "From the previous block" },
      { id: "d", text: "From the wallets of the other miners" }
    ],
    correct: ["a"],
    explanation:
      "After the coinbase transaction, the miner fills the block with unconfirmed transactions from his mempool, usually preferring those with higher fees."
  },
  {
    id: 77,
    type: "multiple",
    question: "Which fields belong to the block header that is hashed in the mining puzzle?",
    options: [
      { id: "a", text: "Version" },
      { id: "b", text: "Previous Block Hash" },
      { id: "c", text: "Merkle Root" },
      { id: "d", text: "Timestamp" },
      { id: "e", text: "Difficulty Target" },
      { id: "f", text: "Nonce" },
      { id: "g", text: "The list of all transactions itself" }
    ],
    correct: ["a", "b", "c", "d", "e", "f"],
    explanation:
      "The header has six fields. The transactions are not hashed directly: they are represented in the header by the Merkle root."
  },
  {
    id: 78,
    type: "single",
    question: "How is the block header hashed on the slide to get the value h?",
    options: [
      { id: "a", text: "With SHA-256, applied twice" },
      { id: "b", text: "With SHA-256, then RIPEMD-160" },
      { id: "c", text: "With RIPEMD-160, applied twice" },
      { id: "d", text: "It is not hashed, only signed" }
    ],
    correct: ["a"],
    explanation:
      "The slide shows two SHA-256 steps in a row. The miner changes values like the nonce until h fulfills the difficulty condition."
  },
  {
    id: 79,
    type: "single",
    question: "How are the transactions of a block connected to the block header?",
    options: [
      { id: "a", text: "Through the Merkle root in the header" },
      { id: "b", text: "Through the nonce" },
      { id: "c", text: "Through the difficulty target" },
      { id: "d", text: "They are not connected to the header" }
    ],
    correct: ["a"],
    explanation:
      "The Merkle root summarizes all transactions of the block. If a transaction changes, the Merkle root and therefore the header hash change."
  },
  {
    id: 80,
    type: "single",
    question: "When is a transaction included in the blockchain?",
    options: [
      { id: "a", text: "When the block that contains it has been successfully mined and accepted" },
      { id: "b", text: "As soon as it enters the first mempool" },
      { id: "c", text: "As soon as the recipient confirms it" },
      { id: "d", text: "When the sender pays a fee" }
    ],
    correct: ["a"],
    explanation:
      "Once a valid block is mined and accepted, each transaction in it is part of the blockchain. Its inputs are then spent and its outputs join the UTXO set."
  },
  {
    id: 81,
    type: "single",
    question:
      "An attacker owns one UTXO of 2 BTC and broadcasts two different transactions that both spend it. The first one is included in a block. What happens to the second one?",
    options: [
      { id: "a", text: "It is also included, since both are signed correctly" },
      { id: "b", text: "It is rejected, because the TxOut is no longer in the UTXO set" },
      { id: "c", text: "It is included, but the fee is doubled" },
      { id: "d", text: "It is split into two smaller transactions" }
    ],
    correct: ["b"],
    explanation:
      "After the first transaction, the TxOut counts as spent and is removed from the UTXO set. The second transaction refers to a TxOut that is not unspent anymore and fails the validity check."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = quizData_03;
}
