
import { Code, Database, BrainCircuit, ShieldCheck, Shirt, Users, Goal, Network, Building, Layers, Binary, ToyBrick, Waypoints, Workflow, Blocks, FunctionSquare, Pilcrow } from "lucide-react";

export const roadmapItems = [
  // Milestone 0: First Principles (Coding Fundamentals)
  {
    title: "Rule #0: First Principles",
    subtitle: "What is Code?",
    description: "Understand what programming is and how humans use it to give instructions to computers. It's a language, a tool, and a craft.",
    icon: <Binary className="w-8 h-8 text-accent" />,
    technologies: ["Conceptual"],
    sampleCode: {
      "JavaScript": `// This is a comment. It's text for humans, ignored by the computer.
// Code is just a set of instructions, like a recipe.`,
      "Python": `# This is a comment. It's text for humans, ignored by the computer.
# Code is just a set of instructions, like a recipe.`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Variables: The Building Blocks",
    description: "Learn how to store and label information using variables. Think of them as boxes you can put data into.",
    icon: <ToyBrick className="w-8 h-8 text-accent" />,
    technologies: ["Variables", "Data Types"],
    sampleCode: {
      "JavaScript": `let myName = "Tyler"; // A variable 'myName' storing text
let myAge = 30; // A variable 'myAge' storing a number`,
      "Python": `my_name = "Tyler" # A variable 'my_name' storing text
my_age = 30 # A variable 'my_age' storing a number`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Functions: Reusable Instructions",
    description: "Bundle up your code into reusable blocks called functions. Write it once, use it forever.",
    icon: <FunctionSquare className="w-8 h-8 text-accent" />,
    technologies: ["Functions"],
    sampleCode: {
      "JavaScript": `function greet() {
  return "Welcome to the Soapbox.";
}

// Call the function to get the greeting:
greet();`,
      "Python": `def greet():
  return "Welcome to the Soapbox."

# Call the function to get the greeting:
greet()`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Conditionals: Making Decisions",
    description: "Teach your program how to make choices using 'if' and 'else' statements, allowing it to react differently to different situations.",
    icon: <Waypoints className="w-8 h-8 text-accent" />,
    technologies: ["Conditionals", "Logic"],
    sampleCode: {
      "JavaScript": `let memberCount = 8;

if (memberCount > 7) {
  // The first rule is...
}`,
      "Python": `member_count = 8

if member_count > 7:
  # The first rule is...`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Objects: Organizing Your Data",
    description: "Learn to group related variables together into a single structure called an object, just like a file folder for your data.",
    icon: <Blocks className="w-8 h-8 text-accent" />,
    technologies: ["Objects", "Data Structures"],
    sampleCode: {
      "JavaScript": `let user = {
  name: "Marla Singer",
  hasAttended: true,
  meetings: 12
};`,
      "Python": `# In Python, these are called Dictionaries
user = {
  "name": "Marla Singer",
  "has_attended": True,
  "meetings": 12
}`
    }
  },

  // Milestone 1: The First Whisper (Web Fundamentals)
  {
    title: "Rule #1: The First Whisper",
    subtitle: "What is HTML?",
    description: "Learn the skeleton of the web. Understand tags, elements, and the basic structure of a web page.",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["HTML5"],
    sampleCode: {
      "JavaScript": `<h1>This is a Heading</h1>
<p>This is a paragraph.</p>`
    }
  },
  {
    title: "Rule #1: The First Whisper",
    subtitle: "Styling with CSS",
    description: "Give your HTML some style. Learn about selectors, properties, and how to make things look good with Cascading Style Sheets.",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["CSS3"],
    sampleCode: {
      "JavaScript": `<style>
  p {
    color: red;
    font-size: 16px;
  }
</style>
<p>This paragraph is now red.</p>`
    }
  },
  {
    title: "Rule #1: The First Whisper",
    subtitle: "Introduction to JavaScript",
    description: "Add interactivity to your site. Learn about variables, data types, and how to manipulate the web page with JavaScript.",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["JavaScript"],
    sampleCode: {
      "JavaScript": `<button onclick="alert('Hello World!')">Click Me</button>`
    }
  },
  {
    title: "Rule #1: The First Whisper",
    subtitle: "Your First Component with React",
    description: "Start thinking in components. Learn the basics of React and how it helps build complex UIs.",
    icon: <Layers className="w-8 h-8 text-accent" />,
    technologies: ["React"],
    sampleCode: {
      "JavaScript": `function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`
    }
  },

  // Milestone 2: Going Rogue (Building a Frontend)
  {
    title: "Rule #2: Going Rogue",
    subtitle: "Setting up a Next.js Project",
    description: "Move from a single file to a full project structure with the most popular React framework.",
    icon: <Building className="w-8 h-8 text-accent" />,
    technologies: ["Next.js", "npm"],
    sampleCode: {
      "JavaScript": `// You don't code this, you run it in your terminal!
npx create-next-app@latest`
    }
  },
  {
    title: "Rule #2: Going Rogue",
    subtitle: "Styling with Tailwind CSS",
    description: "Utility-first CSS is a game changer. Learn to build beautiful designs directly in your markup.",
    icon: <Building className="w-8 h-8 text-accent" />,
    technologies: ["Tailwind CSS"],
    sampleCode: {
      "JavaScript": `<h1 class="text-3xl font-bold underline">
  Hello, Tailwind!
</h1>`
    }
  },
  {
    title: "Rule #2: Going Rogue",
    subtitle: "State Management with Hooks",
    description: "Manage dynamic data within your components using React's built-in \`useState\` and \`useEffect\` hooks.",
    icon: <Building className="w-8 h-8 text-accent" />,
    technologies: ["React Hooks"],
    sampleCode: {
      "JavaScript": `const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>
  You clicked {count} times
</button>`
    }
  },
  {
    title: "Rule #2: Going Rogue",
    subtitle: "Client-Side Routing",
    description: "Create a multi-page feel in a single-page application using Next.js's App Router.",
    icon: <Building className="w-8 h-8 text-accent" />,
    technologies: ["Next.js Router"],
    sampleCode: {
      "JavaScript": `import Link from 'next/link';

<Link href="/about">
  <a>About Page</a>
</Link>`
    }
  },

  // Milestone 3: Graceful Exits (Creating a Backend)
  {
    title: "Rule #3: Graceful Exits",
    subtitle: "What is a Server?",
    description: "Understand the role of a server and how it responds to requests from a browser. Create a simple one with Node.js.",
    icon: <Network className="w-8 h-8 text-accent" />,
    technologies: ["Node.js", "HTTP"],
    sampleCode: {
      "JavaScript": `const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});`
    }
  },
  {
    title: "Rule #3: Graceful Exits",
    subtitle: "Building a REST API with Express",
    description: "Create structured API endpoints to handle data requests from your frontend.",
    icon: <Network className="w-8 h-8 text-accent" />,
    technologies: ["Express", "REST APIs"],
    sampleCode: {
      "JavaScript": `app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Tyler Durden' }]);
});`
    }
  },
  {
    title: "Rule #3: Graceful Exits",
    subtitle: "Understanding Server Components",
    description: "Learn how Next.js allows you to run React components on the server to fetch data and improve performance.",
    icon: <Network className="w-8 h-8 text-accent" />,
    technologies: ["Server Components"],
    sampleCode: {
      "JavaScript": `async function MyServerComponent() {
  const res = await fetch('...');
  const data = await res.json();
  return <div>{data.message}</div>
}`
    }
  },

  // Milestone 4: You vs. The Machine (Database Integration)
  {
    title: "Rule #4: You vs. The Machine",
    subtitle: "Introduction to Databases",
    description: "Learn why you need a database and the difference between SQL and NoSQL.",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["Databases"],
    sampleCode: {
      "JavaScript": `// Conceptual
SELECT * FROM users WHERE name = 'Marla';`
    }
  },
  {
    title: "Rule #4: You vs. The Machine",
    subtitle: "Connecting to Firebase Firestore",
    description: "Set up and connect your application to a scalable, real-time NoSQL database from Google.",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["Firebase Firestore"],
    sampleCode: {
      "JavaScript": `import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);`
    }
  },
  {
    title: "Rule #4: You vs. The Machine",
    subtitle: "Writing and Reading Data",
    description: "Perform basic Create, Read, Update, and Delete (CRUD) operations on your Firestore database.",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["Firebase Firestore"],
    sampleCode: {
      "JavaScript": `await addDoc(collection(db, "users"), {
  first: "Robert",
  last: "Paulson"
});`
    }
  },

  // Milestone 5: One Fight at aTime (AI Integration)
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "What is Genkit?",
    description: "Meet the portable, open-source framework for building production-ready AI-powered features.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["Genkit"],
    sampleCode: {
      "JavaScript": `import { genkit, configureGenkit } from 'genkit';
import { googleAI } from 'genkitx-googleai';

// ... configureGenkit`
    }
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Your First Generative AI Flow",
    description: "Create a simple Genkit flow that calls an LLM to generate text from a prompt.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["Genkit", "LLMs"],
    sampleCode: {
      "JavaScript": `export const menuSuggestionFlow = defineFlow(
  async (topic) => {
    //...
  }
);`
    }
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Structured Output with Zod",
    description: "Force the AI to return clean, predictable JSON data by defining an output schema with Zod.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["Genkit", "Zod"],
    sampleCode: {
      "JavaScript": `const recipeSchema = z.object({
  dishName: z.string(),
  steps: z.array(z.string()),
});`
    }
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Connecting AI to your UI",
    description: "Call your Genkit flow from a React component and display the results to the user.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["React", "Server Actions"],
    sampleCode: {
      "JavaScript": `const [response, setResponse] = useState();
const R = await myFlow("Dinner");
setResponse(R);`
    }
  },

  // Milestone 6: No Shirts, No Shoes (Deployment & DevOps)
  {
    title: "Rule #6: No Shirts, No Shoes",
    subtitle: "What is Containerization?",
    description: "Understand how Docker containers package your application and its dependencies to run anywhere.",
    icon: <Shirt className="w-8 h-8 text-accent" />,
    technologies: ["Docker"],
    sampleCode: {
      "JavaScript": `FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]`
    }
  },
  {
    title: "Rule #6: No Shirts, No Shoes",
    subtitle: "Deploying to Firebase Hosting",
    description: "Push your Next.js application to the web with a single command using Firebase Hosting.",
    icon: <Shirt className="w-8 h-8 text-accent" />,
    technologies: ["Firebase Hosting", "CI/CD"],
    sampleCode: {
      "JavaScript": `// You don't code this, you run it in your terminal!
firebase deploy --only hosting`
    }
  },

  // Milestone 7: The Long Haul (Security)
  {
    title: "Rule #7: The Long Haul",
    subtitle: "Firebase Authentication",
    description: "Add a complete authentication system to your app to manage users.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    technologies: ["Authentication", "Firebase Auth"],
    sampleCode: {
      "JavaScript": `import { getAuth } from "firebase/auth";
const auth = getAuth(app);`
    }
  },
  {
    title: "Rule #7: The Long Haul",
    subtitle: "Firestore Security Rules",
    description: "Protect your data by defining who can read, write, and update documents in your database.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    technologies: ["Security Rules", "Firebase"],
    sampleCode: {
      "JavaScript": `match /users/{userId} {
  allow read, write: if request.auth.uid == userId;
}`
    }
  },
  {
    title: "Rule #7: The Long Haul",
    subtitle: "Input Validation",
    description: "Never trust user input. Learn to validate and sanitize data on the server to prevent attacks.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    technologies: ["Security"],
    sampleCode: {
      "JavaScript": `if (!input.email || !input.email.includes('@')) {
  throw new Error('Invalid email');
}`
    }
  },

  // Milestone 8: The First Night
  {
    title: "Rule #8: If It's Your First Night, You Have to Fight",
    subtitle: "Your First Real Project",
    description: "You have the tools. It's time to build something from scratch. No more tutorials. You have to fight.",
    icon: <Goal className="w-8 h-8 text-accent" />,
    technologies: ["Project Scoping", "Problem Solving", "Git"],
    sampleCode: {
      "JavaScript": `git init
git add .
git commit -m "feat: Begin my project"`
    }
  }
];
