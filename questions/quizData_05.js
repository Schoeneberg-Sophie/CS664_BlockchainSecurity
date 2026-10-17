// Quiz data for Lecture 5: Bitcoin attacks, selfish mining, eclipse attacks, etc.
// type: "single" | "multiple" | "truefalse"
// correct: array of option ids (more than one entry = multiple correct answers)

const quizData_05 = [
  {
    id: 1,
    type: "single",
    question: "Although privacy are low, how can users still be identified?",
    options: [
      { id: "a", text: "Via their public keys" },
      { id: "b", text: "Via their balances and their UTXO" },
      { id: "c", text: "Via their bitcoin addresses" },
    ],
    correct: ["b"],
    explanation:
     "explanation": "Even though Bitcoin addresses are pseudonymous, blockchain analysis tools can trace transactions by examining how Unspent Transaction Outputs (UTXOs) are spent and combinedas inputs. When multiple UTXOs are spent in a single transaction, it strongly implies they belong to the same wallet/user. By analyzing these transaction graphs, change outputs, and balances, entities can deanonymize users."
  },
  {
    id: 2,
    type: "single",
    question: "How can the blockchain be analysed?",
    options: [
      {id: "a", text: "Using trasnaction graphs },
      {id: "b", text: ""},
      {id: "c", text: ""},
      ],
    correct: ["a"],
    explanation: "explanation": ""
  },
  {



    
