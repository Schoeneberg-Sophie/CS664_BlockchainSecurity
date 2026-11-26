// ethereum (Ethereum Virtual MAchine, Transactions, Tokens, Gas)

const quizData_12 = [
  {id: 1,
   type: "multiple",
   question: "The Ethereum Virtual Machine allows to...",
   options: [
     {id: "a", text: "...execute arithmetic and bitwise logic operations."},
     {id: "b", text: "...access account information."},
     {id: "c", text: "...send messages to other users."},
     {id: "d", text: "...access block information."}
     ],
   correct: ["a", "b", "d"],
   explanation: "The EVM allows to acces account information about balances, addresses and more, as well as access information about the block, like the current gas price and the current block number."
  },
  {
    id: 2,
    type: "single",
    question: "The Ethereum Virtual Machine is ...",
    options: [
      {id: "a", text: "stack-based First-in last out."},
      {id: "b", text: "a single-digit method like binary."},
      {id: "c", text: "stack-based first-in first-out."},
      {id: "d", text: "specifically for creating contract accounts."}
      ],
    correct: ["a"],
   explanation: "The EVM is a stack-based virtual machine using 256-bit words (up to a depth of 1024), and stacks operate on a First-In, Last-Out (FILO / LIFO) basis. FIFO describes a queue rather than a stack, and the EVM executes all Ethereum smart contracts and state transitions rather than only creating contract accounts."
  },
  {
    id: 3,
    type: "matching",
    question: "Match the right description to the correct memory type.",
    items: [
      {id: "a", text: "Immutable"},
      {id: "b", text: "volatile"},
      {id: "c", text: "Permanent"}
      ],
    targets: [
      {id: "1", text: "Memory"},
      {id: "2", text: "Account storage"},
      {id: "3", text: "Programm code ROM"}
      ],
    correct: ["1-b", "2-c", "3-a"],
    explanation: "Memory is temporary/volatile per call frame, account storage persists permanently acrss transactions, and deployed programm code (ROM) is immutable once deployed"
  },
  {
    id: 4,
    type: "matching",
    question: "Match the correct purpose to the right memory type.",
    items: [
      {id: "a", text: "ROM"},
      {id: "b", text: "Account Storage"},
      {id: "c", text: "Memory"},
      {id: "d", text: "Stack"}
      ],
    targets: [
      {id: "1", text:"stores small local variables with limited size"},
      {id: "2", text:"stores state variables"},
      {id: "3", text:"stores temporary values"},
      {id: "4", text:"stores code"}
      ],
    correct: ["1-d", "2-b", "3-c", "4-a"],
    explanation: "The stack holds small immediate values and local/operand items with a strict size/depth limit, account storage holds contract state variables, memory holds temprorary/expandable data buffers during execution, and ROM holds the contract's bytecode."
  },
  {
    id: 5,
    type: "single",
    question: "Between the Account Storage, the Memory and the Stack, two of them are temporary storages, one of them is presistent between function calls. Which one?",
    options: [
      {id: "a", text: "Account Storage"},
      {id: "b", text: "Memory"},
      {id: "c", text: "Stack"}
      ],
    correct: ["a"],
    explanation: "Account storage persists on the blockchain across function calls and transactions, whereas memory and the stack are temporary execution areas."
  },
  {
    id: 6,
    type: "single",
    question: "What are state variables?",
    options: [
      {id: "a", text: "Variables declared inside a function that are discarded as soon as the function finishes executing."},
      {id: "b", text: "Variables passed in transaction calldata that are read-only and never stored on-chain."},
      {id: "c", text: "Temporary variables allocated in memory only for ABI encoding during a single call."},
      {id: "d", text: "variables declared at the contract level whose values are permanently stored in the contract's persistent storage."},
      ],
    correct: ["d"],
    explanation: "State variables are declared at the contract level outside functions and stored in persistent contract storage across transactions."
  },
{
    id: 7,
    type: "single",
    question: "What is the difference between the memory and the stack?",
    options: [
      {id: "a", text: "The memory stores arrays, strings, bytes and similar, the stack stores numbers, function arguments, pointers, boolean flags and similar."},
      {id: "b", text: "The memory is permanent on-chain storage, while the stack is cleared only when a block is finalized."},
      {id: "c", text: "The stack is byte-addressable with unlimited depth, while the memory only holds 32-byte items in LIFO order."},
      {id: "d", text: "The memory stores deployed bytecode, while the stack stores account balances and nonces."}
      ],
    correct: ["a"],
    explanation: "The stack is a LIFO structure of 32-byte slots with limited depth for immediate values/pointers/operands, while memory is a byte-addressable buffer used for dynamically sized or structured data like arrays, strings, and bytes."
  },
  {
    id: 8,
    type: "multiple",
    question: "Why is a gas fee needed in Ethereum?",
    options: [
      {id: "a", text: "To give external users free off-chain indexing without running a node."},
      {id: "b", text: "To compnsate validators for the cost of their computation."},
      {id: "c", text: "To prevent Denial-of-Service attacks."},
      {id: "d", text: "To make smart contract bytecode mutable after deployment."}
      ],
    correct: ["c", "b"],
    explanation: "A gas fee is neede to compensate validators for the computational power they invested in executing the code, as well as preventing DoS attacks, as the EVM allows for infite loops as a turing complete machine."
  },
  {
    id: 9,
    type: "single",
    question: "What happens if the gas is not sufficient to execute a atransaction?",
    options: [
      {id: "a", text: "The execution is stopped and continued when enough gas is supplied"},
      {id: "b", text: "A penalty fee has to be paid"},
      {id: "c", tex: "The transaction will not be completed and the gas will be refunded."},
      {id: "d", text: "The transaction will not be completed, but the gas will not be refunded."}
      ],
    correct: ["d"],
    explanation: "The transaction is stopped, but the gas is still spent as a recompensation of the computational power needed to execute the code thus far."
  }
  ];
    
      
