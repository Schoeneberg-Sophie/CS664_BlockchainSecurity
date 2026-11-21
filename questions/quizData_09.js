const quizData_09 = [
  {
    id: 1,
    type: "multiple",
    question: "What is not a property of a commitment?",
    options: [
      { id: "a", text: "hiding" },
      { id: "b", text: "binding" },
      { id: "c", text: "revealing (unhiding)" },
      { id: "d", text: "malleability (non-binding)" }
    ],
    correct: ["c", "d"],
    explanation:
      "Hiding and binding are the two fundamental properties of a cryptographic commitment scheme. Revealing the secret prematurely or allowing a commitment to be altered and re-opened to a different value violates these properties."
  },
  {
    id: 2,
    type: "single",
    question: "What security issue arises from a simple commitment Commit(a) = aG?",
    options: [
      { id: "a", text: "It violates the binding property when 'a' is a prime number" },
      { id: "b", text: "It prevents any cryptographic signature from being verified" },
      { id: "c", text: "The attacker can guess various values of a' to expose the secret" },
      { id: "d", text: "It makes addition over the elliptic curve impossible" }
    ],
    correct: ["c"],
    explanation:
      "With Commit(a) = aG on a known generator G, an observer can test candidate amounts a' by computing a'G and comparing them to the commitment, breaking the hiding property when the value space is small or guessable."
  },
  {
    id: 3,
    type: "single",
    question: "What other factor is added in a commitment to hide the transaction amount?",
    options: [
      { id: "a", text: "A one-time destination address K°" },
      { id: "b", text: "A key image I" },
      { id: "c", text: "A public transaction fee f" },
      { id: "d", text: "A blinding factor x" }
    ],
    correct: ["d"],
    explanation:
      "A Pedersen commitment Commit(x, a) = xG + aH introduces a random blinding factor x (using a second generator H) so the same amount a can produce many different commitments, preventing brute-force guessing."
  },
  {
    id: 4,
    type: "single",
    question: "What would a published transaction look like?",
    options: [
      { id: "a", text: "K°, rG, Commit(x, a), α" },
      { id: "b", text: "K°, rG, a, α" },
      { id: "c", text: "k_o, rG, Commit(x, a), α" },
      { id: "d", text: "K°, rH, Commit(0, a), α" }
    ],
    correct: ["a"],
    explanation:
      "A published output includes the one-time stealth address (K°), the transaction public key (rG), the Pedersen commitment to the amount (Commit(x, a)), and encoded data (α) that helps the recipient recover the amount and blinding factor."
  },
  {
    id: 5,
    type: "single",
    question: "How is the blinding factor x computed?",
    options: [
      { id: "a", text: "x = k_o * G" },
      { id: "b", text: "x = rK^r_R" },
      { id: "c", text: "x = H(K°) * a" },
      { id: "d", text: "x = 0" }
    ],
    correct: ["b"],
    explanation:
      "Using the transaction random scalar r and the recipient's key component K^r_R, the shared secret rK^r_R (hashed into a scalar in RingCT implementations) allows deterministic derivation of the blinding factor x for the recipient."
  },
  {
    id: 6,
    type: "multiple",
    question: "In a published transaction K°, rG, Commit(x, a), α, why is α necessary?",
    options: [
      { id: "a", text: "It carries the masked/encrypted amount information needed by the recipient" },
      { id: "b", text: "Together with rK^v_R it determines 'a' (amount of transaction)" },
      { id: "c", text: "It replaces the need for all signatures in the transaction" },
      { id: "d", text: "It proves that the key image has never been used before" }
    ],
    correct: ["a", "b"],
    explanation:
      "Because Commit(x, a) hides the amount from public observers, the recipient needs α along with the ECDH shared secret derived from rK^v_R to unmask and read the transaction amount a."
  },
  {
    id: 7,
    type: "single",
    question: "In which part of the transaction are Pedersen commitments included?",
    options: [
      { id: "a", text: "Only in coinbase rewards" },
      { id: "b", text: "In the transaction inputs" },
      { id: "c", text: "In the transaction outputs" },
      { id: "d", text: "In both transaction inputs and outputs" }
    ],
    correct: ["d"],
    explanation:
      "Pedersen commitments are used across both transaction inputs (via prior output commitments / pseudo-output commitments) and new outputs so that input and output values can be verified to balance without exposing amounts."
  },
  {
    id: 8,
    type: "single",
    question: "Linking output commitments, how is equality proven?",
    options: [
      {
        id: "a",
        text: "By showing that C' of the previous transaction output equals C of the current transaction output (they commit to the same amount)"
      },
      { id: "b", text: "By publishing the blinding factors x and x' in plaintext" },
      { id: "c", text: "By setting all blinding factors to 1" },
      { id: "d", text: "It holds that the sender knows log_G(C - C') = (x - x')" }
    ],
    correct: ["d"],
    explanation:
      "If C = xG + aH and C' = x'G + a'H commit to the same amount (a = a'), the H terms cancel in C - C' = (x - x')G. Proving knowledge of the discrete logarithm (x - x') with respect to G proves equality without revealing a or x."
  },
  {
    id: 9,
    type: "multiple",
    question: "When proving that output transactions C' and C commit to the same amount a, which protocols are used?",
    options: [
      { id: "a", text: "Diffie-Hellman key exchange" },
      { id: "b", text: "Schnorr protocol" },
      { id: "c", text: "Pedersen commitment" },
      { id: "d", text: "Proof-of-Work" }
    ],
    correct: ["b", "c"],
    explanation:
      "Pedersen commitments provide additive homomorphic structure, while a Schnorr protocol proves knowledge of the secret scalar (x - x') without disclosing it."
  },
  {
    id: 10,
    type: "single",
    question: "Why can a simple output commitment not be used in a ring signature?",
    options: [
      { id: "a", text: "Elliptic curve commitments cannot be subtracted" },
      { id: "b", text: "Ring signatures only work when amounts are unencrypted" },
      { id: "c", text: "It prevents miners from checking block timestamps" },
      {
        id: "d",
        text: "It reveals which two commitments commit to log_G(C - C'_π) = (x - x'), thus revealing the amount"
      }
    ],
    correct: ["d"],
    explanation:
      "If commitment differences expose which specific prior commitment matches the spent amount or link cleanly across transactions without pseudo-output masking, observers can infer amounts and spending relationships."
  },
  {
    id: 11,
    type: "single",
    question: "How does a pseudo-output commitment ensure anonymity for transactions?",
    options: [
      { id: "a", text: "By hiding which transaction outputs commit to log_G(C - C'_π) = (x - x')" },
      { id: "b", text: "By publishing all input and output amounts in cleartext" },
      { id: "c", text: "By using the same blinding factor for every user on the network" },
      { id: "d", text: "By removing decoy outputs from transaction inputs" }
    ],
    correct: ["a"],
    explanation:
      "A pseudo-output commitment commits to the actual spent amount using its own blinding factor, letting the sender form differences across every member of the ring so observers cannot tell which ring member cancels out the amount."
  },
  {
    id: 12,
    type: "multiple",
    question: "In Ring Confidential Transactions (RingCT)...",
    options: [
      { id: "a", text: "Transaction amounts are always visible to all network nodes" },
      { id: "b", text: "A transaction with N transaction inputs has N rings of p previous outputs" },
      { id: "c", text: "In each ring, there is exactly one pseudo-output commitment" },
      {
        id: "d",
        text: "Each ring n has one real transaction output plus decoys referring to the transaction input"
      },
      { id: "e", text: "In each input, there is exactly one pseudo-output commitment" }
    ],
    correct: ["b", "d", "e"],
    explanation:
      "Each of the N inputs has a ring of p prior outputs (1 real spent output and p - 1 decoys) and one pseudo-output commitment associated with that input to prove balance for that input."
  },
  {
    id: 13,
    type: "multiple",
    question: "In RingCT...",
    options: [
      { id: "a", text: "Ring hides which past output the user spent" },
      { id: "b", text: "Key images are intentionally reused across spends to link inputs" },
      {
        id: "c",
        text: "The pseudo-output commitment proves how much a user is spending from that input so the transaction balances"
      },
      { id: "d", text: "Range proofs are unnecessary because amounts cannot be negative" }
    ],
    correct: ["a", "c"],
    explanation:
      "Rings conceal which past output is actually spent among decoys, while pseudo-output commitments (together with balance checks and range proofs) prove the spent amount matches the transaction outputs without revealing it."
  },
  {
    id: 14,
    type: "single",
    question: "The primary purpose of Pseudo Output Commitments is...",
    options: [
      { id: "a", text: "To replace one-time stealth addresses" },
      { id: "b", text: "To select the block producer" },
      { id: "c", text: "To eliminate the need for key images" },
      { id: "d", text: "Prove that the sum of inputs = sum of outputs (transaction balance)" }
    ],
    correct: ["d"],
    explanation:
      "Pseudo-output commitments bridge input rings and output commitments so nodes can verify conservation of value (sum of inputs equals sum of outputs plus any fee) while keeping amounts hidden."
  },
  {
    id: 15,
    type: "single",
    question: "The pseudo output commitment is necessary because...",
    options: [
      { id: "a", text: "All outputs in a ring are guaranteed to have the exact same amount" },
      {
        id: "b",
        text: "The transaction amounts in the ring differ, so the pseudo-output commitment always includes the real value of the transaction (without revealing it)"
      },
      { id: "c", text: "Pedersen commitments cannot commit to positive integers" },
      { id: "d", text: "Ring signatures cannot sign over elliptic curve points" }
    ],
    correct: ["b"],
    explanation:
      "Decoy outputs in a ring generally have different amounts from the real spent output. Committing to the true spent amount in the pseudo-output commitment allows the real ring member's amount to cancel cleanly without exposing it."
  },
  {
    id: 16,
    type: "single",
    question:
      "In RingCT, the pseudo output commitment is compared to each ring member to show that one (C' - C*) of them commits to zero.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" }
    ],
    correct: ["a"],
    explanation:
      "True. For the true spent output in the ring, its amount equals the pseudo-output commitment's amount, so subtracting C* cancels the amount term (aH - aH = 0), yielding a commitment to zero."
  },
  {
    id: 17,
    type: "multiple",
    question: "What are the uses of ring signatures?",
    options: [
      { id: "a", text: "Signing transactions for a one-time output address K°" },
      { id: "b", text: "Decrypting the recipient's private spend key" },
      { id: "c", text: "Proving the correctness of key image" },
      {
        id: "d",
        text: "Linking output commitments in a ring with the pseudo-output commitment"
      },
      { id: "e", text: "Replacing range proofs for negative amounts" },
      { id: "f", text: "Guaranteeing instant block finality" }
    ],
    correct: ["a", "c", "d"],
    explanation:
      "Ring signatures prove authorization for one member of a set without revealing which member—used for signing for K°, tying the key image to the spent output, and signing over commitment differences with the pseudo-output commitment."
  },
  {
    id: 18,
    type: "single",
    question:
      'In Ring Confidential Transactions (RingCT), what serves as the "public keys" used inside the ring signature loop for a given input?',
    options: [
      { id: "a", text: "The raw wallet addresses of the senders from previous transactions" },
      {
        id: "b",
        text: "The difference obtained by subtracting the input's pseudo output commitment from each prior output commitment in the ring"
      },
      { id: "c", text: "The total sum of all new output commitments created in the transaction" },
      { id: "d", text: "The secret blinding factors chosen by the recipient of the transaction" }
    ],
    correct: ["b"],
    explanation:
      'For each member in an input\'s ring, the system subtracts the input\'s pseudo output commitment from that prior output commitment. These resulting differences act as the "public keys" of the ring signature. For the one real spent output in the ring, the committed amounts match and cancel out, allowing the sender to complete the ring signature loop without revealing which ring member was actually spent.'
  },
  {
    id: 19,
    type: "single",
    question: "In Transaction Inputs and Outputs, both log(G) and log_G(H) are known.",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" }
    ],
    correct: ["b"],
    explanation:
      "False. If log_G(H) were known, anyone could compute arbitrary openings for a Pedersen commitment and break its binding property."
  },
  {
    id: 20,
    type: "single",
    question: "What commitment is used to create a fee f?",
    options: [
      { id: "a", text: "Commit(0, f) = fH" },
      { id: "b", text: "Commit(f, 0) = fG" },
      { id: "c", text: "Commit(f, f) = fG + fH" },
      { id: "d", text: "Commit(0, 0) = 0" }
    ],
    correct: ["a"],
    explanation:
      "Because the fee f is explicit/public, its blinding factor is 0, giving Commit(0, f) = 0·G + fH = fH."
  },
  {
    id: 21,
    type: "multiple",
    question: "When including a fee in a transaction, how does the transaction change?",
    options: [
      { id: "a", text: "∑a_i + ∑a_j = f" },
      { id: "b", text: "Fees are hidden inside decoy outputs" },
      { id: "c", text: "∑a_i - ∑a_j = f" },
      { id: "d", text: "∑C_i* + ∑C_j = 0" },
      { id: "e", text: "∑C_i* - ∑C_j = fH" }
    ],
    correct: ["c", "e"],
    explanation:
      "The difference between total input amounts and total output amounts equals the fee f (∑a_i - ∑a_j = f), and in commitment form the difference between pseudo-output commitments and output commitments equals fH (∑C_i* - ∑C_j = fH)."
  },
  {
    id: 22,
    type: "single",
    question: "A Key Image binds to...",
    options: [
      {id: "a", text: "the public view key"},
      {id: "b", text: "the secret view key"},
      {id: "c", text: "the public spend key"},
      {id: "d", text: "the secret spend key"}
    ],
    correct: ["d"],
    explanation: 
      "It binds to the private spend key of that specific output. If the ouput has already been spent, the key image will be identical to the one already on the blockchain and the transaction will be rejected."
  },
  {
    id: 23,
    type: "Single",
    question: "Nodes check that the sum of pseudo-output commitments equals ...",
    options: [
      {id: "a", text: "the sum of new output commitments plus the fee."},
      {id: "b", text: "the key image's output amount."},
      {id: "c", text: "the sum of prior transactions."},
      {id: "d", text: "the sum of new output commitments."}
    ],
    correct: ["a"],
    explanation: "For each spent input, the sneder creates a pseudo output commitment committing to the same value aas the real spent input. The  ring signature proves at least one transcations in the ring commits to the same value as the pseudo output commitment. Nodes then check that the sum of all pseudo output commitments is equal the sum of new transaction output plus the fee. "
  }
];
