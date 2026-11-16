// Quiz data for lecture 7 (Monero) - Blockchain Security
// Types: "single" (one correct option), "multiple" (several correct options),
// "matching" (pairs "target-item", e.g. "1-a"; one item can belong to several targets).
// Notation: K = public key, k = private key, G = generator, l = group order,
// ∘ / + = group operation, c*P = P + ... + P (c times).

const quizData_07 = {
  lecture: 7,
  title: "Lecture 7 (Monero)",
  questions: [
    {
      id: 1,
      type: "single",
      question: "Compared to Bitcoin, what are the advantages of Monero?",
      options: [
        { id: "a", text: "A hard cap of 21 million coins and no tail emission" },
        { id: "b", text: "A fully transparent ledger, so every transaction can be audited by anyone" },
        { id: "c", text: "Stronger privacy guarantees" },
        { id: "d", text: "It replaces proof of work with proof of stake" }
      ],
      correct: ["c"],
      explanation:
        "Monero hides the sender (ring signatures), the recipient (stealth addresses) and the amount (RingCT) by default, while Bitcoin transactions are publicly traceable. Option a describes Bitcoin (Monero has a tail emission), b is the opposite of Monero's goal, and d is wrong because Monero uses proof of work (RandomX)."
    },
    {
      id: 2,
      type: "matching",
      question: "Map the tool to the correct goal (multiples are possible):",
      items: [
        { id: "a", text: "Ring signature" },
        { id: "b", text: "Ring confidential transactions" },
        { id: "c", text: "Stealth addresses" },
        { id: "d", text: "Key images" },
        { id: "e", text: "Pseudo output commitment" },
        { id: "f", text: "Range proof" },
        { id: "g", text: "One-time address" }
      ],
      targets: [
        { id: "1", text: "Obfuscate sender" },
        { id: "2", text: "Obfuscate recipient" },
        { id: "3", text: "Detect double spending" },
        { id: "4", text: "Obfuscate transaction amount" }
      ],
      correct: ["1-a", "2-c", "2-g", "3-d", "4-b", "4-e", "4-f"],
      explanation:
        "Ring signatures hide which ring member is the real sender. Stealth addresses and the one-time addresses derived from them hide the recipient. Key images are unique per spent output, so a second spend of the same output produces the same key image and is detected. RingCT hides amounts; its building blocks are pseudo output commitments (they hide the input amount while letting verifiers check that inputs equal outputs plus fee) and range proofs (they show that hidden amounts are non-negative and cannot overflow)."
    },
    {
      id: 3,
      type: "single",
      question: "What is an MLSAG signature?",
      options: [
        { id: "a", text: "A hash function that compresses the transaction data" },
        { id: "b", text: "A signature that ensures authenticity: it proves that the signer is one of the ring members without revealing which one" },
        { id: "c", text: "A commitment scheme that hides the transaction amount" },
        { id: "d", text: "A one-time address that hides the recipient" }
      ],
      correct: ["b"],
      explanation:
        "MLSAG (Multilayered Linkable Spontaneous Anonymous Group signature) is a ring signature used in RingCT. It proves authenticity of the spender without revealing the real input, and it is linkable through the key image. Option a is a hash function, c describes Pedersen commitments, and d describes stealth addresses. Note: current Monero uses the more compact CLSAG instead of MLSAG, but the idea is the same."
    },
    {
      id: 4,
      type: "multiple",
      question: "What belongs into the Monero transaction input?",
      options: [
        { id: "a", text: "One-time address"
