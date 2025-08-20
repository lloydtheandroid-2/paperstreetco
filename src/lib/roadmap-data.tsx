
import type { RoadmapIcon } from "@/components/shared/roadmap-icon";

export type RoadmapItem = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentProps<typeof RoadmapIcon>['icon'];
  technologies: string[];
  hidePreview?: boolean;
  sampleCode: {
    [key: string]: string;
  };
};

export const roadmapItems: RoadmapItem[] = [
  // Milestone 0: First Principles (Coding Fundamentals)
  {
    title: "Rule #0: First Principles",
    subtitle: "What is Code?",
    description: "Understand what programming is and how humans use it to give instructions to computers. It's a language, a tool, and a craft.",
    icon: "Binary",
    technologies: ["Conceptual"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// This is a comment. It's text for humans, ignored by the computer.
// Code is just a set of instructions, like a recipe.
console.log("This message will appear in your browser's developer console.");`,
      "Python": `# This is a comment. It's text for humans, ignored by the computer.
# Code is just a set of instructions, like a recipe.
print("This message would appear in a Python terminal.")`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Variables: The Building Blocks",
    description: "Learn how to store and label information using variables. Think of them as boxes you can put data into.",
    icon: "ToyBrick",
    technologies: ["Variables", "Data Types"],
    sampleCode: {
      "JavaScript": `// Try changing the values and see the output change!
let myName = "Tyler"; 
let myAge = 30; 

document.body.innerHTML = \`<h1>Hello, \${myName}</h1><p>You are \${myAge} years old.</p>\`;`,
      "Python": `my_name = "Tyler" # A variable 'my_name' storing text
my_age = 30 # A variable 'my_age' storing a number
# Python code like this can't run in the browser, but this is the syntax.`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Functions: Reusable Instructions",
    description: "Bundle up your code into reusable blocks called functions. Write it once, use it forever.",
    icon: "FunctionSquare",
    technologies: ["Functions"],
    sampleCode: {
      "JavaScript": `function greet(name) {
  return "Welcome to the Soapbox, " + name + ".";
}

// Call the function to get the greeting:
const message = greet("Marla");
document.body.innerHTML = message;`,
      "Python": `def greet(name):
  return "Welcome to the Soapbox, " + name + "."

# Call the function to get the greeting:
message = greet("Marla")
print(message)`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Conditionals: Making Decisions",
    description: "Teach your program how to make choices using 'if' and 'else' statements, allowing it to react differently to different situations.",
    icon: "Waypoints",
    technologies: ["Conditionals", "Logic"],
    sampleCode: {
      "JavaScript": `let memberCount = 8;

if (memberCount > 7) {
  document.body.innerHTML = "The first rule is...";
} else {
  document.body.innerHTML = "We need more members.";
}`,
      "Python": `member_count = 8

if member_count > 7:
  print("The first rule is...")
else:
  print("We need more members.")`
    }
  },
  {
    title: "Rule #0: First Principles",
    subtitle: "Objects: Organizing Your Data",
    description: "Learn to group related variables together into a single structure called an object, just like a file folder for your data.",
    icon: "Blocks",
    technologies: ["Objects", "Data Structures"],
    sampleCode: {
      "JavaScript": `let user = {
  name: "Marla Singer",
  hasAttended: true,
  meetings: 12
};

document.body.innerHTML = \`<h2>User: \${user.name}</h2><p>Meetings: \${user.meetings}</p>\`;`,
      "Python": `# In Python, these are called Dictionaries
user = {
  "name": "Marla Singer",
  "has_attended": True,
  "meetings": 12
}
print(user["name"])`
    }
  },

  // Milestone 1: The First Whisper (Web Fundamentals)
  {
    title: "Rule #1: The First Whisper",
    subtitle: "What is HTML?",
    description: "Learn the skeleton of the web. Understand tags, elements, and the basic structure of a web page.",
    icon: "Code",
    technologies: ["HTML5"],
    sampleCode: {
      "JavaScript": `<!-- This is HTML. It describes the content of a page. -->
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<button>This is a button</button>`,
      "Python": `# HTML isn't a feature of Python.
# It's the language that web browsers read to display content.`
    }
  },
  {
    title: "Rule #1: The First Whisper",
    subtitle: "Styling with CSS",
    description: "Give your HTML some style. Learn about selectors, properties, and how to make things look good with Cascading Style Sheets.",
    icon: "Code",
    technologies: ["CSS3"],
    sampleCode: {
      "JavaScript": `<!-- CSS is embedded in a <style> tag or a separate file. -->
<style>
  p {
    color: hsl(var(--primary));
    font-size: 18px;
    font-family: serif;
  }
  .important {
    font-weight: bold;
  }
</style>
<p>This paragraph is now styled.</p>
<p class="important">This one is important.</p>`,
      "Python": `# CSS is for styling web pages. It is not used in standard Python.`
    }
  },
  {
    title: "Rule #1: The First Whisper",
    subtitle: "Introduction to JavaScript",
    description: "Add interactivity to your site. Learn about variables, data types, and how to manipulate the web page with JavaScript.",
    icon: "Code",
    technologies: ["JavaScript"],
    sampleCode: {
      "JavaScript": `<h1 id="title">Welcome!</h1>
<button onclick="changeTitle()">Click Me</button>

<script>
  function changeTitle() {
    document.getElementById('title').innerText = 'You are a Space Monkey!';
  }
</script>`,
       "Python": `# Python can be used for web backends, but not for direct browser interaction like this.`
    }
  },
  {
    title: "Rule #1: The First Whisper",
    subtitle: "Your First Component with React",
    description: "Start thinking in components. Learn the basics of React and how it helps build complex UIs.",
    icon: "Layers",
    technologies: ["React"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// This is a React component. 
// It's a reusable piece of UI.
// We can't render this here, but this is what the code looks like.
import React from 'react';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`,
      "Python": `# React is a JavaScript library. There are Python frameworks for web UIs, like Django and Flask, but they work differently.`
    }
  },

  // Milestone 2: Going Rogue (Building a Frontend)
  {
    title: "Rule #2: Going Rogue",
    subtitle: "Setting up a Next.js Project",
    description: "Move from a single file to a full project structure with the most popular React framework.",
    icon: "Building",
    technologies: ["Next.js", "npm"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// You don't code this, you run it in your terminal!
// This command creates a new Next.js application in a folder.
npx create-next-app@latest`,
       "Python": `# This is a command for setting up a JavaScript project.`
    }
  },
  {
    title: "Rule #2: Going Rogue",
    subtitle: "Styling with Tailwind CSS",
    description: "Utility-first CSS is a game changer. Learn to build beautiful designs directly in your markup.",
    icon: "Building",
    technologies: ["Tailwind CSS"],
    sampleCode: {
      "JavaScript": `<!-- With Tailwind, you add classes to style elements -->
<h1 class="text-3xl font-bold underline text-primary">
  Hello, Tailwind!
</h1>
<p class="p-4 bg-muted rounded-md mt-2">
  This is a styled paragraph.
</p>`,
        "Python": `# Tailwind is for styling HTML and is not used in Python.`
    }
  },
  {
    title: "Rule #2: Going Rogue",
    subtitle: "State Management with Hooks",
    description: "Manage dynamic data within your components using React's built-in \`useState\` and \`useEffect\` hooks.",
    icon: "Building",
    technologies: ["React Hooks"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// This React code uses hooks to manage state.
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}`,
       "Python": `# Python classes and functions can have state, but the 'hook' concept is specific to React.`
    }
  },
  {
    title: "Rule #2: Going Rogue",
    subtitle: "Client-Side Routing",
    description: "Create a multi-page feel in a single-page application using Next.js's App Router.",
    icon: "Building",
    technologies: ["Next.js Router"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// In Next.js, you create links between pages like this.
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About Page</Link>
    </nav>
  )
}`,
       "Python": `# Web frameworks in Python like Django have their own systems for routing.`
    }
  },

  // Milestone 3: Graceful Exits (Creating a Backend)
  {
    title: "Rule #3: Graceful Exits",
    subtitle: "What is a Server?",
    description: "Understand the role of a server and how it responds to requests from a browser. Create a simple one with Node.js.",
    icon: "Network",
    technologies: ["Node.js", "HTTP"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// This Node.js code creates a basic web server.
// It would run in a terminal, not a browser.
import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});`,
       "Python": `// Python has built-in libraries for creating web servers too.
