// Quiz data for Lecture 5: Bitcoin attacks, selfish mining, eclipse attacks, etc.
// type: "single" | "multiple" | "text"
// correct: array of option ids (more than one entry = multiple correct answers)

const quizData_05 = [
  {
    id: 1,
    type: "single",
    question: "Although privacy is low, how can users still be identified?",
    options: [
      { id: "a", text: "Via their public keys" },
      { id: "b", text: "Via their balances and their UTXO" },
      { id: "c", text: "Via their bitcoin addresses" }
    ],
    correct: ["b"],
    explanation: "Even though Bitcoin addresses are pseudonymous, blockchain analysis tools can trace transactions by examining how Unspent Transaction Outputs (UTXOs) are spent and combined as inputs. When multiple UTXOs are spent in a single transaction, it strongly implies they belong to the same wallet/user. By analyzing these transaction graphs, change outputs, and balances, entities can deanonymize users."
  },
  {
    id: 2,
    type: "single",
    question: "How can the blockchain be analysed?",
    options: [
      { id: "a", text: "Using transaction graphs" },
      // TODO: replace the two distractors below with wording from your slides
      { id: "b", text: "By decrypting the signatures in each transaction" },
      { id: "c", text: "By reading the private keys stored in each block" }
    ],
    correct: ["a"],
    explanation: "Transaction graph analysis links addresses and UTXOs across transactions, for example through the common-input heuristic and change outputs."
  }
  // Add further questions here. Put a comma after the previous "}".
];
