import { Code, Database, BrainCircuit, ShieldCheck, Shirt, Users, Goal } from "lucide-react";

export const roadmapItems = [
  {
    title: "Rule #1: You DO Talk About Soapbox",
    subtitle: "The First Whisper",
    description: "Start spreading the word, even if it's just to yourself. Learn a little here, learn a little there. Absorb the fundamentals. This is where it begins. Not with a bang, but with a quiet line of code.",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    sampleCode: `<div>
  <h1 class="text-2xl font-bold">Hello, World!</h1>
  <p class="text-gray-500">This is your first component.</p>
</div>`
  },
  {
    title: "Rule #2: YOU DO Talk About Soapbox",
    subtitle: "Going Rogue",
    description: "Find free time in the workplace. Maybe go rogue a bit. That project you were assigned? It just became your personal coding dojo. Take a stab at it. See what you can build when no one is watching.",
    icon: <Users className="w-8 h-8 text-accent" />,
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL", "Server Components"],
    sampleCode: `const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});`
  },
  {
    title: "Rule #3: If Someone Taps, the Fight is Over",
    subtitle: "Graceful Exits",
    description: "Know when to quit for the day. If the code yells 'stop' by throwing endless errors, or your brain goes limp, tap out. The fight is over. For now. A smart developer knows when to walk away and refactor tomorrow.",
    icon: <Goal className="w-8 h-8 text-accent" />,
    technologies: ["State Management", "Error Boundaries", "Logging", "User Feedback"],
    sampleCode: `try {
  // Risky code here
} catch (error) {
  console.error("Tapping out:", error);
}`
  },
   {
    title: "Rule #4: Only Two to a Fight",
    subtitle: "You vs. The Machine",
    description: "It's just you and the problem. The client is your idea, the server is the execution. Understand the sacred dance between them. Master this, and you can build anything.",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["MongoDB", "PostgreSQL", "Firebase Firestore", "Three.js"],
    sampleCode: `// Connect to a database
const db = new Database();
await db.connect();`
  },
  {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Singular Focus",
    description: "You can't do everything at once. One feature, one bug, one glorious, all-consuming problem. This is where you connect to a persistent data store. This is where you make your application remember. This is where you bring it to life.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["Genkit", "LLMs", "Agents", "Prompt Engineering", "ShadCN UI"],
    sampleCode: `const { output } = await ai.generate("What is the meaning of life?");
console.log(output);`
  },
  {
    title: "Rule #6: No Shirts, No Shoes",
    subtitle: "Bare Metal",
    description: "Strip away the non-essential. No frameworks, no libraries, just you and the raw power of the machine. This is about understanding what's underneath. Here, we give the machine a mind of its own. No abstractions, just pure potential.",
    icon: <Shirt className="w-8 h-8 text-accent" />,
    technologies: ["Docker", "Kubernetes", "Firebase Hosting", "CI/CD", "Monitoring"],
    sampleCode: `FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]`
  },
  {
    title: "Rule #7: Fights Go On as Long as They Have To",
    subtitle: "The Long Haul",
    description: "A project is never truly finished. It must be deployed, monitored, and continuously improved. This is where you secure your application. It goes on as long as it has to.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    technologies: ["Authentication", "Authorization", "Input Validation", "Firebase App Check", "Security Rules"],
    sampleCode: `// Security rule for a Firestore collection
match /documents/{documentId} {
  allow read, write: if request.auth != null;
}`
  },
  {
    title: "Rule #8: If It's Your First Night, You Have to Fight",
    subtitle: "Start Now",
    description: "Welcome to the real world. No more tutorials, no more waiting for the 'right time'. Your first challenge is to build something real. You have to fight. You have to start. It's time to code.",
    icon: <Goal className="w-8 h-8 text-accent" />,
    technologies: ["Project Scoping", "User Stories", "Git", "Deployment", "Problem Solving"],
    sampleCode: `git commit -m "feat: Implement first feature"`
  },
];
