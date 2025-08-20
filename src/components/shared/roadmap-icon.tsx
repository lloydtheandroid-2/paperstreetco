import { Code, Database, BrainCircuit, ShieldCheck, Shirt, Goal, Network, Building, Layers, Binary, ToyBrick, Waypoints, Workflow, Blocks, FunctionSquare } from "lucide-react";

const iconMap = {
  Code: <Code className="w-8 h-8 text-accent" />,
  Database: <Database className="w-8 h-8 text-accent" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-accent" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-accent" />,
  Shirt: <Shirt className="w-8 h-8 text-accent" />,
  Goal: <Goal className="w-8 h-8 text-accent" />,
  Network: <Network className="w-8 h-8 text-accent" />,
  Building: <Building className="w-8 h-8 text-accent" />,
  Layers: <Layers className="w-8 h-8 text-accent" />,
  Binary: <Binary className="w-8 h-8 text-accent" />,
  ToyBrick: <ToyBrick className="w-8 h-8 text-accent" />,
  Waypoints: <Waypoints className="w-8 h-8 text-accent" />,
  Workflow: <Workflow className="w-8 h-8 text-accent" />,
  Blocks: <Blocks className="w-8 h-8 text-accent" />,
  FunctionSquare: <FunctionSquare className="w-8 h-8 text-accent" />,
  Default: <Code className="w-8 h-8 text-accent" />
};

type RoadmapIconProps = {
  icon: keyof typeof iconMap;
};

export function RoadmapIcon({ icon }: RoadmapIconProps) {
  return iconMap[icon] || iconMap.Default;
}
