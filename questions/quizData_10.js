// monero range proofs, janus attacks and decoy selection

const quizData_10 = [
  {
    id: 1,
    type: "single",
    question: "What are range proofs?",
    options: [
      { id: "a", text: "A proof showing that the user did not spend more than a certain amount." },
      { id: "b", text: "A specified range of hash values." },
      { id: "c", text: "A proof that proves that amounts arw within a certain range to prevent double-spending." },
      { id: "d", text: "A range of values describing the whole blockchain" }
    ],
    correct: ["c"],
    explanation:
      "A range proof makes sure a transaction output is not manipulated in such a way that gives the user more XMR than he is able to spend by taking adavantage of propoerties of the elliptical curve. For example, two outputs of -99 XMR and 100 XMR give 1 XMR on paper, while giving the user an extra 99 XMR to spend."
  },
  {
    id: 2,
    type: "single",
    question: "What is a prerequisite for range proofs to work?",
    options: [
      {id: "a", text: "A maximum amount of transaction inputs can be entered."},
      {id: "b", text: "The amount of transaction outputs within the range must be smaller than the size of group ℓ."},
      {id: "c", text: "A Maximum amount of transaction outputs can be entered."},
      {id: "d", text: "The amount of transaction outputs and the size of group ℓ must be equivalent"}
      ],
    correct: ["b"],
    explanation: "The size of all transaction outputs cannot be bigger than the size of group ℓ. This is already prevented by the fact that the total amount is in range 2^(64) - 1, thus being always smaller than the size of group ℓ (~ 2^(252))."
  },
 {
  id: 3,
  type: "single",
  question: "Why does decoy selection for ring signatures matter?",
  options: [
    { id: "a", text: "Certain transaction outputs have a higher likelihood of being the real one, which could deanonymize the user." },
    { id: "b", text: "Decoys are required to calculate the transaction fee." },
    { id: "c", text: "Decoys prevent negative output amounts from wrapping around modulo ℓ." },
    { id: "d", text: "Using decoys permanently destroys the real output's key image before spending." }
  ],
  correct: ["a"],
  explanation: "If decoys are chosen poorly (such as outputs with unnatural age patterns or distinct characteristics), statistical or timing analysis can make the real spent output stand out among the decoys, weakening sender anonymity. Good decoy selection makes the real output blend in indistinguishably with the decoys."
},
{
  id: 4,
  type: "single",
  question: "What is uniform sampling of decoy transactions?",
  options: [
    { id: "a", text: "Each decoy gets sampled exactly once." },
    { id: "b", text: "Only outputs from the latest block can be chosen as decoys." },
    { id: "c", text: "Each candidate output has the exact same probability of being selected as a decoy." },
    { id: "d", text: "Decoys are chosen exclusively from outputs with zero balance." }
  ],
  correct: ["c"],
  explanation: "Under uniform sampling, every eligible output in the candidate pool has an equal probability of being picked as a decoy. In practice, Monero uses age-weighted decoy selection (such as a gamma-like distribution favoring newer outputs) rather than uniform sampling because real spends follow a skewed age distribution."
},
{
  id: 5,
  type: "single",
  question: "How does a Gamma distribution solve the issue of uniform sampling of transaction outputs as decoys?",
  options: [
    { id: "a", text: "It forces every output in the blockchain to have the exact same selection probability." },
    { id: "b", text: "It restricts decoys exclusively to outputs that have already been spent." },
    { id: "c", text: "It eliminates the need for key images by hashing decoy ages together." },
    { id: "d", text: "Newer outputs are more likely to be genuinely spent, so sampling with a Gamma-like age distribution gives recent outputs higher selection probability." }
  ],
  correct: ["d"],
  explanation: "Real outputs are typically spent relatively soon after creation rather than uniformly across all historical blocks. If decoys are sampled uniformly while real spends skew toward newer outputs, the newest output in a ring is statistically more likely to be the real spend. A Gamma-like age distribution better matches real spend-age behavior so recent outputs blend in naturally."
},
{
  id: 6,
  type: "single",
  question: "What is the problem with sampling transaction outputs as decoys according to when they were published (recent transactions being more likely to be selected)?",
  options: [
    { id: "a", text: "Recent outputs cannot be included in ring signatures until they are at least 1,000 blocks old." },
    { id: "b", text: "Sampling recent outputs makes it impossible to compute a valid key image." },
    { id: "c", text: "Recent outputs always have a negative commitment value modulo ℓ." },
    { id: "d", text: "The true ground-truth distribution of real spends is unknown." }
  ],
  correct: ["d"],
  explanation: "Because real spends are hidden inside rings, researchers and protocol designers cannot directly observe the exact true ground-truth distribution of when real outputs are spent. Any chosen age distribution (such as a Gamma distribution) is an estimate or model of real spending behavior, and mismatches between decoy selection and real spending patterns can create statistical leakage."
},
{
  id: 7,
  type: "single",
  question: "What is the goal of binning when selecting transaction outputs as decoys?",
  options: [
    { id: "a", text: "To group outputs/transactions into bins so that even if mimicking the exact distribution is imperfect, an attacker still faces ambiguity among multiple outputs in the same bin or block." },
    { id: "b", text: "To sort outputs by balance so that all ring members have the exact same transaction fee." },
    { id: "c", text: "To group key images together so that double-spends can be batched into a single proof." },
    { id: "d", text: "To replace range proofs when output amounts exceed the group order ℓ." }
  ],
  correct: ["a"],
  explanation: "If mimicking the true spending distribution is imperfect or fails, an observer still cannot immediately pinpoint the real spend when multiple plausible outputs share the same bin or block."
},
{
  id: 8,
  type: "single",
  question: "In a Janus Attack, K^(v,i) (another potential subaddress) is used instead of K(v,i). Why not K^(s,i)?",
  options: [
    {id: "a", text: "Because K^(s,i) is the private spend key, which the sender cannot compute without knowing the recipient's wallet seed."},
    {id: "b", text: "Because K^(s,i) is not included in K°, thus giving no insights into how subadresses are connected."},
    {id: "c", text: "Because using K^(s,i) prevents the recipient's wallet from scanning incoming outputs at all, causing the transaction to be ignored."},
    {id: "d", text: "Because K^(s,i) is identical across all subaddresses in a wallet, so it cannot distinguish between subaddress i and another subaddress."}
  ],
  correct: ["b"],
  explanation: "In a Janus attack targeting subaddresses, the attacker mixes components from different subaddresses to trick a wallet into claiming an output under a subaddress while letting the sender link subaddresses belonging to the same wallet. K^(s,i) does not enter the output derivation K° in the same way to expose subaddress linkage."
}
    ];