import http.server
import socketserver

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()`
    }
  },
  {
    title: "Rule #3: Graceful Exits",
    subtitle: "Building a REST API with Express",
    description: "Create structured API endpoints to handle data requests from your frontend.",
    icon: "Network",
    technologies: ["Express", "REST APIs"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// Express is a popular framework for building APIs with Node.js
import express from 'express';
const app = express();

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Tyler Durden' }]);
});

app.listen(3000);`,
       "Python": `# Python frameworks like Flask or FastAPI are used for the same purpose.
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    return jsonify([{'id': 1, 'name': 'Tyler Durden'}])`
    }
  },
  {
    title: "Rule #3: Graceful Exits",
    subtitle: "Understanding Server Components",
    description: "Learn how Next.js allows you to run React components on the server to fetch data and improve performance.",
    icon: "Network",
    technologies: ["Server Components"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// This is a React Server Component. It runs only on the server.
async function MyServerComponent() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // This JSX gets rendered to HTML on the server before being sent.
  return <div>{data.message}</div>
}`,
       "Python": `# This is a concept specific to Next.js/React.`
    }
  },

  // Milestone 4: You vs. The Machine (Database Integration)
  {
    title: "Rule #4: You vs. The Machine",
    subtitle: "Introduction to Databases",
    description: "Learn why you need a database and the difference between SQL and NoSQL.",
    icon: "Database",
    technologies: ["Databases"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// Conceptual: An SQL query to get a user
SELECT * FROM users WHERE name = 'Marla';

// Conceptual: A NoSQL operation to get a user
db.collection('users').find({ name: 'Marla' });`,
      "Python": `# Python has libraries to connect to any kind of database.`
    }
  },
  {
    title: "Rule #4: You vs. The Machine",
    subtitle: "Connecting to Firebase Firestore",
    description: "Set up and connect your application to a scalable, real-time NoSQL database from Google.",
    icon: "Database",
    technologies: ["Firebase Firestore"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// Import Firebase libraries and initialize
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { /* ...your config... */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);`,
      "Python": `import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()`
    }
  },
  {
    title: "Rule #4: You vs. The Machine",
    subtitle: "Writing and Reading Data",
    description: "Perform basic Create, Read, Update, and Delete (CRUD) operations on your Firestore database.",
    icon: "Database",
    technologies: ["Firebase Firestore"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `import { collection, addDoc } from "firebase/firestore"; 

// 'db' is your initialized Firestore instance
async function addUser(name) {
  await addDoc(collection(db, "users"), {
    name: name,
    member_since: new Date()
  });
}`,
      "Python": `# 'db' is your initialized Firestore instance
def add_user(name):
  doc_ref = db.collection(u'users').document()
  doc_ref.set({
    u'name': name,
    u'member_since': firestore.SERVER_TIMESTAMP
  })`
    }
  },

  // Milestone 5: One Fight at aTime (AI Integration)
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "What is Genkit?",
    description: "Meet the portable, open-source framework for building production-ready AI-powered features.",
    icon: "BrainCircuit",
    technologies: ["Genkit"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// Genkit lets you define 'flows' that use AI models.
import { genkit, configureGenkit } from 'genkit';
import { googleAI } from 'genkitx-googleai';

configureGenkit({
  plugins: [googleAI()],
  // ...
});`,
      "Python": `# Genkit is primarily a TypeScript/JavaScript framework.`
    }
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Your First Generative AI Flow",
    description: "Create a simple Genkit flow that calls an LLM to generate text from a prompt.",
    icon: "BrainCircuit",
    technologies: ["Genkit", "LLMs"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `import { defineFlow, generate } from 'genkit';

export const menuSuggestionFlow = defineFlow(
  { name: 'menuSuggestionFlow' },
  async (topic) => {
    const llmResponse = await generate({
      prompt: \`Suggest a menu for a \${topic} dinner party.\`,
      model: 'googleai/gemini-pro',
    });
    return llmResponse.text();
  }
);`,
      "Python": `# This is a Genkit (JavaScript) example.`
    }
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Structured Output with Zod",
    description: "Force the AI to return clean, predictable JSON data by defining an output schema with Zod.",
    icon: "BrainCircuit",
    technologies: ["Genkit", "Zod"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `import { z } from 'zod';

const recipeSchema = z.object({
  dishName: z.string(),
  ingredients: z.array(z.string()),
  steps: z.array(z.string()),
});

// You can then ask the AI to generate output in this format.`,
       "Python": `# Zod is a TypeScript/JavaScript library. Python has similar libraries like Pydantic.`
    }
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Connecting AI to your UI",
    description: "Call your Genkit flow from a React component and display the results to the user.",
    icon: "BrainCircuit",
    technologies: ["React", "Genkit"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// In a React component:
import { menuSuggestionFlow } from './flows';

async function MyComponent() {
  const [suggestion, setSuggestion] = useState('');

  const handleClick = async () => {
    const result = await menuSuggestionFlow('tropical');
    setSuggestion(result);
  }
  
  return <button onClick={handleClick}>Get Suggestion</button>
}`,
      "Python": `# This is a React (JavaScript) example.`
    }
  },

  // Milestone 6: No Shirts, No Shoes (Deployment & DevOps)
  {
    title: "Rule #6: No Shirts, No Shoes",
    subtitle: "What is Containerization?",
    description: "Understand how Docker containers package your application and its dependencies to run anywhere.",
    icon: "Shirt",
    technologies: ["Docker"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `# This is a Dockerfile. It's a recipe for building a container.
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]`,
      "Python": `# You can containerize a Python app too.
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]`
    }
  },
  {
    title: "Rule #6: No Shirts, No Shoes",
    subtitle: "Deploying to Firebase Hosting",
    description: "Push your Next.js application to the web with a single command using Firebase Hosting.",
    icon: "Shirt",
    technologies: ["Firebase Hosting", "CI/CD"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// You don't code this, you run it in your terminal!
// This command deploys your app to the world.
firebase deploy --only hosting`,
      "Python": `# The command is the same, but your firebase.json config would point to your Python server.`
    }
  },

  // Milestone 7: The Long Haul (Security)
  {
    title: "Rule #7: The Long Haul",
    subtitle: "Firebase Authentication",
    description: "Add a complete authentication system to your app to manage users.",
    icon: "ShieldCheck",
    technologies: ["Authentication", "Firebase Auth"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// Sign in a user with Google
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider);`,
      "Python": `# You typically manage users on the backend with the Admin SDK.
from firebase_admin import auth

user = auth.get_user_by_email('user@example.com')
print(f'Successfully fetched user data: {user.uid}')`
    }
  },
  {
    title: "Rule #7: The Long Haul",
    subtitle: "Firestore Security Rules",
    description: "Protect your data by defining who can read, write, and update documents in your database.",
    icon: "ShieldCheck",
    technologies: ["Security Rules", "Firebase"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// This is not JavaScript, but a separate rules file for Firestore.
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read their own user document
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}`,
      "Python": `# Security rules are configured in the Firebase console or deployed via the CLI.`
    }
  },
  {
    title: "Rule #7: The Long Haul",
    subtitle: "Input Validation",
    description: "Never trust user input. Learn to validate and sanitize data on the server to prevent attacks.",
    icon: "ShieldCheck",
    technologies: ["Security"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// On your server, before saving data:
function updateUser(input) {
  if (!input.email || !input.email.includes('@')) {
    throw new Error('Invalid email');
  }
  // ...save to database
}`,
      "Python": `from flask import request, abort

@app.route('/update_user', methods=['POST'])
def update_user():
    email = request.form.get('email')
    if not email or '@' not in email:
        abort(400, description="Invalid email.")
    # ...save to database`
    }
  },

  // Milestone 8: The First Night
  {
    title: "Rule #8: If It's Your First Night, You Have to Fight",
    subtitle: "Your First Real Project",
    description: "You have the tools. It's time to build something from scratch. No more tutorials. You have to fight.",
    icon: "Goal",
    technologies: ["Project Scoping", "Problem Solving", "Git"],
    hidePreview: true,
    sampleCode: {
      "JavaScript": `// The most important commands in programming.
git init
git add .
git commit -m "feat: Begin my project"`,
      "Python": `# Git is universal for all languages.`
    }
  }
];
