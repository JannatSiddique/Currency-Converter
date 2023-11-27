import inquirer from "inquirer";

type Currency = "PKR" | "USD" | "GBP";

interface Conversion {
  [key: string]: {
    [key: string]: number;
  };
}

const conversion: Conversion = {
  "PKR": {
    "USD": 0.044,
    "GBP": 0.037,
    "PKR": 1
  },
  "GBP": {
    "USD": 1.21,
    "PKR": 271.79,
    "GBP": 1
  },
  "USD": {
    "USD": 1,
    "PKR": 271.79,
    "GBP": 0.83
  }
};

(async () => {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      choices: ["PKR", "USD", "GBP"],
      message: "Select your currency:"
    },
    {
      type: "list",
      name: "to",
      choices: ["PKR", "USD", "GBP"],
      message: "In which currency do you want to convert?"
    },
    {
      type: "number",
      name: "amount",
      message: "Enter your conversion amount"
    },
  ]) as { from: Currency; to: Currency; amount: number };

  const { from, to, amount } = ans;

  if (conversion[from] && conversion[to]) {
    const result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
  } else {
    console.log("Invalid input");
  }
})();
