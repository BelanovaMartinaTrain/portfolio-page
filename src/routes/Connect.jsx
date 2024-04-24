import ConnectForm from "../components/ConnectForm";
import ButtonLink from "../components/ButtonLink";
import { NavLink } from "react-router-dom";
import { BsPersonVcard } from "react-icons/bs";
import { BottomGradient } from "../components/ui/effects/bottomGradient";

function Connect() {
    return (
        <>
            <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2 h-[1px] w-full" />
            <div className="max-w-5xl w-full font-dmsans mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                <h2 className="font-normal text-2xl md:text-3xl text-slate-200 mb-8">Let&apos;s connect!</h2>

                {/* <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 h-[1px] w-full" /> */}
                <p className=" text-lg font-light max-w-sm  text-slate-100">Check out my profiles:</p>
                <div className="flex flex-col gap-4 md:gap-[5%] lg:gap-[10%] md:flex-row mt-6 mx-[0.4rem] w-full md:justify-between">
                    <ButtonLink
                        label="LinkedIn"
                        linkTo={"https://www.linkedin.com/in/martina-belanová-b08646145"}
                        linkClass={"w-full "}
                        spanClass={""}
                        iconType={"linkedin"}
                        rel="noreferrer"
                        target="_blank"
                    />
                    <ButtonLink
                        label="Github"
                        linkTo={"https://github.com/BelanovaMartinaTrain"}
                        linkClass={"w-full"}
                        spanClass={""}
                        iconType={"github"}
                        rel="noreferrer"
                        target="_blank"
                    />
                    <NavLink
                        to={"/cv"}
                        className=" text-slate-300 text-base w-full relative group/btn flex space-x-2 items-center justify-start px-4   rounded-md h-10 font-medium shadow-input bg-blue-950 shadow-[0px_0px_1px_1px_var(--blue-800)]"
                    >
                        <BsPersonVcard className="h-4 w-4 text-slate-300 mr-2" />
                        Curriculum Vitae
                        <BottomGradient />
                    </NavLink>
                </div>
                <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 h-[1px] w-full" />
                <p className=" text-lg font-light max-w-sm mt-2 text-slate-100">Or send me a message:</p>
                <ConnectForm />
            </div>
        </>
    );
}

export default Connect;
