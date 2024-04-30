"use client";
import { useEffect, useState } from "react";
import { Label } from "./ui/input/label";
import { Input } from "./ui/input/input";
import { TextArea } from "./ui/input/textarea";
import { cn } from "../utils/cn";
import { BottomGradient } from "./ui/effects/bottomGradient";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ImSpinner2 } from "react-icons/im";

emailjs.init({
    publicKey: "_w0TS0n5ISEX3B_0Q",
});

const clearForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ConnectForm() {
    const [formDataState, setFormDataState] = useState(clearForm);
    const [showAlert, setShowAlert] = useState(false);
    const [submittedForm, setSubmittedForm] = useState(clearForm);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormDataState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        setSubmittedForm(formDataState);
        setIsLoading(true);

        emailjs.send("service_abi6ikk", "template_h6xf9hb", formDataState).then(
            () => {
                setFormDataState(clearForm);
                setIsError(false);
                setShowAlert(true);
                setIsLoading(false);
            },
            () => {
                setIsError(true);
                setShowAlert(true);
                setIsLoading(false);
            }
        );
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showAlert) {
            timer = setTimeout(() => setShowAlert(false), 10000);
        }
        return () => clearTimeout(timer);
    }, [showAlert]);

    return (
        <>
            <form className="my-8 " onSubmit={handleSubmit}>
                <div className="flex flex-wrap md:flex-nowrap gap-x-4">
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" value={formDataState.name} onChange={handleChange} placeholder="Name" type="text" required />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={formDataState.email}
                            onChange={handleChange}
                            placeholder="email@email.com"
                            type="email"
                            className="appearance-none"
                            required
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                        id="subject"
                        name="subject"
                        value={formDataState.subject}
                        onChange={handleChange}
                        placeholder="Job Interview"
                        type="text"
                        className=""
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>

                    <TextArea
                        id="message"
                        name="message"
                        value={formDataState.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        className="  h-20 w-full "
                        required
                    />
                </LabelInputContainer>
                <div className="  w-full sm:flex sm:justify-end">
                    <button
                        className={` relative group/btn  ${
                            isLoading && "disabled"
                        } w-full sm:w-1/4 bg-blue-950 disabled:text-slate-600 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--blue-800)_inset,0px_-1px_0px_0px_var(--blue-800)_inset]`}
                        type="submit"
                        disabled={isLoading}
                    >
                        <span className="flex justify-center">
                            {" "}
                            Send {isLoading ? <ImSpinner2 className="ml-2 mt-1 animate-spin" /> : <FaPaperPlane className="ml-2 mt-1 " />}
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
            <div
                className={`flex p-4 text-sm font-medium rounded-lg bg-blue-900 transition-opacity duration-1000 ease-linear ${
                    !showAlert ? "opacity-0" : "opacity-100"
                }`}
            >
                {isError
                    ? "Oops! Something went wrong... Please try to contact me trough my accounts or the contact details in my CV. Thank you :)"
                    : `Thank you for your message ${submittedForm.name}! I'll get in touch with you soon :)`}
            </div>
        </>
    );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className: string }) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
