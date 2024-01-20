"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

import { toast } from "sonner";

import FeatureCard from "@/components/featurecard";

import { FaCloudUploadAlt, FaCog, FaArrowsAltV, FaLock } from 'react-icons/fa'; // Import the icons you want to use

export default function Home() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast.success("Project created!");
  };

  const handleToggleCard = () => {
    setModalVisible(!isModalVisible);
  };

  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
      <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col items-center gap-4 text-center max-w-5xl">
            <Badge variant={"outline"}>Cloud Provider</Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-7xl lg:leading-[1.1] text-balance">
            Deployments made easy.
            Solutions simplified.
          </h1>
          <div className="text-lg text-muted-foreground sm:text-xl text-balance">
            Effortlessly manage servers and build, ship, and monitor applications in the cloud without the need for a platform engineer.
          </div>
          <Button onClick={handleToggleCard} className="mt-8">
            Create Project
          </Button>
        </div>
      </section>

      {/* Create Project Modal */}
      {isModalVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Card className="z-10 mx-auto">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleToggleCard}>
                  Close
                </Button>
                <Button onClick={handleSubmit}>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
      )}
        <section id="cloud-services" className="py-12 bg-transparent dark:bg-dark-card">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Explore Cloud-Powered Solutions
            </h2>
            <p className="mt-0 text-gray-600 dark:text-gray-400 text-lg">
              Unlock a host of powerful features through our cloud-based application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
              <FeatureCard
                  title="Effortless Deployments"
                  description="Experience easy and seamless deployment processes for your applications with our cloud services."
                  icon={FaCloudUploadAlt} // Use the imported cloud upload icon
              />
              <FeatureCard
                  title="Simplified Solutions"
                  description="Benefit from simplified solutions that streamline complex tasks, making your workflow more efficient."
                  icon={FaCog} // Use the imported cog icon
              />
              <FeatureCard
                  title="Scalability Options"
                  description="Easily scale your resources up or down based on your application's demands, ensuring optimal performance."
                  icon={FaArrowsAltV} // Use the imported vertical arrows icon
              />
              <FeatureCard
                  title="Secure Data Storage"
                  description="Trust in our secure cloud infrastructure to provide robust data storage solutions, safeguarding your valuable information."
                  icon={FaLock} // Use the imported lock icon
              />
            </div>
          </div>
        </section>

          <section id="frequently-asked-questions" className="py-12 flex flex-col justify-center items-center bg-transparent dark:bg-dark-card">
              <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold text-primary mb-6">
                      Commonly Asked Questions
                  </h2>
              </div>
              <Accordion type="single" collapsible className="w-full md:w-[50vh] lg:w-[50vh]">
                  <AccordionItem value="item-1">
                      <AccordionTrigger>How do I get started with your cloud services?</AccordionTrigger>
                      <AccordionContent>
                          Getting started is easy! Simply sign up for an account on our platform, choose your preferred plan, and start deploying your applications effortlessly using our user-friendly interface.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                      <AccordionTrigger>Is my data secure with your cloud storage solutions?</AccordionTrigger>
                      <AccordionContent>
                          Absolutely. We prioritize the security of your data. Our cloud infrastructure employs industry-standard encryption protocols and robust security measures to ensure the confidentiality and integrity of your information.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                      <AccordionTrigger>Can I customize the deployment process according to my requirements?</AccordionTrigger>
                      <AccordionContent>
                          Certainly! Our cloud services offer flexibility. You can customize the deployment process based on your specific needs, allowing you to tailor the application deployment to match your unique preferences and requirements.
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>
          </section>

        <section id="open-source" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Proudly Open Source
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              CnCloud is open source and powered by open source
              software. <br /> The code is available on{" "}
              <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
              >
                GitHub
              </Link>
              .{" "}
            </p>

            <Button asChild>
              <Link href="">

                Star on Github
              </Link>
            </Button>
          </div>
        </section>
      </>
  );
}
