import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function BlogFaqPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Support Group</h1>
        <p className="text-muted-foreground">Your questions and our thoughts, all in one place.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* FAQ Section (Left 1/3) */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the purpose of this project?</AccordionTrigger>
              <AccordionContent>
                To liberate the world from the shackles of consumerism, one bar of soap at a time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is this a safe space?</AccordionTrigger>
              <AccordionContent>
                Safety is not the goal. Growth is. But we are a support group, after all.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I join?</AccordionTrigger>
              <AccordionContent>
                You are already a member. The first step was finding this page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What are the ingredients in the soap?</AccordionTrigger>
              <AccordionContent>
                That's proprietary. But rest assured, it is of the highest quality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Blog Section (Right 2/3) */}
        <div className="md:col-span-2">
           <h2 className="text-3xl font-bold mb-6">Latest Musings</h2>
           <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The First Rule</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We've reconsidered the first rule. It's time to talk about it. The things you are a part of end up being a part of you. Secrecy for secrecy's sake is a cage. We are building something, and to build, we must speak.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>On Minimalism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The things you own end up owning you. A treatise on modern ownership. Every gadget, every subscription, every piece of furniture is another thread in the net. To be free, you must first be willing to let go.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hitting Bottom</CardTitle>
              </CardHeader>
              <CardContent>
                <p>It's only after we've lost everything that we're free to do anything. This isn't about failure. It's about reaching a point of clarity. A foundation of rock bottom is the strongest place to build an empire.</p>
              </CardContent>
            </Card>
           </div>
        </div>
      </div>
    </div>
  );
}
