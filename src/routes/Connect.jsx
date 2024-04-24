import ConnectForm from "../components/ConnectForm";
import ButtonLink from "../components/ButtonLink";

function Connect() {
    return (
        <>
            {" "}
            <div className="max-w-5xl w-full font-dmsans mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                <h2 className="font-normal text-3xl text-slate-200 mb-8">Let&apos;s connect!</h2>

                {/* <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 h-[1px] w-full" /> */}
                <p className=" text-lg font-light max-w-sm  text-slate-100">Check out my profiles:</p>
                <div className="flex flex-col gap-4 md:gap-[5%] lg:gap-[10%] md:flex-row mt-6 mx-[0.4rem] w-full md:justify-between">
                    <ButtonLink
                        label="LinkedIn"
                        linkTo={"https://www.linkedin.com/in/martina-belanová-b08646145"}
                        linkClass={"w-full "}
                        spanClass={""}
                        iconType={"linkedin"}
                    />
                    <ButtonLink
                        label="Github"
                        linkTo={"https://github.com/BelanovaMartinaTrain"}
                        linkClass={"w-full"}
                        spanClass={""}
                        iconType={"github"}
                    />
                    <ButtonLink
                        label="Curriculum Vitae
"
                        linkTo={""}
                        linkClass={"w-full"}
                        spanClass={""}
                        iconType={""}
                    />
                </div>
                <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 h-[1px] w-full" />
                <p className=" text-lg font-light max-w-sm mt-2 text-slate-100">Or send me a message:</p>
                <ConnectForm />
            </div>
        </>
    );
}

export default Connect;
