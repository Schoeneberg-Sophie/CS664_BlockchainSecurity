const quizData_08 = [
  {
    id: 1,
    type: "multiple",
    question: "What is not an acceptable output in a Schnorr Protocol?",
    options: [
      { id: "a", text: "Output (c,r)" },
      { id: "b", text: "Output (aG, r)" },
      { id: "c", text: "Ouput(a,r)" },
      { id: "d", text: "Output (K,r)" }
    ],
    correct: ["c", "d"],
    explanation: "You can never output the secret random nonce a because an attacker can use it to instantly compute your private key (k = (a - r)/c). Outputting just the public key K and response r lacks the commitment link entirely, making verification impossible. Acceptable valid outputs are either the commitment point and response (aG, r) or the challenge and response (c, r)."
  },
  {
    id: 2,
    type: "multiple",
    question: "For any given address K°, how does computing the response change?:",
    options: [
      { id: "a", text: "r = a + c * k°" },
      { id: "b", text: "r =  a - c * k°" },
      { id: "c", text: "r = a * k° - c" },
      { id: "d", text: "r = a + c * k°" }
    ],
    correct: ["b", "d"],
    explanation: "The response calculation relies on combining the ephemeral random nonce a with the product of the challenge c and the secret key k°. Depending on the specific algebraic layout of the protocol, it follows either r = a - c * k° or r = a + c * k°."
  },
  {
    id: 3,
    type: "single",
    question: "True or false: a message is m  in {0 ,…, l}",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" }
    ],
    correct: ["b"],
    explanation: "In cryptographic protocols, messages m are treated as arbitrary bitstrings (or elements mapped via a hash function), whereas scalars like challenges, nonces, and secret keys belong to a finite field of integers modulo the curve order (Z_q)."
  },
  {
    id: 4,
    type: "multiple",
    question: "In Monero, a transaction input references a previous output, here:",
    options: [
      { id: "a", text: "an output address (K°, rG)" },
      { id: "b", text: "an output address Hash(K°, rG)G" },
      { id: "c", text: "an output address (K°, cK°)" },
      { id: "d", text: "an output address (K°, tau*G)" }
    ],
    correct: ["a", "d"],
    explanation: "Transaction inputs in a ring signature bundle the target public key/stealth address K° along with the response component expressed as a curve point (tau*G or rG, where tau or r is the response scalar)."
  },
  {
    id: 5,
    type: "multiple",
    question: "What are ring signatures used for?",
    options: [
      { id: "a", text: "to encrypt the message content for the reciπent" },
      { id: "b", text: "to conceal which output address has been used" },
      { id: "c", text: "to provide signature for K° without revealing K°" },
      { id: "d", text: "to speed up blockchain consensus times" }
    ],
    correct: ["b", "c"],
    explanation: "Ring signatures provide signer anonymity by grouπng a real public key with multiple foreign decoy keys, making it impossible for an observer to tell which member of the ring actually authorized the transaction."
  },
  {
    id: 6,
    type: "multiple",
    question: "Switching from a single signature to a ring signature, which elements change?",
    options: [
      { id: "a", text: "K° becomes K°1, ..., K°N" },
      { id: "b", text: "c becomes c1, ..., cn" },
      { id: "c", text: "The private key k is multiplied by n" },
      { id: "d", text: "r becomes r1, ..., rn" }
    ],
    correct: ["a", "b", "d"],
    explanation: "A ring signature scales up all per-user variables into a set across n participants: the single public key becomes a set of keys R, the single challenge expands into a circular chain of challenges (c1, ..., cn), and each member requires a corresponding response scalar (r1, ..., rn)."
  },
  {
    id: 7,
    type: "single",
    question: "The formula c2 = H(m, r1G + c1K°1) is ...",
    options: [
      { id: "a", text: "correct" },
      { id: "b", text: "incorrect" }
    ],
    correct: ["a"],
    explanation: "This is the standard recurrence relation for advancing the challenge hash chain in a ring signature, binding the message m, the ring parameters, and the verification check of step 1 into the next challenge c2."
  },
  {
    id: 8,
    type: "single",
    question: "The formula c1 = H(m, r1G + c1K°1) is ...",
    options: [
      { id: "a", text: "correct" },
      { id: "b", text: "incorrect" }
    ],
    correct: ["b"],
    explanation: "c1 is the starting anchor challenge of the entire ring. You cannot define c1 as a direct hash function output of r1 and c1 itself without creating a broken circular dependency; c1 is wrapped around from the very last step (cn)."
  },
  {
    id: 9,
    type: "single",
    question: "In a ring signature, every other address / public key K°i not used as the actual address is...",
    options: [
      { id: "a", text: "a decoy key" },
      { id: "b", text: "a master root key" },
      { id: "c", text: "a burn address key" },
      { id: "d", text: "an invalid dummy coordinate" }
    ],
    correct: ["a"],
    explanation: "Keys belonging to other users pulled from the blockchain history act as decoys (or mixins) to mask the identity of the true signer."
  },
  {
    id: 10,
    type: "multiple",
    question: "The more decoy keys are in a ring signature...",
    options: [
      { id: "a", text: "the faster the transaction processes" },
      { id: "b", text: "the more computationally expensive it is" },
      { id: "c", text: "the lower the risk of an attacker deanonymising the user" },
      { id: "d", text: "the smaller the transaction size on the blockchain" }
    ],
    correct: ["b", "c"],
    explanation: "Increasing the ring size widens the anonymity set, strengthening privacy against tracking, but linearly increases the data size and cryptographic verification overhead for nodes."
  },
  {
    id: 11,
    type: "single",
    question: "In a ring signature, decoy keys are:",
    options: [
      { id: "a", text: "mathematically computed and artificial" },
      { id: "b", text: "taken from other users" },
      { id: "c", text: "generated randomly by the user's wallet software" },
      { id: "d", text: "hardcoded protocol constants" }
    ],
    correct: ["b"],
    explanation: "Decoys must be real, historical public keys from the blockchain ledger so they blend in indistinguishably with valid outputs."
  },
  {
    id: 12,
    type: "single",
    question: "What does R describe here?",
    image: "original/ring_sgnatures.png",
    options: [
      { id: "a", text: "{K°1, ..., K°n}" },
      { id: "b", text: "{K°_π}" },
      { id: "c", text: "{r1, ..., rn}" },
      { id: "d", text: "{c1, ..., cn}" }
    ],
    correct: ["a"],
    explanation: "R represents the complete set or vector of all public keys (both real and decoy) included in the ring."
  },
  {
    id: 13,
    type: "single",
    question: "In ring signatures, whats the first step?",
    options: [
      { id: "a", text: "compute the real response r_π immediately" },
      { id: "b", text: "broadcast the transaction to the mempool" },
      { id: "c", text: "hash the private key against the message" },
      { id: "d", text: "create a secret a and fake response r" }
    ],
    correct: ["d"],
    explanation: "To build the ring, the signer starts by drawing random responses for all decoy positions and setting up their own ephemeral nonce a at position π."
  },
  {
    id: 14,
    type: "single",
    question: "For a response i != π, why is i not allowed to be π?",
    options: [
      { id: "a", text: "Because index π is reserved exclusively for the real signer's calculated response using their private key." },
      { id: "b", text: "Because decoy loops must always start at index 0." },
      { id: "c", text: "Because index π represents a checksum value." },
      { id: "d", text: "There is no restriction; π can be any index." }
    ],
    correct: ["a"],
    explanation: "Index π designates the true signer's position. Decoys use randomly sampled fake responses, whereas position π requires a precise mathematical gap-closing calculation using the secret key k_π."
  },
  {
    id: 15,
    type: "single",
    question: "In ring signatures, how is c_i+1 computed?",
    options: [
      { id: "a", text: "c_i+1 = H(r_i, c_i)" },
      { id: "b", text: "c_i+1 = H(R, m, riG + ciK°)" },
      { id: "c", text: "c_i+1 = H(R, m, riG + ciK°i)" },
      { id: "d", text: "c_i+1 = H(m, aG)" }
    ],
    correct: ["c"],
    explanation: "Each step in the ring chain advances by hashing the ring set R, the message m, and the re-combined verification point specific to that index node K°i."
  },
  {
    id: 16,
    type: "single",
    question: "In ring signatures, how is the gap closed?:",
    options: [
      { id: "a", text: "by knowing the secret key k to compute the correct r based on a given c" },
      { id: "b", text: "by knowing the secret key k to compute the correct a based on a given c" },
      { id: "c", text: "by looπng through the hash function until a collision is found" },
      { id: "d", text: "by setting all decoy responses to zero" }
    ],
    correct: ["a"],
    explanation: "The signer uses their secret key k to solve for their specific response r_π (e.g., a = r_π + c_π * k_π°), which bridges the open gap in the circular challenge chain."
  },
  {
    id: 17,
    type: "single",
    question: "In ring signatures, what is handed to the verifier as proof?",
    options: [
      { id: "a", text: "The raw private key k" },
      { id: "b", text: "the signatures (c1, r1, ... rn)" },
      { id: "c", text: "The random nonce a and all intermediate hash points" },
      { id: "d", text: "The list of all decoy private keys" }
    ],
    correct: ["b"],
    explanation: "The compact proof handed to the verifier consists entirely of the starting challenge c1 and the full array of responses (r1, ..., rn)."
  },
  {
    id: 18,
    type: "single",
    question: "Why are key images necessary?",
    options: [
      { id: "a", text: "a key generates a unique key image that prevents double spending" },
      { id: "b", text: "They compress the size of the public key ring." },
      { id: "c", text: "They encrypt the transaction amount." },
      { id: "d", text: "They replace public keys entirely." }
    ],
    correct: ["a"],
    explanation: "Key images act as a deterministic tag linked to a specific private key, ensuring that if a user tries to spend the same output twice, the duplicate key image is flagged on-chain."
  },
  {
    id: 19,
    type: "single",
    question: "How is a key image generated?",
    options: [
      { id: "a", text: "K* := k° * G" },
      { id: "b", text: "K* := H(K°)" },
      { id: "c", text: "K* := k° * H_P(K°)" },
      { id: "d", text: "K* := r * G + c * K°" }
    ],
    correct: ["c"],
    explanation: "A key image is computed by multiplying the private key scalar k° by the hash-to-point output of the public key H_P(K°)."
  },
  {
    id: 20,
    type: "single",
    question: "A key image is generated as such: K* := k° H_P(K°). What is the difference between using H and H_P?",
    options: [
      { id: "a", text: "H outputs elliptic curve points while H_P outputs integers." },
      { id: "b", text: "H_P maps Elliptical Curve points to Elliptical Curve points, while H maps EC points to integers" },
      { id: "c", text: "H_P is a private hash function whereas H is public." },
      { id: "d", text: "There is no mathematical difference." }
    ],
    correct: ["b"],
    explanation: "H_P (Hash-to-Point) is a specialized cryptographic hash that lands precisely on the elliptic curve structure, whereas regular cryptographic hash functions (H) output raw scalar bit arrays."
  },
  {
    id: 21,
    type: "single",
    question: "A ring signature without key images looks like this: ci+1 = H(m, riG + ciK°i). What changes when adding a key image?",
    options: [
      { id: "a", text: "Nothing changes in the hash function." },
      { id: "b", text: "ci+1 = H(m, riG + ciK°i, riH_P(K°i))" },
      { id: "c", text: "ci+1 = H(m, riG + ciK°i, ciK*)" },
      { id: "d", text: "ci+1 = H(m, riG + ciK°i, riH_P(K°i) + ciK*)" }
    ],
    correct: ["d"],
    explanation: "Linkable ring signatures extend each step of the challenge hash to include a second parallel verification track containing both the response contribution to the hash-to-point term and the scaled key image term (ri * H_P(K°i) + ci * K*)."
  },
  {
    id: 22,
    type: "single",
    question: "When creating a signature with a key image, what is changed compared to ring signatures with no key image?",
    options: [
      { id: "a", text: "The message length must be doubled." },
      { id: "b", text: "together with the secret a and the fake response ri, a key image K* := k° H_P(K°) needs to be computed" },
      { id: "c", text: "All decoy public keys must be encrypted." },
      { id: "d", text: "ci+1 is computed such that = H(m, riG + ciK°i, riH_P(K°i) + ciK*)" }
    ],
    correct: ["b"],
    explanation: "The core structural addition of linkability is computing and publishing the unique key image K* so verifiers can check against double-spends."
  },
  {
    id: 23,
    type: "multiple",
    question: "A ring signature proves that the signer knows the secret k such that for some index π:",
    options: [
      { id: "a", text: "kG = K°π" },
      { id: "b", text: "k * H_P(K°π) = K*" },
      { id: "c", text: "k + G = K*" },
      { id: "d", text: "k * c = a" }
    ],
    correct: ["a", "b"],
    explanation: "The proof simultaneously guarantees ownership of the public key in the ring (k * G = K°π) and correct derivation of the tracking key image (k * H_P(K°π) = K*)."
  }
];
