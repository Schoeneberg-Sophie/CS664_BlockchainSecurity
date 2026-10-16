// Quiz data for Lecture 3: Bitcoin addresses, transactions, scripts, mempool, mining
// type: "single" | "multiple" | "truefalse"
// correct: array of option ids (more than one entry = multiple correct answers)

const quizData_04 = [
  {
    id: 1,
    type: "single",
    question: "How is a bitcoin address formatted?",
    options: [
      { id: "a", text: "| Type | String |" },
      { id: "b", text: "| String | Type |" },
      { id: "c", text: "| Type | String | Checksum |" },
    ],
    correct: ["a"],
    explanation:
      "An address consists of a type (version prefix, e.g. 1 for P2PKH or 3 for P2SH) followed by the string, which is the doubly hashed public key. In the Base58Check encoding a 4-byte checksum is appended before encoding; it only exists in the address string, never in the transaction.",
  },
  {
    id: 2,
    type: "single",
    question: "A P2PKH is a type of Bitcoin address that starts with:",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "A" },
      { id: "d", text: "1" },
    ],
    correct: ["d"],
    explanation:
      "P2PKH (Pay to Public Key Hash) addresses start with the number 1. P2SH (Pay to Script Hash) addresses start with the number 3.",
  },
  {
    id: 3,
    type: "single",
    question: "When a transaction is published, it is broadcast to...",
    options: [
      { id: "a", text: "the recipient" },
      { id: "b", text: "the bitcoin network" },
      { id: "c", text: "the P2P network" },
      { id: "d", text: "all of the above" },
    ],
    correct: ["d"],
    explanation:
      "The Bitcoin network and the P2P (peer-to-peer) network are the same thing. Bitcoin has no central server; it is a global P2P network of thousands of nodes. The recipient (or their wallet software/node) is also part of that network, so they will see the transaction appear in their mempool as well.",
  },
  {
    id: 4,
    type: "multiple",
    question: "How does the recipient verify the authenticity of the transaction?",
    options: [
      { id: "a", text: "with his own secret key" },
      { id: "b", text: "with the digital signature" },
      { id: "c", text: "with the public key of the sender" },
      { id: "d", text: "by solving the computational puzzle" },
    ],
    correct: ["b", "c"],
    explanation:
      "The digital signature proves that the owner of the funds authorised this specific transaction and that it has not been tampered with. The sender's public key is used to verify that signature: the public key, the signature and the transaction data are run through an ECDSA verification algorithm. Solving the computational puzzle is mining, which is unrelated to verifying a transaction's authenticity.",
  },
  {
    id: 5,
    type: "single",
    question: "The signature of the transaction is created using:",
    options: [
      { id: "a", text: "the secret key of the sender" },
      { id: "b", text: "the secret key of the recipient" },
      { id: "c", text: "a hash function" },
    ],
    correct: ["a"],
    explanation:
      "Only the owner of the funds holds the secret (private) key, so only they can generate a valid signature that authorises spending. A hash function is used on the transaction data as part of signing, but the signature itself requires the sender's secret key.",
  },
  {
    id: 6,
    type: "single",
    question: "How is the bitcoin address of the sender linked to the transaction?",
    options: [
      { id: "a", text: "by doubly hashing the public key" },
      { id: "b", text: "by adding the string to the transaction" },
      { id: "c", text: "by hashing the public key once" },
      { id: "d", text: "by including it in the signature via the secret key" },
    ],
    correct: ["a"],
    explanation:
      "The address is derived from the public key hash (HASH160: SHA-256 followed by RIPEMD-160). This hash is what is placed in the locking script. The address string itself is never added to the transaction, and it is not part of the signature.",
  },
  {
    id: 7,
    type: "single",
    question: "What is Base58?",
    options: [
      { id: "a", text: "an encoding system avoiding confusing characters" },
      { id: "b", text: "a type of bitcoin address" },
      { id: "c", text: "the language of the bitcoin software" },
      { id: "d", text: "a hash function used to calculate the checksum" },
    ],
    correct: ["a"],
    explanation:
      "Base58 is an encoding that leaves out easily confused characters (such as 0, O, I and l) so that addresses are easier to read and copy. It is an encoding, not a hash function or an address type. The checksum is computed with a (double) SHA-256 hash.",
  },
  {
    id: 8,
    type: "multiple",
    question: "Which component is NOT part of a bitcoin address?",
    options: [
      { id: "a", text: "the UTXOs" },
      { id: "b", text: "the type" },
      { id: "c", text: "the doubly hashed public key" },
      { id: "d", text: "the public key" },
    ],
    correct: ["a", "d"],
    explanation:
      "An address contains the type and the doubly hashed public key (plus a checksum in the encoded form). UTXOs are unspent outputs that are locked to an address, they are not a component of it. The full public key is not part of the address either, only its hash.",
  },
  {
    id: 9,
    type: "single",
    question: "Where is the bitcoin address included in a transaction?",
    options: [
      { id: "a", text: "in the locking script" },
      { id: "b", text: "in the TxOuts" },
      { id: "c", text: "none" },
      { id: "d", text: "in the TxIns" },
      { id: "e", text: "in the unlocking script" },
    ],
    correct: ["c"],
    explanation:
      "When someone sends Bitcoin to your address, the transaction's output contains a locking script (scriptPubKey). Inside that script, the address is converted into its underlying component, the 20-byte public key hash. However, the bitcoin address in Base58 is never saved in transactions.",
  },
  {
    id: 10,
    type: "single",
    question: "How does a transaction propagate through the bitcoin network?",
    options: [
      { id: "a", text: "by sending the information to peer nodes" },
      { id: "b", text: "by broadcasting it directly to all miners simultaneously" },
      { id: "c", text: "by storing it locally on the blockchain" },
      { id: "d", text: "by uploading it to the registry" },
    ],
    correct: ["a"],
    explanation:
      "A signed transaction is sent to connected peer nodes via a P2P gossip protocol. Those nodes validate it and relay it to their own peers until it has reached the entire network.",
  },
  {
    id: 11,
    type: "single",
    question: "What must happen before a transaction can be added to the mempool?",
    options: [
      { id: "a", text: "it must be validated by other nodes by checking the public key" },
      { id: "b", text: "it must be validated by other nodes by checking the bitcoin address" },
      { id: "c", text: "it must be validated by other nodes by checking the transaction value" },
      { id: "d", text: "it must be validated by other nodes by checking the signature" },
    ],
    correct: ["d"],
    explanation:
      "Before a node accepts a transaction into its mempool, it verifies that the sender actually owns the funds. It does this by checking the digital signature in the transaction input against the corresponding public key. A valid signature proves authorisation without exposing the private key; an invalid one leads to immediate rejection.",
  },
  {
    id: 12,
    type: "single",
    question: "What do other nodes use to validate the signature of a transaction?",
    options: [
      { id: "a", text: "they use the secret key and signature" },
      { id: "b", text: "they verify the hashed public key and the signature" },
      { id: "c", text: "they verify the public key and the signature" },
      { id: "d", text: "they verify the transaction history of the BTC" },
    ],
    correct: ["c"],
    explanation:
      "Nodes never see the secret key. They use the public key (revealed in the unlocking script when funds are spent) together with the signature to verify that the signature was generated by the matching private key.",
  },
  {
    id: 13,
    type: "single",
    question:
      "The public key is doubly hashed for the bitcoin address. Where is this hash included in a transaction?",
    options: [
      { id: "a", text: "in the unlocking script" },
      { id: "b", text: "in the TxIns" },
      { id: "c", text: "in the TxOuts" },
      { id: "d", text: "in the locking script" },
    ],
    correct: ["d"],
    explanation:
      "The public key hash sits in the locking script (scriptPubKey) of a TxOut. That ties the output (the UTXO) to the address: whoever wants to spend it must provide a public key that hashes to this value, plus a valid signature. (The locking script is a field inside the TxOut, so c) is the broader container, but d) is the most precise answer.)",
  },
  {
    id: 14,
    type: "multiple",
    question: "Why use a secret key?",
    options: [
      { id: "a", text: "to encrypt the transaction so that only the recipient can read it" },
      { id: "b", text: "to create a signature proving you own the secret key" },
      { id: "c", text: "it proves ownership" },
      { id: "d", text: "to calculate the hash that goes into the locking script" },
    ],
    correct: ["b", "c"],
    explanation:
      "The secret key is used to create the signature, and that signature is the proof that you control the funds. Bitcoin transactions are not encrypted; they are public. The hash in the locking script is computed from the public key, not the secret key.",
  },
  {
    id: 15,
    type: "single",
    question: "The public key:",
    options: [
      { id: "a", text: "is used to create the signature" },
      { id: "b", text: "proves ownership of the funds on its own" },
      { id: "c", text: "is used to verify the signature" },
      { id: "d", text: "must be kept secret at all times" },
    ],
    correct: ["c"],
    explanation:
      "The public key is the tool nodes use to verify the signature. On its own it proves nothing about ownership, because anyone can copy a public key from the blockchain. The signature, created with the secret key, is the actual proof.",
  },
  {
    id: 16,
    type: "truefalse",
    question:
      "True or false: The public key verifies that the signature was created with the corresponding secret key, while the signature shows that you own the secret key.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
    ],
    correct: ["a"],
    explanation:
      "The two work as a pair: the signature is the claim (\"I hold the key\"), and the public key lets anyone check that claim without ever seeing the secret key.",
  },
  {
    id: 17,
    type: "single",
    question: "The public key is included in the unlocking script to:",
    options: [
      { id: "a", text: "store the sender's bitcoin address" },
      { id: "b", text: "let other nodes in the network verify the signature" },
      { id: "c", text: "pay the transaction fee" },
      { id: "d", text: "reveal the secret key to the miners" },
    ],
    correct: ["b"],
    explanation:
      "The spender supplies the full public key in the unlocking script. Nodes hash it to compare it with the hash in the locking script and use it to verify the signature. The address string is never stored in a transaction, the fee is the difference between inputs and outputs, and the secret key is never revealed.",
  },
  {
    id: 18,
    type: "single",
    question: "The (hashed) public key is included in the locking script to:",
    options: [
      { id: "a", text: "store the bitcoin address string on the blockchain" },
      { id: "b", text: "create the signature of the transaction" },
      { id: "c", text: "lock the output so only the holder of the matching public key (and secret key) can spend it" },
      { id: "d", text: "pay the miner's fee" },
    ],
    correct: ["c"],
    explanation:
      "The public key hash in the locking script ties the output to the receiver. To spend it, someone must provide a public key that hashes to this value and a valid signature for that key.",
  },
  {
    id: 19,
    type: "single",
    question: "Which one is correct?",
    options: [
      { id: "a", text: "in the locking mechanism, the public key is hashed; in the unlocking mechanism, it is not" },
      { id: "b", text: "in the unlocking mechanism, the public key is hashed; in the locking mechanism, it is not" },
      { id: "c", text: "it is hashed in both the locking and unlocking mechanism" },
      { id: "d", text: "it is hashed in neither" },
    ],
    correct: ["a"],
    explanation:
      "The locking script holds the hashed public key (20-byte pubkey hash). The unlocking script holds the full, unhashed public key plus the signature. Nodes hash the supplied public key and compare it with the value in the locking script.",
  },
  {
    id: 20,
    type: "truefalse",
    question:
      "True or false: In the locking mechanism, there is the hashed public key; in the unlocking mechanism, there is the public key and the signature.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
    ],
    correct: ["a"],
    explanation:
      "This describes the standard P2PKH model: locking script = public key hash plus check opcodes; unlocking script = signature and full public key.",
  },
  {
    id: 21,
    type: "single",
    question: "When is a fee created?",
    options: [
      { id: "a", text: "Sum of TxIns > Sum of TxOuts" },
      { id: "b", text: "Sum of TxIns < Sum of TxOuts" },
    ],
    correct: ["a"],
    explanation:
      "The fee is the difference between inputs and outputs (fee = sum of TxIns - sum of TxOuts). It is not stored as a separate field; the miner who includes the transaction claims it. If outputs exceeded inputs, coins would be created from nothing and the transaction would be rejected.",
  },
  {
    id: 22,
    type: "truefalse",
    question: "True or false: First the locking script is executed, and then the unlocking script.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
    ],
    correct: ["b"],
    explanation:
      "Execution happens in the opposite order: the unlocking script (scriptSig) runs first and puts the signature and public key on the stack, then the locking script (scriptPubKey) runs on that stack.",
  },
  {
    id: 23,
    type: "single",
    question: "Bitcoin's scripting language is used for...",
    options: [
      { id: "a", text: "sending messages" },
      { id: "b", text: "creating new transactions" },
      { id: "c", text: "encrypting the transaction data" },
      { id: "d", text: "the locking and unlocking mechanism" },
    ],
    correct: ["d"],
    explanation:
      "Bitcoin Script is a simple stack-based language that defines the conditions under which an output can be spent (locking script) and supplies the data that satisfies them (unlocking script). Wallets build transactions, and Script does not encrypt anything.",
  },
  {
    id: 24,
    type: "single",
    question: "Why is this script incorrect?\n<sig> <PubK> DUP HASH160 EQUALVERIFY <PubKHash> CHECKSIG",
    options: [
      { id: "a", text: "it creates the signature too early" },
      { id: "b", text: "it needs to first hash, then duplicate the public key" },
      { id: "c", text: "it compares the public key with its hash, because <PubKHash> is pushed after EQUALVERIFY instead of before" },
      { id: "d", text: "it needs to check the signature after creating it" },
    ],
    correct: ["c"],
    explanation:
      "The correct order is: <sig> <PubK> DUP HASH160 <PubKHash> EQUALVERIFY CHECKSIG. In the faulty script, EQUALVERIFY compares the hash of the public key with the public key itself (the expected hash has not been pushed yet), so it fails.",
  },
  {
    id: 25,
    type: "multiple",
    question: "Why is the scripting language not Turing complete?",
    options: [
      { id: "a", text: "it has predictable execution times" },
      { id: "b", text: "it has limited complexity (e.g. no loops)" },
      { id: "c", text: "it is too complex" },
      { id: "d", text: "it is not a deterministic process" },
    ],
    correct: ["a", "b"],
    explanation:
      "Turing completeness would require things like loops and arbitrary branching. Bitcoin Script deliberately leaves out loops, so it is not Turing complete. Predictable execution times are the consequence and the reason for the design: nodes know a script will terminate, so nobody can freeze the network with an infinite loop. Script is deterministic, and it is intentionally simple, not complex.",
  },
  {
    id: 26,
    type: "single",
    question: "Which statement about Bitcoin address types is correct?",
    options: [
      { id: "a", text: "P2PKH addresses start with the number 3 and accept arbitrary Bitcoin scripts" },
      { id: "b", text: "P2SH addresses start with the number 1 and always use the standard public key hash script" },
      { id: "c", text: "P2SH addresses start with the number 3 and accept transactions with arbitrary Bitcoin scripts" },
      { id: "d", text: "P2PKH and P2SH addresses both start with the number 1" },
    ],
    correct: ["c"],
    explanation:
      "P2SH (Pay to Script Hash) addresses start with the number 3 and allow outputs to be locked with arbitrary Bitcoin scripts. P2PKH addresses start with the number 1 and correspond to the standard script (hash of the public key plus signature check). The prefixes in a) and b) are swapped, and d) is wrong because the two types have different prefixes.",
  },
  {
    id: 27,
    type: "single",
    question: "Why does a P2PKH transaction not require the sender to write a script manually?",
    options: [
      { id: "a", text: "because P2PKH transactions don't use scripts at all" },
      { id: "b", text: "because Bitcoin software fills in the standard script automatically" },
      { id: "c", text: "because the script is stored in the address" },
      { id: "d", text: "because miners write the script" },
    ],
    correct: ["b"],
    explanation:
      "For P2PKH, the script follows a standard template. The wallet software constructs it from the receiver's address (by decoding the pubkey hash) and validates it using the standard procedure, so users never write script code themselves. The address only encodes the pubkey hash, not the script.",
  },
  {
    id: 28,
    type: "truefalse",
    question:
      "True or false: For each selected unspent TxOut (UTXO), an equivalent TxIn has to be created.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
    ],
    correct: ["a"],
    explanation:
      "A UTXO can only be spent by referencing it in a new TxIn (previous transaction ID plus output index) and satisfying its locking script. The TxIn consumes the UTXO, and the transaction creates new UTXOs in its TxOuts.",
  },
  {
    id: 29,
    type: "single",
    question: "When paying multiple recipient addresses in one transaction...",
    options: [
      { id: "a", text: "one TxIn per recipient is required" },
      { id: "b", text: "multiple TxIns are always necessary" },
      { id: "c", text: "one TxOut is sufficient" },
      { id: "d", text: "multiple TxOuts are necessary" },
    ],
    correct: ["d"],
    explanation:
      "Each TxOut has exactly one value and one locking script, so every recipient needs their own TxOut. The number of TxIns depends only on how many UTXOs are needed to cover the total amount, not on the number of recipients.",
  },
  {
    id: 30,
    type: "single",
    question: "A fee for the miner is...",
    options: [
      { id: "a", text: "optional" },
      { id: "b", text: "obligatory" },
    ],
    correct: ["a"],
    explanation:
      "The protocol does not require a fee (a transaction with a fee of zero is valid). In practice, miners prioritise transactions with higher fees, so a transaction without a sufficient fee may stay unconfirmed for a long time.",
  },
  {
    id: 31,
    type: "single",
    question: "What do the peer nodes NOT check when validating a transaction?",
    options: [
      { id: "a", text: "the signature" },
      { id: "b", text: "the amount of bitcoin" },
      { id: "c", text: "the public key" },
      { id: "d", text: "the locking and unlocking scripts" },
      { id: "e", text: "the TxIns and TxOuts" },
      { id: "f", text: "the timestamp" },
    ],
    correct: ["f"],
    explanation:
      "Nodes validate the signature, amounts, public key (via its hash), scripts, and inputs/outputs. A transaction has no creation timestamp that is validated; timestamps belong to blocks.",
  },
  {
    id: 32,
    type: "single",
    question: "An unconfirmed transaction means...",
    options: [
      { id: "a", text: "the transaction is invalid" },
      { id: "b", text: "the transaction has not yet been checked by the bitcoin network" },
      { id: "c", text: "the transaction has not been included in the blockchain yet" },
      { id: "d", text: "the sender's signature is missing" },
    ],
    correct: ["c"],
    explanation:
      "An unconfirmed transaction has been broadcast and usually already validated by nodes (it sits in mempools), but it has not yet been included in a block on the blockchain.",
  },
  {
    id: 33,
    type: "truefalse",
    question: "True or false: Every miner shares the same mempool.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
    ],
    correct: ["b"],
    explanation:
      "Each node keeps its own mempool. Because transactions propagate through the network with a delay and nodes apply their own policies, mempools differ slightly between nodes and miners.",
  },
  {
    id: 34,
    type: "single",
    question: "What do miners do with the first transaction when preparing a block?",
    options: [
      { id: "a", text: "They use it to pay the highest-fee transaction first, so it is always the largest payment in the block" },
      { id: "b", text: "They leave it empty as a placeholder that is filled in once the block is mined" },
      { id: "c", text: "They use it to store the block's timestamp and the nonce of the proof-of-work" },
      { id: "d", text: "It is a coinbase transaction specifying the recipient of the block reward" },
    ],
    correct: ["d"],
    explanation:
      "The first transaction in every block is the coinbase transaction. It has no real TxIn (it references no previous output) and creates new coins. Its TxOut pays the block reward plus the collected transaction fees to an address chosen by the miner. Timestamp and nonce are in the block header.",
  },

  // ---- Additional questions ----
  {
    id: 35,
    type: "single",
    question: "What happens to a UTXO once it has been used as a TxIn in a confirmed transaction?",
    options: [
      { id: "a", text: "it stays unspent and can be used again" },
      { id: "b", text: "it is spent and cannot be used again" },
      { id: "c", text: "it is returned to the sender after one block" },
      { id: "d", text: "it is deleted from the blockchain" },
    ],
    correct: ["b"],
    explanation:
      "A UTXO can be spent only once. After it is consumed by a confirmed transaction, it is no longer in the UTXO set. The blockchain itself is never deleted from; the output simply counts as spent.",
  },
  {
    id: 36,
    type: "single",
    question: "Why does a transaction often contain an output that goes back to the sender's own address?",
    options: [
      { id: "a", text: "because a UTXO must be spent in full, so the remaining amount is sent back as change" },
      { id: "b", text: "because miners require a deposit that is returned later" },
      { id: "c", text: "because every transaction needs a second signature" },
      { id: "d", text: "because the fee has to be paid to the sender first" },
    ],
    correct: ["a"],
    explanation:
      "A UTXO is spent as a whole. If its value is larger than the payment plus fee, the difference must be assigned to a new output (the change output) to the sender's own address; otherwise it would count as fee for the miner.",
  },
  {
    id: 37,
    type: "single",
    question: "What does a TxIn reference to identify the output it spends?",
    options: [
      { id: "a", text: "the recipient's bitcoin address" },
      { id: "b", text: "the ID of the previous transaction and the index of the output" },
      { id: "c", text: "the block number of the miner" },
      { id: "d", text: "the public key of the miner" },
    ],
    correct: ["b"],
    explanation:
      "A TxIn points to the UTXO it consumes through the previous transaction ID and the output index within that transaction. Nodes look up the value and locking script from that referenced output.",
  },
  {
    id: 38,
    type: "single",
    question: "What is the purpose of the checksum in a bitcoin address?",
    options: [
      { id: "a", text: "to prove ownership of the address" },
      { id: "b", text: "to detect typing errors in the address" },
      { id: "c", text: "to encrypt the public key" },
      { id: "d", text: "to calculate the transaction fee" },
    ],
    correct: ["b"],
    explanation:
      "The checksum (the first 4 bytes of a double SHA-256 hash) lets wallets detect mistyped or corrupted addresses before a transaction is created. It does not prove ownership and is not part of the transaction.",
  },
  {
    id: 39,
    type: "single",
    question: "Which hash functions are combined to hash a public key for a P2PKH address (HASH160)?",
    options: [
      { id: "a", text: "MD5 followed by SHA-1" },
      { id: "b", text: "SHA-256 followed by RIPEMD-160" },
      { id: "c", text: "RIPEMD-160 followed by Base58" },
      { id: "d", text: "SHA-256 followed by SHA-256" },
    ],
    correct: ["b"],
    explanation:
      "HASH160 applies SHA-256 and then RIPEMD-160 to the public key, which results in a 20-byte hash. Double SHA-256 is used for the checksum, and Base58 is an encoding, not a hash function.",
  },
  {
    id: 40,
    type: "single",
    question: "Which script operation verifies the signature at the end of a standard P2PKH script?",
    options: [
      { id: "a", text: "OP_DUP" },
      { id: "b", text: "OP_HASH160" },
      { id: "c", text: "OP_EQUALVERIFY" },
      { id: "d", text: "OP_CHECKSIG" },
    ],
    correct: ["d"],
    explanation:
      "OP_CHECKSIG verifies that the signature is valid for the transaction under the given public key. OP_DUP duplicates the top stack item, OP_HASH160 hashes it, and OP_EQUALVERIFY compares two values and fails the script if they differ.",
  },
  {
    id: 41,
    type: "single",
    question: "What does OP_EQUALVERIFY check in a standard P2PKH script?",
    options: [
      { id: "a", text: "that the signature matches the transaction" },
      { id: "b", text: "that the hash of the supplied public key equals the public key hash in the locking script" },
      { id: "c", text: "that the sum of TxIns equals the sum of TxOuts" },
      { id: "d", text: "that the miner has solved the proof-of-work" },
    ],
    correct: ["b"],
    explanation:
      "After OP_DUP and OP_HASH160, the hash of the supplied public key is compared with the public key hash from the locking script. If they differ, the script fails. The signature itself is checked afterwards by OP_CHECKSIG.",
  },
  {
    id: 42,
    type: "truefalse",
    question: "True or false: The secret key is included in the unlocking script so that nodes can verify the signature.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
    ],
    correct: ["b"],
    explanation:
      "The secret key is never part of a transaction and is never shared. The unlocking script contains only the signature and the public key, which is sufficient for nodes to verify the signature.",
  },
  {
    id: 43,
    type: "single",
    question: "Why is it useful that the locking script contains only the hash of the public key and not the public key itself?",
    options: [
      { id: "a", text: "the output is shorter, and the public key stays hidden until the coins are spent" },
      { id: "b", text: "the hash can be used instead of the signature" },
      { id: "c", text: "it makes the transaction free of fees" },
      { id: "d", text: "it allows miners to spend the output" },
    ],
    correct: ["a"],
    explanation:
      "The hash (20 bytes) is shorter than a public key (33 or 65 bytes), and the public key is revealed only when the output is spent. This adds an extra layer of protection for unspent coins.",
  },
  {
    id: 44,
    type: "single",
    question: "What is a double spend?",
    options: [
      { id: "a", text: "paying twice the fee for a faster confirmation" },
      { id: "b", text: "spending the same UTXO in two different transactions" },
      { id: "c", text: "signing a transaction with two secret keys" },
      { id: "d", text: "sending coins to two addresses in one transaction" },
    ],
    correct: ["b"],
    explanation:
      "A double spend attempts to use the same UTXO more than once. Nodes reject a transaction whose referenced input is already spent, and only one of two conflicting transactions can end up confirmed in the blockchain.",
  },
  {
    id: 45,
    type: "single",
    question: "Where do nodes find the value of a TxIn when validating a transaction?",
    options: [
      { id: "a", text: "in the referenced UTXO (the previous TxOut)" },
      { id: "b", text: "in the unlocking script" },
      { id: "c", text: "in the block header" },
      { id: "d", text: "in the address of the sender" },
    ],
    correct: ["a"],
    explanation:
      "The spending transaction only references the previous output. Nodes look up its value and locking script in the UTXO set to check that inputs cover outputs.",
  },
  {
    id: 46,
    type: "single",
    question: "What is the mempool?",
    options: [
      { id: "a", text: "a node's collection of valid transactions that are not yet included in a block" },
      { id: "b", text: "the list of all confirmed transactions" },
      { id: "c", text: "the memory in which miners store the secret keys" },
      { id: "d", text: "a central server that collects all transactions" },
    ],
    correct: ["a"],
    explanation:
      "The mempool holds validated but unconfirmed transactions. Each node maintains its own, and miners pick transactions from their mempool when building a block. There is no central server in Bitcoin.",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = quizData_04;
}
