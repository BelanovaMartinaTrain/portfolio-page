import ButtonLink from "../components/ButtonLink";
import { NavLink, useParams } from "react-router-dom";
import CVDetail from "./subroutes/CVDetail";

export default function CV() {
    let { language } = useParams();

    if (!language || (language.toUpperCase() !== "EN" && language.toUpperCase() !== "SK")) {
        language = "EN";
    } else {
        language = language.toUpperCase();
    }

    return (
        <>
            <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2 print:my-0 h-[1px] w-full print:hidden " />
            <div className="w-full print:m-0 print:p-0  grid justify-center">
                <div className=" flex justify-between items-baseline">
                    <div className=" print:hidden">
                        <NavLink
                            to="/cv/en"
                            className={` p-2 text-sm xxs:text-base sm:text-lg ${
                                language === "EN" ? "font-bold" : "hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)]"
                            }`}
                        >
                            EN
                        </NavLink>
                        <span className="text-sm xxs:text-base sm:text-lg"> | </span>
                        <NavLink
                            to="/cv/sk"
                            className={` p-2 text-sm xxs:text-base sm:text-lg  ${
                                language === "SK" ? "font-bold" : "hover:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.8)]"
                            }`}
                        >
                            SK
                        </NavLink>
                    </div>
                    <div className="flex gap-x-2 sm:gap-x-4 mt-2 print:m-0 print:hidden  ">
                        <ButtonLink
                            linkClass="px-1 xs:px-2 sm:px-4"
                            linkTo={`/Martina_Belanova_CV_${language}.pdf`}
                            spanClass={"text-sm"}
                            iconType="download"
                            download
                        >
                            PDF
                        </ButtonLink>
                        <ButtonLink
                            linkClass="px-1 xs:px-2 sm:px-4"
                            linkTo={`/Martina_Belanova_CV_${language}.json`}
                            spanClass={"text-sm"}
                            iconType="download"
                            download
                        >
                            JSON
                        </ButtonLink>
                        <ButtonLink
                            linkClass="px-1 xs:px-2 sm:px-4"
                            linkTo={`/Martina_Belanova_CV_${language}.xml`}
                            spanClass={"text-sm"}
                            iconType="download"
                            download
                        >
                            XML
                        </ButtonLink>
                    </div>
                </div>
                <CVDetail language={language} />
            </div>
        </>
    );
}
