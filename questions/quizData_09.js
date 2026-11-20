const quizData_09 = [
  {
    id: 1,
    question: "What is not a property of a commitment?",
    options: {
      a: "hiding",
      b: "binding",
      c: "revealing (unhiding)",
      d: "malleability (non-binding)"
    },
    correct: ["c", "d"],
    explanation:
      "Hiding and binding are the two fundamental properties of a cryptographic commitment scheme. Revealing the secret prematurely or allowing a commitment to be altered/re-opened to a different value violates these properties."
  },
  {
    id: 2,
    question: "What security issue arises from a simple commitment Commit(a) = aG?",
    options: {
      a: "It violates the hiding property when 'a' comes from a limited or predictable range",
      b: "It prevents any cryptographic signature from being verified",
      c: "The attacker can guess various values of a' to expose the secret",
      d: "It makes addition over the elliptic curve impossible"
    },
    correct: ["c"],
    explanation:
      "With Commit(a) = aG on a known generator G, an observer can test candidate amounts a' by computing a'G and comparing them to the commitment, breaking the hiding property when the value space is small or guessable."
  },
  {
    id: 3,
    question: "What other factor is added in a commitment to hide the transaction amount?",
    options: {
      a: "A one-time destination address K°",
      b: "A key image I",
      c: "A public transaction fee f",
      d: "A blinding factor x"
    },
    correct: ["d"],
    explanation:
      "A Pedersen commitment Commit(x, a) = xG + aH introduces a random blinding factor x (using a second generator H) so the same amount a can produce many different commitments, preventing brute-force guessing."
  },
  {
    id: 4,
    question: "What would a published transaction look like?",
    options: {
      a: "K°, rG, Commit(x, a), α",
      b: "K°, rG, a, α",
      c: "k_o, rG, Commit(x, a), α",
      d: "K°, rH, Commit(0, a), α"
    },
    correct: ["a"],
    explanation:
      "A published output includes the one-time stealth address (K°), the transaction public key (rG), the Pedersen commitment to the amount (Commit(x, a)), and encoded data (α) that helps the recipient recover the amount and blinding factor."
  },
  {
    id: 5,
    question: "How is the blinding factor x computed?",
    options: {
      a: "x = k_o * G",
      b: "x = rK^r_R",
      c: "x = H(K°) * a",
      d: "x = 0"
    },
    correct: ["b"],
    explanation:
      "Using the transaction random scalar r and the recipient's key component K^r_R, the shared secret rK^r_R (typically hashed into a scalar in RingCT implementations) allows deterministic derivation of the blinding factor x for the recipient."
  },
  {
    id: 6,
    question: "In a published transaction K°, rG, Commit(x, a), α, why is α necessary?",
    options: {
      a: "It carries the masked/encrypted amount information needed by the recipient",
      b: "Together with rK^v_R it determines 'a' (the amount of the transaction)",
      c: "It replaces the need for all signatures in the transaction",
      d: "It proves that the key image has never been used before"
    },
    correct: ["a", "b"],
    explanation:
      "Because Commit(x, a) hides the amount from public observers, the recipient needs α along with the ECDH shared secret derived from rK^v_R to unmask and read the transaction amount a."
  },
  {
    id: 7,
    question: "In which part of the transaction are Pedersen commitments included?",
    options: {
      a: "Only in coinbase rewards",
      b: "In the transaction inputs",
      c: "In the transaction outputs",
      d: "In both transaction inputs and outputs"
    },
    correct: ["d"],
    explanation:
      "Pedersen commitments are used across both transaction inputs (via prior output commitments / pseudo-output commitments) and new outputs so that input and output values can be verified to balance without exposing amounts."
  },
  {
    id: 8,
    question: "Linking output commitments, how is equality proven?",
    options: {
      a: "By showing that C' of the previous transaction output equals C of the current transaction output (they commit to the same amount)",
      b: "By publishing the blinding factors x and x' in plaintext",
      c: "By setting all blinding factors to 1",
      d: "It holds that the sender knows log_G(C - C') = (x - x')"
    },
    correct: ["d"],
    explanation:
      "If C = xG + aH and C' = x'G + a'H commit to the same amount (a = a'), the H terms cancel in C - C' = (x - x')G. Proving knowledge of the discrete logarithm (x - x') with respect to G proves equality without revealing a or x."
  },
  {
    id: 9,
    question: "When proving that output transactions C' and C commit to the same amount a, which protocols/primitives are used?",
    options: {
      a: "Diffie-Hellman key exchange",
      b: "Schnorr protocol",
      c: "Pedersen commitment",
      d: "Proof-of-Work"
    },
    correct: ["b", "c"],
    explanation:
      "Pedersen commitments provide additive homomorphic structure, while a Schnorr protocol (or Schnorr-based proof of knowledge) proves knowledge of the secret scalar (x - x') without disclosing it."
  },
  {
    id: 10,
    question: "Why can a simple output commitment not be used naively in a ring signature?",
    options: {
      a: "Elliptic curve commitments cannot be subtracted",
      b: "Ring signatures only work when amounts are unencrypted",
      c: "It prevents miners from checking block timestamps",
      d: "It reveals which two commitments commit to log_G(C - C'_π) = (x - x'), thus revealing the amount"
    },
    correct: ["d"],
    explanation:
      "If commitment differences expose which specific prior commitment matches the spent amount or link cleanly across transactions without ring/pseudo-output masking, observers can infer amounts and spending relationships."
  },
  {
    id: 11,
    question: "How does a pseudo-output commitment ensure anonymity for transactions?",
    options: {
      a: "By hiding which transaction outputs commit to log_G(C - C'_π) = (x - x')",
      b: "By publishing all input and output amounts in cleartext",
      c: "By using the same blinding factor for every user on the network",
      d: "By removing decoy outputs from transaction inputs"
    },
    correct: ["a"],
    explanation:
      "A pseudo-output commitment commits to the actual spent amount using its own blinding factor, letting the sender form differences across every member of the ring so observers cannot tell which ring member cancels out the amount."
  },
  {
    id: 12,
    question: "In Ring Confidential Transactions (RingCT)...",
    options: {
      a: "Transaction amounts are always visible to all network nodes",
      b: "A transaction with N transaction inputs has N rings of p previous outputs",
      c: "In each ring, there is exactly one pseudo-output commitment",
      d: "Each ring n has one real transaction output plus decoys referring to the transaction input",
      e: "In each input, there is exactly one pseudo-output commitment"
    },
    correct: ["b", "d", "e"],
    explanation:
      "Each of the N inputs has a ring of p prior outputs (1 real spent output and p - 1 decoys) and one pseudo-output commitment associated with that input to prove balance for that input."
  },
  {
    id: 13,
    question: "In RingCT...",
    options: {
      a: "The ring hides which past output the user spent",
      b: "Key images are intentionally reused across spends to link inputs",
      c: "The pseudo-output commitment proves how much a user is spending from that input so the transaction balances",
      d: "Range proofs are unnecessary because amounts cannot be negative"
    },
    correct: ["a", "c"],
    explanation:
      "Rings conceal which past output is actually spent among decoys, while pseudo-output commitments (together with balance checks and range proofs) prove the spent amount matches the transaction outputs without revealing it."
  },
  {
    id: 14,
    question: "The primary purpose of Pseudo-Output Commitments is...",
    options: {
      a: "To replace one-time stealth addresses",
      b: "To select the block producer",
      c: "To eliminate the need for key images",
      d: "To prove that the sum of inputs = sum of outputs (transaction balance)"
    },
    correct: ["d"],
    explanation:
      "Pseudo-output commitments bridge input rings and output commitments so nodes can verify conservation of value (sum of inputs equals sum of outputs plus any fee) while keeping amounts hidden."
  },
  {
    id: 15,
    question: "The pseudo-output commitment is necessary because...",
    options: {
      a: "All outputs in a ring are guaranteed to have the exact same amount",
      b: "The transaction amounts in the ring differ, so the pseudo-output commitment always includes the real value of the transaction (without revealing it)",
      c: "Pedersen commitments cannot commit to positive integers",
      d: "Ring signatures cannot sign over elliptic curve points"
    },
    correct: ["b"],
    explanation:
      "Decoy outputs in a ring generally have different amounts from the real spent output. Committing to the true spent amount in the pseudo-output commitment allows the real ring member's amount to cancel cleanly without exposing it."
  },
  {
    id: 16,
    question: "In RingCT, the pseudo-output commitment is compared to each ring member to show that one (C' - C*) of them commits to zero.",
    options: {
      a: "TRUE",
      b: "FALSE"
    },
    correct: ["a"],
    explanation:
      "True. For the true spent output in the ring, its amount equals the pseudo-output commitment's amount, so subtracting C* cancels the amount term (aH - aH = 0), yielding a commitment to zero."
  },
  {
    id: 17,
    question: "What are the uses of ring signatures?",
    options: {
      a: "Signing transactions for a one-time output address K°",
      b: "Decrypting the recipient's private spend key",
      c: "Proving the correctness of the key image",
      d: "Linking output commitments in a ring with the pseudo-output commitment",
      e: "Replacing range proofs for negative amounts",
      f: "Guaranteeing instant block finality"
    },
    correct: ["a", "c", "d"],
    explanation:
      "Ring signatures prove authorization for one member of a set without revealing which member—used for signing for K°, tying the key image to the spent output, and signing over commitment differences with the pseudo-output commitment."
  },
  {
    id: 18,
    question: "In Ring Confidential Transactions (RingCT), what serves as the \"public keys\" used inside the ring signature loop for a given input?",
    options: {
      a: "The raw wallet addresses of the senders from previous transactions",
      b: "The difference obtained by subtracting the input's pseudo output commitment from each prior output commitment in the ring",
      c: "The total sum of all new output commitments created in the transaction",
      d: "The secret blinding factors chosen by the recipient of the transaction"
    },
    correct: ["b"],
    explanation:
      "For each member in an input's ring, the system subtracts the input's pseudo output commitment from that prior output commitment. These resulting differences act as the \"public keys\" of the ring signature. For the one real spent output in the ring, the committed amounts match and cancel out, allowing the sender to complete the ring signature loop without revealing which ring member was actually spent."
  },
  {
    id: 19,
    question: "In Transaction Inputs and Outputs, both log(G) and log_G(H) are known.",
    options: {
      a: "TRUE",
      b: "FALSE"
    },
    correct: ["b"],
    explanation:
      "False. If log_G(H) were known, anyone could compute arbitrary openings for a Pedersen commitment and break its binding property."
  },
  {
    id: 20,
    question: "What commitment is used to create a fee f?",
    options: {
      a: "Commit(0, f) = fH",
      b: "Commit(f, 0) = fG",
      c: "Commit(f, f) = fG + fH",
      d: "Commit(0, 0) = 0"
    },
    correct: ["a"],
    explanation:
      "Because the fee f is explicit/public, its blinding factor is 0, giving Commit(0, f) = 0·G + fH = fH."
  },
  {
    id: 21,
    question: "When including a fee in a transaction, how does the transaction change?",
    options: {
      a: "∑a_i + ∑a_j = f",
      b: "Fees are hidden inside decoy outputs",
      c: "∑a_i - ∑a_j = f",
      d: "∑C_i* + ∑C_j = 0",
      e: "∑C_i* - ∑C_j = fH"
    },
    correct: ["c", "e"],
    explanation:
      "The difference between total input amounts and total output amounts equals the fee f (∑a_i - ∑a_j = f), and in commitment form the difference between pseudo-output commitments and output commitments equals fH (∑C_i* - ∑C_j = fH)."
  }
];
