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
        { id: "a", text: "One-time address" },
        { id: "b", text: "Ring member offset" },
        { id: "c", text: "Range proof" },
        { id: "d", text: "MLSAG signature" },
        { id: "e", text: "Key image" },
        { id: "f", text: "Pseudo output commitment" }
      ],
      correct: ["b", "d", "e", "f"],
      explanation:
        "The input references the ring members (offsets), contains the key image that marks the spent output, the pseudo output commitment for the spent amount and the MLSAG signature that proves the spend. One-time address and range proof belong to the outputs."
    },
    {
      id: 5,
      type: "multiple",
      question: "What belongs to the Monero transaction output?",
      options: [
        { id: "a", text: "One-time address" },
        { id: "b", text: "Output commitment" },
        { id: "c", text: "MLSAG signature" },
        { id: "d", text: "Range proof" },
        { id: "e", text: "Encoded transaction amount" }
      ],
      correct: ["a", "b", "d", "e"],
      explanation:
        "Each output has a one-time address (recipient), a commitment to the amount, a range proof for that commitment and the amount encoded so that only the recipient (with the view key) can decrypt it. The MLSAG signature belongs to the inputs. Note: current Monero uses Bulletproofs(+) as compact range proofs."
    },
    {
      id: 6,
      type: "single",
      question: "Which of the following is NOT a property of a mathematical group (set)?",
      options: [
        { id: "a", text: "Inverse element" },
        { id: "b", text: "Associativity" },
        { id: "c", text: "Commutativity" },
        { id: "d", text: "Identity element" },
        { id: "e", text: "Closure" }
      ],
      correct: ["c"],
      explanation:
        "A group requires closure, associativity, an identity element and inverse elements. Commutativity is only required for abelian groups, so it is not part of the general definition (the elliptic curve groups used in Monero happen to be abelian)."
    },
    {
      id: 7,
      type: "matching",
      question: "Map the correct definition to the corresponding property:",
      items: [
        { id: "a", text: "For all A, B ∈ Γ, the result of the operation A ∘ B is also in the set Γ" },
        { id: "b", text: "For all A, B, C ∈ Γ it holds that (A ∘ B) ∘ C = A ∘ (B ∘ C)" },
        { id: "c", text: "For each A ∈ Γ there exists an element A* ∈ Γ such that A ∘ A* = A* ∘ A = E (where E is the identity element)" },
        { id: "d", text: "There exists an element E ∈ Γ such that for every element A ∈ Γ, E ∘ A = A ∘ E = A holds" }
      ],
      targets: [
        { id: "1", text: "Associativity" },
        { id: "2", text: "Inverse element" },
        { id: "3", text: "Closure" },
        { id: "4", text: "Identity element" }
      ],
      correct: ["1-b", "2-c", "3-a", "4-d"],
      explanation:
        "a is closure (the result stays in the set), b is associativity (brackets do not matter), c is the inverse element (combining A with A* gives the identity E), d is the identity element (E leaves every element unchanged)."
    },
    {
      id: 8,
      type: "single",
      question:
        "Let Γ be a cyclic group with generator G, written Γ = <G>. Which statement about the discrete logarithm is correct?",
      options: [
        { id: "a", text: "The discrete logarithm of H to the basis G is the generator G itself." },
        { id: "b", text: "The discrete logarithm of H to the basis G is the non-negative integer c for which H = G ∘ G ∘ … ∘ G (c times), written c = log_G(H)." },
        { id: "c", text: "The discrete logarithm of H to the basis G is the number of elements in Γ." },
        { id: "d", text: "The discrete logarithm of H to the basis G is the element obtained by combining H with itself c times." }
      ],
      correct: ["b"],
      explanation:
        "Since Γ is cyclic, every element H in Γ can be reached by applying the group operation to the generator G a certain number of times. That number c is the discrete logarithm of H to the basis G. Option a mixes up the basis with the exponent. Option c describes the order of the group, which is a different quantity. Option d reverses the roles: it is G that gets combined with itself, not H."
    },
    {
      id: 9,
      type: "multiple",
      question: "With respect to the Discrete Logarithm Problem (DLP), what is given and what is the task?",
      options: [
        { id: "a", text: "Given: a randomly chosen H ∈ Γ" },
        { id: "b", text: "Task: find H ∈ Γ" },
        { id: "c", text: "Given: a chosen log_G(H)" },
        { id: "d", text: "Task: find log_G(H)" }
      ],
      correct: ["a", "d"],
      explanation:
        "In the DLP the group and the generator G are known and a random element H is given. The task is to find the exponent c = log_G(H) with c*G = H. Computing H from a known exponent is easy (scalar multiplication), so b and c describe the easy direction."
    },
    {
      id: 10,
      type: "multiple",
      question: "An elliptic curve is...",
      options: [
        { id: "a", text: "the set of all real numbers x for which equation (*) holds" },
        { id: "b", text: "a closed curve that always contains exactly P points" },
        { id: "c", text: "the set of all pairs (x, y) ∈ Z_P × Z_P for which equation (*) holds" },
        { id: "d", text: "extended by a special point 0 (the point at infinity), which is not one of these pairs and serves as the neutral element" }
      ],
      correct: ["c", "d"],
      explanation:
        "Over a finite field, an elliptic curve consists of all pairs (x, y) in Z_P × Z_P that satisfy the curve equation (*), for example y² = x³ + ax + b mod P, plus the special point 0 at infinity as neutral element. Option a is wrong because the points are pairs modulo P, not single real numbers. Option b is wrong because the number of points varies from curve to curve and is only close to P. Note: Monero uses the curve Ed25519 (Edwards form), which follows the same principle."
    },
    {
      id: 11,
      type: "single",
      question: "What is the discrete logarithm problem on an elliptic curve (c*P = P + ... + P, c times)?",
      options: [
        { id: "a", text: "Given P and Q = c*P, find log_P(Q) = c" },
        { id: "b", text: "Given c and P, compute Q = c*P" },
        { id: "c", text: "Given c and Q = c*P, find P" },
        { id: "d", text: "Given P and Q, compute P + Q" }
      ],
      correct: ["a"],
      explanation:
        "The DLP asks for the scalar c when P and Q = c*P are known. Options b and d are efficient to compute (double-and-add, point addition). Option c is also easy in a group of known prime order, because P = c^(-1) * Q."
    },
    {
      id: 12,
      type: "multiple",
      question: "What is NOT true of elliptic curves?",
      options: [
        { id: "a", text: "The point P can represent any real number" },
        { id: "b", text: "Adding two points on the curve yields another point on the curve" },
        { id: "c", text: "The discrete logarithm problem is sufficiently hard for any size of the cyclic group" },
        { id: "d", text: "The scalar multiplication c*P can be computed efficiently, e.g. with double-and-add" }
      ],
      correct: ["a", "c"],
      explanation:
        "A point is a pair of coordinates modulo P, not a real number, so a is false. The DLP is only hard if the group is large enough (and has a suitable structure): in small groups c can be found by brute force, so c is false. Statements b (closure) and d (efficient scalar multiplication) are true."
    },
    {
      id: 13,
      type: "single",
      question: "User A can select a value k_A ∈ {0, …, ℓ−1}. Why not k_A ∈ {0, …, ℓ}?",
      options: [
        { id: "a", text: "Because ℓ is not an integer" },
        { id: "b", text: "Because k_A must be smaller than the number of users" },
        { id: "c", text: "Because the group has size ℓ and starts at 0: ℓ*G is the neutral element, the same as 0*G, so ℓ would only duplicate the first element" },
        { id: "d", text: "Because ℓ*G would be a point outside the group" }
      ],
      correct: ["c"],
      explanation:
        "G has order ℓ, so scalars are taken modulo ℓ and ℓ*G equals the neutral element 0*G. The values 0 to ℓ−1 already cover every group element exactly once; ℓ would give no new element. (In practice k = 0 is excluded too, because the public key would be the neutral element.)"
    },
    {
      id: 14,
      type: "single",
      question: "If k_A = log_G(K_A), then K_A =",
      options: [
        { id: "a", text: "(k_A)G" },
        { id: "b", text: "k_A + G" },
        { id: "c", text: "G / k_A" },
        { id: "d", text: "(k_A)² G" }
      ],
      correct: ["a"],
      explanation:
        "By definition of the discrete logarithm, k_A is the scalar for which K_A = k_A * G = G + ... + G (k_A times). The public key K_A is therefore the private key k_A applied to the generator."
    },
    {
      id: 15,
      type: "single",
      question: "What is the use of the Diffie-Hellman protocol?",
      options: [
        { id: "a", text: "Prove knowledge of a secret key without revealing it" },
        { id: "b", text: "Hide the amount of a transaction" },
        { id: "c", text: "Derive a common secret with other users" },
        { id: "d", text: "Sign a message so that everybody can verify its authenticity" }
      ],
      correct: ["c"],
      explanation:
        "Diffie-Hellman lets two parties derive the same shared secret from their own private key and the other party's public key, without ever sending a secret. Option a describes the Schnorr protocol, b describes RingCT and d describes a signature scheme."
    },
    {
      id: 16,
      type: "single",
      question: "What is the use of the Schnorr protocol?",
      options: [
        { id: "a", text: "Derive a shared secret between two users" },
        { id: "b", text: "Encrypt messages with a public key" },
        { id: "c", text: "Prove knowledge of the secret key k_A without revealing it" },
        { id: "d", text: "Reduce the size of a transaction" }
      ],
      correct: ["c"],
      explanation:
        "The Schnorr protocol is a zero-knowledge proof of knowledge of the private key k_A belonging to a public key K_A. Option a describes Diffie-Hellman; b and d are not goals of the protocol."
    },
    {
      id: 17,
      type: "single",
      question:
        "In the Diffie-Hellman protocol, how do two users obtain a common secret without exchanging their private keys?",
      options: [
        { id: "a", text: "Sending the public key mathematically gives the recipient the private key without revealing it" },
        { id: "b", text: "Both users send their private keys to each other, encrypted with the generator G" },
        { id: "c", text: "A trusted third party hands the same secret key to both users" },
        { id: "d", text: "Each user sends their public key K = k*G, and then multiplies the received public key with their own private key: k_A*K_B = k_A*k_B*G = k_B*K_A" }
      ],
      correct: ["d"],
      explanation:
        "Private keys are never exchanged. Both users compute the same point k_A*k_B*G from their own private key and the other's public key. An eavesdropper only knows K_A and K_B and would have to solve the discrete logarithm problem to recover a private key. Option a is the common misconception: the public key does NOT give away the private key, which is exactly what the DLP guarantees."
    },
    {
      id: 18,
      type: "single",
      question: "What does the Schnorr protocol show?",
      options: [
        { id: "a", text: "That two users share the same public key" },
        { id: "b", text: "That the knowledge of the secret key k_A can be proven without revealing the key" },
        { id: "c", text: "That a transaction amount is non-negative" },
        { id: "d", text: "That a secret key has been exchanged securely" }
      ],
      correct: ["b"],
      explanation:
        "The prover convinces the verifier that he knows k_A with K_A = k_A*G, while the verifier learns nothing about k_A itself (zero knowledge). Option c is the job of a range proof, a and d are not what the protocol proves."
    },
    {
      id: 19,
      type: "single",
      question: "How does the non-interactive Schnorr protocol differ from the interactive one?",
      options: [
        { id: "a", text: "The verifier sends a fresh random challenge for every proof" },
        { id: "b", text: "The prover does not need a secret key" },
        { id: "c", text: "The prover computes the challenge himself by hashing the commitment aG (c = Hash(aG)) instead of receiving it from the verifier" },
        { id: "d", text: "The verifier does not verify whether the prover knows the secret" }
      ],
      correct: ["c"],
      explanation:
        "In the non-interactive version (Fiat-Shamir heuristic) the hash function replaces the verifier's random challenge, so the prover can send one single message (commitment and response). Option a describes the interactive version. The verifier still checks the proof, and the prover still needs the secret key."
    },
    {
      id: 20,
      type: "single",
      question: "In the Schnorr protocol, how is the response computed?",
      options: [
        { id: "a", text: "r = a + c*k" },
        { id: "b", text: "r = a*c*k" },
        { id: "c", text: "r = a + k" },
        { id: "d", text: "r = c − a*k" }
      ],
      correct: ["a"],
      explanation:
        "The response combines the random nonce a, the challenge c and the secret key k: r = a + c*k (mod ℓ). The verifier can check it because r*G = a*G + c*K. Without the nonce a, r would reveal k."
    },
    {
      id: 21,
      type: "multiple",
      question: "How can the Schnorr protocol be cheated?",
      options: [
        { id: "a", text: "By choosing a fresh, uniformly random nonce a for every proof" },
        { id: "b", text: "A user generates their public key after seeing the other party's public key (rogue-key attack)" },
        { id: "c", text: "By reusing the same nonce with the same private key" },
        { id: "d", text: "By hashing the commitment aG together with the public key and the message" },
        { id: "e", text: "A developer omits a critical public parameter from the hash transcript (such as the key image I, the public key P, or the ring members)" },
        { id: "f", text: "By choosing the secret key k_A at random from {0, …, ℓ−1}" }
      ],
      correct: ["b", "c", "e"],
      explanation:
        "Rogue-key attack: if Alice generates her public key after seeing Bob's P_B, she can set P_A = x_A*G − P_B. The aggregated key P_A + P_B = x_A*G is then controlled by Alice alone, so she can spend multisig funds without Bob. Common countermeasures are proofs of possession (each participant proves knowledge of their own secret key before aggregation) or MuSig-style key aggregation with hash coefficients. Nonce reuse: if two different signatures use the same nonce a and the same key k, anyone can solve the two equations r = a + c*k for k and recover the private key. Weak Fiat-Shamir: if a public parameter is missing from the hash, an attacker can pick c and s first and compute R = s*G − c*P, forging a valid proof without knowing the secret key. Options a, d and f are correct practice, not attacks."
    },
    {
      id: 22,
      type: "multiple",
      question: "In the Schnorr protocol, what does the verifier do?",
      options: [
        { id: "a", text: "He computes R = r*G = (a + c*k)*G from the response r and R' = aG + c'*K with c' = Hash(aG), and checks whether R == R'" },
        { id: "b", text: "He computes the secret key k from the response r = a + c*k" },
        { id: "c", text: "He takes the response r = a + c*k from the prover and multiplies the generator point G with it, so that R = r*G" },
        { id: "d", text: "He checks that the response r equals the hash of the public key" }
      ],
      correct: ["a", "c"],
      explanation:
        "The verifier never learns k. He computes r*G from the response and compares it with aG + c'*K, where c' is the (re-computed) challenge. If both points are equal, the prover must have known k. Options b and d do not describe any step of the protocol."
    },
    {
      id: 23,
      type: "single",
      question: "In Monero, what does a stealth address do?",
      options: [
        { id: "a", text: "Obfuscates the sender" },
        { id: "b", text: "Obfuscates the transaction amount" },
        { id: "c", text: "Detects double spending" },
        { id: "d", text: "Obfuscates the recipient" }
      ],
      correct: ["d"],
      explanation:
        "The sender derives a fresh one-time address for each output from the recipient's public view and spend key, so outputs cannot be linked to the recipient's published address. The sender is hidden by ring signatures, amounts by RingCT, and double spending is detected with key images."
    },
    {
      id: 24,
      type: "single",
      question: "Which step is wrong (stealth addresses in Monero)?",
      options: [
        { id: "a", text: "1. The sender receives the two public keys K^v_R and K^s_R of the recipient" },
        { id: "b", text: "2. The sender generates a one-time output address by choosing a random scalar r" },
        { id: "c", text: "3. In addition to r, he sets up the one-time address K° = Hash(r*K^s_R)*G + K^v_R" },
        { id: "d", text: "4. The sender publishes the transaction with K° and the point r*G" },
        { id: "e", text: "5. The recipient checks whether a transaction belongs to him by computing K°' − Hash(k^v_R*(r'*G))*G and comparing it with K^s_R" }
      ],
      correct: ["c"],
      explanation:
        "The correct one-time address is K° = Hash(r*K^v_R)*G + K^s_R: the hash uses the recipient's public VIEW key and is added to the public SPEND key. Step 3 swaps the two keys. This is what allows the recipient to detect the output with the private view key k^v_R (step 5) while only the owner of the spend key can spend it."
    },
    {
      id: 25,
      type: "multiple",
      question: "How can one cheat or attack stealth addresses?",
      options: [
        { id: "a", text: "Reusing the same r" },
        { id: "b", text: "Using a fresh random r for every transaction" },
        { id: "c", text: "Janus attack" },
        { id: "d", text: "Including the output index in the hash that derives the one-time address" },
        { id: "e", text: "Checking that the transaction public key r*G lies in the prime-order subgroup" },
        { id: "f", text: "An attacker injects a low-order point to test whether a key is divisible by a certain small number (small-subgroup / torsion attack)" }
      ],
      correct: ["a", "c", "f"],
      explanation:
        "Reusing r makes outputs linkable or even identical. The Janus attack lets a malicious sender craft outputs so that a recipient cannot tell which of their subaddresses was used, which can link subaddresses of one wallet. Low-order points leak information about a key modulo a small number. Options b, d and e are countermeasures (fresh randomness, binding the output index, rejecting or clearing low-order components), not attacks."
    },
    {
      id: 26,
      type: "multiple",
      question: "What is the role of the view key in Monero?",
      options: [
        { id: "a", text: "Authorize the spending of funds" },
        { id: "b", text: "Decrypt RingCT amounts" },
        { id: "c", text: "Sign transactions" },
        { id: "d", text: "Generate key images" },
        { id: "e", text: "Compute the shared secret from k^v_R and r*G to spot incoming one-time addresses K°" },
        { id: "f", text: "Create range proofs" }
      ],
      correct: ["b", "e"],
      explanation:
        "The private view key lets a wallet detect incoming outputs (via the shared secret) and decrypt their amounts, so it gives read-only access to incoming funds. Spending, signing and key images require the private spend key; range proofs are created by the sender."
    },
    {
      id: 27,
      type: "multiple",
      question: "What is the role of the spend key in Monero?",
      options: [
        { id: "a", text: "Prove ownership" },
        { id: "b", text: "Scan the blockchain for incoming outputs" },
        { id: "c", text: "Decrypt transaction amounts" },
        { id: "d", text: "Ability to spend funds" }
      ],
      correct: ["a", "d"],
      explanation:
        "The private spend key is needed to compute the one-time private key of an output and the key image, so it proves ownership and allows spending. Scanning for incoming outputs and decrypting amounts are done with the view key."
    },
    {
      id: 28,
      type: "single",
      question: "Why is finding the correct transaction computationally expensive?",
      options: [
        { id: "a", text: "Because every transaction has to be validated with a new proof of work" },
        { id: "b", text: "Because a user must download every transaction on the blockchain and perform an elliptic curve scalar multiplication to check whether it belongs to them" },
        { id: "c", text: "Because the recipient address is stored encrypted in every transaction and has to be brute-forced" },
        { id: "d", text: "Because the wallet must solve the discrete logarithm problem for every transaction" }
      ],
      correct: ["b"],
      explanation:
        "Since one-time addresses are unlinkable, the wallet cannot look up its outputs. It has to take every output, compute the shared secret with the private view key (a scalar multiplication) and check whether the derived address matches. This is costly but needs no brute force and no discrete logarithm. Note: view tags (introduced in 2022) reduce this cost by allowing the wallet to skip most outputs after a cheap check."
    }
  ]
};

// Works as a plain <script> include and as a CommonJS module.
if (typeof module !== "undefined" && module.exports) {
  module.exports = quizData_07;
}
