// Quiz data for Lecture 5: Bitcoin attacks, selfish mining, eclipse attacks, etc.
// type: "single" | "multiple" | "text"
// correct: array of option ids (more than one entry = multiple correct answers)

const quizData_05 = [
    {
        type: "single",
        question: "Although privacy barriers are present, how can users still be identified on the Bitcoin network?",
        options: {
            a: "Via their public keys",
            b: "Via their balances and their UTXOs",
            c: "Via their IP address bound directly to transactions in the block header",
            d: "Via mandatory KYC embedded in the consensus protocol"
        },
        correct: "b",
        explanation: "Even though Bitcoin addresses are pseudonymous, blockchain analysis tools can trace transactions by examining how Unspent Transaction Outputs (UTXOs) are spent, combined as inputs, and reflected in balances. Multi-input heuristics strongly imply ownership by the same wallet entity."
    },
    {
        type: "single",
        question: "How can the blockchain structure be analyzed for deanonymization?",
        options: {
            a: "Using transaction graphs and heuristics",
            b: "By decrypting block hashes with a private key",
            c: "By querying central Bitcoin database records",
            d: "By requesting user identities from Satoshi Nakamoto"
        },
        correct: "a",
        explanation: "Blockchain analysis relies heavily on directed transaction graphs to map the flow of inputs and outputs between addresses, applying clustering heuristics such as change address identification."
    },
    {
        type: "multiple",
        question: "What are some types of address clusters identified when mapping Bitcoin transactions?",
        options: {
            a: "Encrypted Addresses",
            b: "Multi-Input Heuristic Clusters",
            c: "Zero-Knowledge Root Addresses",
            d: "Change/Shadow Addresses"
        },
        correct: ["b", "d"],
        explanation: "Mapping algorithms identify entity clusters using Multi-Input Heuristics (assuming all inputs in a single transaction belong to one user) and Change/Shadow Address heuristics (identifying new generated addresses used to receive remaining transaction balances)."
    },
    {
        type: "single",
        question: "What precondition is necessary for a classic 51% attack to occur?",
        options: {
            a: "Malicious nodes must compromise the private keys of major exchanges",
            b: "Malicious nodes must alter the cryptographic hash function (SHA-256)",
            c: "Malicious nodes need to hold at least 51% of the network's total mining power",
            d: "Malicious nodes must control all full nodes in the peer-to-peer network"
        },
        correct: "c",
        explanation: "A 51% attack requires an entity or coalition to control more than 50% of the network's total hashing power (mining rate), giving them the ability to outpace the rest of the honest network in block generation."
    },
    {
        type: "multiple",
        question: "What are the primary goals of a 51% attack?",
        options: {
            a: "To perform double-spending attacks",
            b: "To gain majority control over block confirmation and history",
            c: "To steal Bitcoin directly out of arbitrary user wallet balances without private keys",
            d: "To change historical consensus rules retroactively without hard-forking",
            e: "To exclude or censor specific transactions/addresses from being included in blocks"
        },
        correct: ["a", "b", "e"],
        explanation: "A 51% attack allows attackers to re-org the chain to double-spend coins, control consensus order, and censor transactions/addresses. It does NOT allow stealing funds from arbitrary addresses without valid signatures."
    },
    {
        type: "single",
        question: "Why do malicious nodes in a 51% attack maintain control of the blockchain despite competing forks?",
        options: {
            a: "They control the majority of the hashing power, guaranteeing their secret fork will eventually grow longer than the honest branch",
            b: "They convince honest nodes to switch via social engineering and off-chain votes",
            c: "They disable the proof-of-work algorithm for other participants",
            d: "Their transactions automatically receive priority signatures from the network developers"
        },
        correct: "a",
        explanation: "Under Nakamoto consensus, nodes always accept the longest chain with the most accumulated proof-of-work. Because attackers control >50% of the hashing power, their block generation rate is higher, ensuring their private fork will eventually overtake any public honest chain."
    },
    {
        type: "multiple",
        question: "Which parameters are evaluated when determining the efficacy threshold ($\gamma$ and $\alpha$) of selfish mining?",
        options: {
            a: "The block reward reduction percentage after a halving event",
            b: "The fraction of the total mining power ($\alpha$) possessed by selfish miners relative to honest nodes",
            c: "The fraction of honest miners ($\gamma$) that choose to mine on the selfish miners' branch during a tie/fork",
            d: "The average network latency in propagation between full nodes"
        },
        correct: ["b", "c"],
        explanation: "In the Eyal and Sirer model for Selfish Mining, profitability depends on $\alpha$ (the selfish miners' share of total hash rate) and $\gamma$ (the proportion of honest miners that propagate and mine on the selfish branch during equal-length chain races)."
    },
    {
        type: "single",
        question: "How is a 51% attack defined?",
        options: {
            a: "An attack where 51% of wallet balances are frozen",
            b: "An attack where 51% of users refuse to validate transactions",
            c: "An attack where a single entity or pool controls the majority of the network mining hash rate",
            d: "An attack where a node sends malformed transaction formats to 51% of connected peers"
        },
        correct: "c",
        explanation: "A 51% attack is a majority hash rate attack in a Proof-of-Work system where an attacker accumulates sufficient computational power to override honest network consensus."
    },
    {
        type: "multiple",
        question: "Which statements are true regarding a successful 51% attack?",
        options: {
            a: "The attacker can create a hidden fork at any time and overtake the main chain later",
            b: "The attacker can generate infinite Bitcoins beyond the 21 million cap",
            c: "The attacker can reverse older transactions from years ago instantaneously with zero cost",
            d: "The attacker can manipulate block order and consensus to their economic advantage"
        },
        correct: ["a", "d"],
        explanation: "Attackers with 51% control can launch alternative forks privately at will and control block ordering/validity to double-spend or censor transactions to their advantage."
    },
    {
        type: "multiple",
        question: "Which of the following are potential objectives of a 51% attack?",
        options: {
            a: "Forging digital signatures of other users",
            b: "Excluding specific target addresses from participating in the network (censorship)",
            c: "Executing double-spend transactions against service providers or exchanges",
            d: "Increasing the maximum supply limit of the underlying asset"
        },
        correct: ["b", "c"],
        explanation: "A majority hash rate lets attackers censor specific addresses by systematically rejecting their transactions and execute double-spends by reorganizing recent blocks."
    },
    {
        type: "single",
        question: "What is a key difference between a 51% attack and a Selfish Mining strategy?",
        options: {
            a: "Selfish mining requires 100% network control",
            b: "Selfish mining can be profitable even with less than 50% of total network hash rate ($\alpha < 0.5$)",
            c: "51% attacks do not alter transaction history, whereas selfish mining does",
            d: "Selfish mining requires changing the core consensus protocol rules"
        },
        correct: "b",
        explanation: "Unlike a 51% attack which requires majority control ($\alpha > 0.5$), selfish mining can yield higher relative rewards for collusion pools with as little as 33% (or even less depending on $\gamma$) of total mining power."
    },
    {
        type: "single",
        question: "What is the primary objective of a selfish mining strategy?",
        options: {
            a: "To force honest miners to waste computational power on stale blocks while the selfish pool earns a higher relative share of rewards",
            b: "To permanently halt the execution of smart contracts",
            c: "To decrypt and reveal private key signatures of other miners",
            d: "To bypass the target network difficulty adjustment"
        },
        correct: "a",
        explanation: "Selfish miners keep mined blocks private to build a secret fork. By strategically publishing private blocks when honest miners discover solutions, they invalidate the honest work, causing honest nodes to waste energy on stale branches."
    },
    {
        type: "single",
        question: "In selfish mining, what happens when the secret chain lead over the public chain drops to only 1 block ($l = 1$) and the honest network finds a block?",
        options: {
            a: "The selfish miner discards their secret block and switches back to the public chain",
            b: "The selfish miner immediately publishes their 1 secret block to trigger a race condition against the public block",
            c: "The selfish miner holds the secret block indefinitely until they gain a 5-block lead",
            d: "The selfish miner burns the transaction fees from their block"
        },
        correct: "b",
        explanation: "When the secret lead is reduced to 1 and the honest network finds a competing block, the selfish miner immediately releases their secret block into the network to create a 1-versus-1 chain race, attempting to capture a portion of the honest nodes ($\gamma$)."
    },
    {
        type: "multiple",
        question: "What factors determine the overall success and profitability of a selfish mining attack?",
        options: {
            a: "The total number of full nodes running lightweight SPV clients",
            b: "The memory limit of the node mempool",
            c: "The share of mining power ($\alpha$) controlled by the selfish pool",
            d: "The fraction ($\gamma$) of honest miners that mine on top of the selfish pool's revealed block during a split"
        },
        correct: ["c", "d"],
        explanation: "Selfish mining revenue is a function of $\alpha$ (pool hash rate) and $\gamma$ (network connectivity/propagation advantage during tie breaks)."
    },
    {
        type: "single",
        question: "In selfish mining, if the fraction of honest miners operating on the secret branch ($\gamma$) decreases, what happens to the minimum required hash rate threshold ($\alpha$) needed for selfish mining to remain profitable?",
        options: {
            a: "The required hash rate share ($\alpha$) needed by selfish miners increases toward 1/3 (33.3%)",
            b: "The required hash rate share ($\alpha$) drops to 0%",
            c: "The required hash rate share ($\alpha$) remains fixed regardless of $\gamma$",
            d: "Selfish mining becomes instantly profitable at any hash rate"
        },
        correct: "a",
        explanation: "When $\gamma = 0$ (no honest miners build on the selfish pool's revealed block during a tie), the threshold for profitable selfish mining rises to $\alpha = 1/3$ (~33%). If $\gamma = 1$, the threshold drops to near $0\%$."
    }
];
