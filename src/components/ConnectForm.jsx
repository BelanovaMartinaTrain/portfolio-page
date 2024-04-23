"use client";
import { useState } from "react";
import { Label } from "./ui/input/label";
import { Input } from "./ui/input/input";
import { TextArea } from "./ui/input/textarea";
import { cn } from "../utils/cn";
import { BottomGradient } from "./ui/effects/bottomGradient";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

export default function ConnectForm() {
    const [formDataState, setFormDataState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [showAlert, setShowAlert] = useState(false);
    const [submittedForm, setSubmittedForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormDataState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = e.target;
        // const formData = new FormData(form);
        setSubmittedForm(formDataState);

        setFormDataState({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        const timer = setTimeout(() => setShowAlert(false), 5000);
        return () => clearTimeout(timer);
    };

    function handleClick() {
        setShowAlert(true);
    }

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
                        className=" relative group/btn  w-full sm:w-1/4 bg-blue-950  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--blue-800)_inset,0px_-1px_0px_0px_var(--blue-800)_inset]"
                        type="submit"
                        onClick={handleClick}
                    >
                        <span className="flex justify-center">
                            {" "}
                            Send <FaPaperPlane className="ml-2 mt-1 " />
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
                Thank you for your message {submittedForm.name}! I&apos;ll get in touch with you soon <FaSmile className=" ml-1 mt-[0.2rem]" />
            </div>
        </>
    );
}

// eslint-disable-next-line react/prop-types
const LabelInputContainer = ({ children, className }) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
