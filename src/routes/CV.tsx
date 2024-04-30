import { useEffect, useState } from "react";
import ButtonLink from "../components/ButtonLink";
import styles from "../styles/styles.module.css";

export default function CV() {
    const [data, setData] = useState(null);

    async function fetchData() {
        const res = await fetch("/Martina_Belanova_CV_EN.json");
        const data = await res.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2 print:my-0 h-[1px] w-full print:hidden " />
            <div className="w-full print:m-0 print:p-0  grid justify-center">
                <div className="flex gap-x-4 justify-center md:justify-end mt-2 print:m-0 print:hidden  ">
                    <ButtonLink linkClass="" linkTo="/Martina_Belanova_CV_EN.pdf" spanClass={"text-sm"} iconType="download" download>
                        PDF
                    </ButtonLink>
                    <ButtonLink linkClass="" linkTo="/Martina_Belanova_CV_EN.json" spanClass={"text-sm"} iconType="download" download>
                        JSON
                    </ButtonLink>
                    <ButtonLink linkClass="" linkTo="/Martina_Belanova_CV_EN.xml" spanClass={"text-sm"} iconType="download" download>
                        XML
                    </ButtonLink>
                </div>
                {data && (
                    <div
                        className="p-0 print:border-none pb-6 pt-2 md:p-4 print:m-0 print:p-0 bg-slate-950 shadow-test border-blue-400/[0.3] print:shadow-none text-neutral-300 border 
                    rounded-lg  mt-4 print:mt-0 print:text-black max-w-6xl print:max-w-7xl w-full gap-4 
                    text-normal print:text-xs grid lg:grid-cols-3 print:grid-cols-3"
                    >
                        <div className="col-span-2 p-4 pb-0 lg:pb-4 print:p-0 ">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl pb-2 text-neutral-50 print:text-sky-800 font-medium">
                                {data.personal.first_name} {data.personal.last_name}
                            </h1>
                            <h2 className={`${styles.cv_h2} print:text-sm`}>{data.personal.summary}</h2>
                            <div className="print:border-none print:p-0  mt-5 lg:hidden print:hidden mb-6">
                                <h4 className={`${styles.cv_h4} print:text-xs`}>{data.personal.email}</h4>
                                <h4 className={`${styles.cv_h4} print:text-xs`}>{data.personal.phone}</h4>
                                <a href={data.personal.url} className="print:text-xs">
                                    https://martinabelanova.site
                                </a>
                                <img src="/qr_site.svg" alt="QR kod with link to martinabelanova.site" className="w-1/2 hidden print:block" />
                            </div>

                            <h3 className={`${styles.cv_h3} mt-4 mb-2 lg:mb-0 print:mb-0 print:text-sm`}>Work experience:</h3>
                            {data.work.map((job) => (
                                <div key={job.company} className=" mb-5 lg:mb-4 print:mb-2">
                                    <h4 className={`${styles.cv_h4} print:text-xs`}>{job.position}</h4>
                                    <h4 className={`${styles.cv_h4} print:text-xs`}>{job.company}</h4>

                                    <p className={`${styles.cv_p} print:text-xs`}>
                                        {new Date(job.startDate).getFullYear()} - {new Date(job.endDate).getFullYear()}
                                    </p>
                                    <h5 className={`${styles.cv_h5} print:text-xs`}>Responsibilities:</h5>
                                    <ul className={`${styles.cv_ul} print:text-xs list-disc list-outside ml-8  print:text-black`}>
                                        {job.summary.map((task, index) => (
                                            <li key={`job-${index}`}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="col-span-1 flex p-1  print:p-0 ">
                            <div className="invisible lg:visible print:border print:border-l-slate-800/[0.5]  w-px h-full mr-4 bg-gradient-to-t from-transparent via-slate-700 to-transparent"></div>
                            <div className="mt-1">
                                <div className="print:border-none print:p-0  hidden lg:block print:block mb-6 print:mb-3">
                                    <h4 className={`${styles.cv_h4} print:text-xs`}>{data.personal.email}</h4>
                                    <h4 className={`${styles.cv_h4} print:text-xs`}>{data.personal.phone}</h4>
                                    <a href={data.personal.url} className="print:text-xs">
                                        martinabelanova.site
                                    </a>
                                    <img src="/qr_site.svg" alt="QR kod with link to martinabelanova.site" className="w-1/2 hidden print:block" />
                                </div>
                                <div className="print:pt-0 lg:pt-4">
                                    <h3 className={`${styles.cv_h3} print:text-sm`}>Skills:</h3>
                                    {data.skills.map((skill, index) => (
                                        <div key={`skil-${index}`} className="pb-2">
                                            <h4 className={`${styles.cv_h4} print:text-xs`}>{skill.name}</h4>
                                            <p className={`${styles.cv_p} print:text-xs`}>{skill.keywords.join(", ")}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <h3 className={`${styles.cv_h3} print:text-sm`}>Education:</h3>
                                    {data.education.map((school, index) => (
                                        <div key={`school-${index}`} className="pb-2">
                                            <h4 className={`${styles.cv_h4} print:text-xs`}>{school.institution}</h4>
                                            <h5 className={`${styles.cv_h5} print:text-xs`}>{school.area}</h5>
                                            <p className={`${styles.cv_p} print:text-xs`}>
                                                {new Date(school.startDate).getFullYear()} - {new Date(school.endDate).getFullYear()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <h3 className={`${styles.cv_h3} print:text-sm`}>Courses:</h3>
                                    <p className={`${styles.cv_p} print:text-xs`}>
                                        See <a href="https://martinabelanova.site/journey">martinabelanova.site/journey</a>
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <h3 className={`${styles.cv_h3} print:text-sm`}>Languages:</h3>
                                    {data.languages.map((language, index) => (
                                        <div key={`language-${index}`} className="pb-[0.15rem]">
                                            <h4 className={`${styles.cv_h4} print:text-xs`}>
                                                {language.language}: {language.fluency}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <h3 className={`${styles.cv_h3} print:text-sm`}>Hobbies and interests:</h3>
                                    <p className={`${styles.cv_p} print:text-xs`}>{data.interests[0].keywords.join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
