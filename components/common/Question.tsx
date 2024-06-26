import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { MessageCircle, SendIcon } from "lucide-react";
  import { Label } from "@/components/ui/label";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
  import React, { useState } from "react";
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  import toast from "react-hot-toast";
import { Textarea } from "../ui/textarea";
  
  type Props = {};
  
  const Question = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [category, setCategory] = useState("option-one");
  
    const handleSubmit = () => {
      if (!name || !question) {
        toast.error("Please enter your name and question before submitting.");
        return;
      }
  
      // Handle form submission logic here, e.g., send data to an API or server
      toast.success("Your question has been submitted successfully!");
      setIsOpen(false);
      console.log(name);
      console.log(question);
      console.log(category);
      
      setName("");
      setQuestion("");
      setCategory("option-one");
    };
  
    return (
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <div className="flex gap-4 p-4 dark:hover:bg-white dark:hover:text-black duration-300 ease-in-out hover:bg-black bg-primary text-white items-center">
              Ask a Question
              <MessageCircle />
            </div>
          </DialogTrigger>
          <DialogContent>
          <form action='https://getform.io/f/31554fc2-79d7-4512-9319-0b086f5807ae' method='POST'>
            <Input type="hidden" name="QuestionType" value={category || ''} />
            <DialogHeader>
              <DialogTitle>ASK US A QUESTION</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-4 py-4 text-left">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold">Introduce yourself</h2>
                    <Input
                      name="Name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold">What&apos;s the Question about?</h2>
                    <RadioGroup
                      value={category}
                      name="QuestionType"
                      onValueChange={setCategory}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="services" id="services" />
                        <Label htmlFor="services">Our Services</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="projects" id="projects" />
                        <Label htmlFor="projects">Project</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="others" id="others" />
                        <Label htmlFor="others">Others</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold">Question</h2>
                    <Textarea 
                      placeholder="Type Question Here"
                      value={question}
                      name="question"
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            <Button type='submit' className="flex gap-4 p-3 cursor-pointer w-fit dark:hover:bg-primary dark:hover:text-white duration-300 ease-in-out hover:bg-black dark:bg-white/80 dark:text-primary bg-primary text-white items-center">
                  Send Question
                <SendIcon />
                </Button>
            </DialogFooter>
          </form>

          </DialogContent>
        </Dialog>
      </div>
    );
  };
  
  export default Question;
  