import Card from "../components/Card";

function Projects() {
    return (
        <>
            {/* //TODO Link ikonku link, badges s technologiami, more click*/}
            <div className="md:max-w-5xl grid gap-5 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4  rounded-2xl mx-auto ">
                <Card>
                    <div className="relative group  rounded-2xl    ">
                        <div className="grid  rounded-2xl md:grid-flow-row md:grid-col-2 gap-0 justify-around   ">
                            <img
                                src="/nahlad.png"
                                className=" w-full  group-hover:opacity-40 group-hover:blur-sm opacity-100 transition-opacity ease-in-out duration-200 rounded-t-[0.95rem] "
                            />
                            <h2 className="rounded-2xl font-medium xs:text-lg text-center text-base sm:text-xl md:text-lg lg:text-xl flex justify-center font-dmsans  my-4  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                                Aurora Forecast website
                            </h2>
                            <div className="font-light font-dmsans mt-1 px-6 py-2 absolute transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                                <h3 className="mb-1 text-lg ">Learning goals:</h3>
                                <ul className="list-disc list-outside text-base leading-5 ml-5 grid grid-flow-row grid-cols-1  ">
                                    <li>Server Components</li>
                                    <li>Fast-loading Website</li>
                                    <li>Modern Design</li>
                                    <li>React Context</li>
                                    <li>NEXT JS App routing</li>
                                    <li>Grid Layouts</li>
                                    <li>Fetch and Display of Data</li>
                                    <li>Basic principles of frontend development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="relative group   rounded-2xl   mx-auto ">
                        <div className="grid  rounded-2xl md:grid-flow-row md:grid-col-2 gap-0 justify-around    ">
                            <img
                                src="/server.jpg"
                                className=" w-full  group-hover:opacity-10 group-hover:blur-sm opacity-50 transition-opacity ease-in-out duration-200 rounded-t-[0.95rem] "
                                alt="Server closeup"
                            />
                            <h2 className="rounded-2xl font-medium xs:text-lg text-center text-base sm:text-xl md:text-lg lg:text-xl flex justify-center font-dmsans  my-4  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                                Aurora Forecast backend server
                            </h2>
                            <div className="font-light font-dmsans mt-1 px-6 py-2 absolute transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                                <h3 className="mb-1 text-lg ">Learning goals:</h3>
                                <ul className="list-disc list-outside text-base leading-5 ml-5 grid grid-flow-row grid-cols-1  ">
                                    <li>Node JS backend server setup</li>
                                    <li>Express JS framework</li>
                                    <li>Data manipulation</li>
                                    <li>REDIS</li>
                                    <li>Time limit for API calls and data storage</li>
                                    <li>Docker deploy</li>
                                    <li>VPS setup with load balancer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="relative group   rounded-2xl   mx-auto ">
                        <div className="grid  rounded-2xl md:grid-flow-row md:grid-col-2 gap-0 justify-around    ">
                            <img
                                src="/server.jpg"
                                className=" w-full  group-hover:opacity-10 group-hover:blur-sm opacity-50 transition-opacity ease-in-out duration-200 rounded-t-[0.95rem] "
                                alt="Server closeup"
                            />
                            <h2 className="rounded-2xl font-medium xs:text-lg text-center text-base sm:text-xl md:text-lg lg:text-xl flex justify-center font-dmsans  my-4  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                                Aurora Forecast backend server
                            </h2>
                            <div className="font-light font-dmsans mt-1 px-6 py-2 absolute transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                                <h3 className="mb-1 text-lg ">Learning goals:</h3>
                                <ul className="list-disc list-outside text-base leading-5 ml-5 grid grid-flow-row grid-cols-1  ">
                                    <li>Node JS backend server setup</li>
                                    <li>Express JS framework</li>
                                    <li>Data manipulation</li>
                                    <li>REDIS</li>
                                    <li>Time limit for API calls and data storage</li>
                                    <li>Docker deploy</li>
                                    <li>VPS setup with load balancer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="relative group   rounded-2xl   mx-auto ">
                        <div className="grid  rounded-2xl md:grid-flow-row md:grid-col-2 gap-0 justify-around    ">
                            <img
                                src="/server.jpg"
                                className=" w-full  group-hover:opacity-10 group-hover:blur-sm opacity-50 transition-opacity ease-in-out duration-200 rounded-t-[0.95rem] "
                                alt="Server closeup"
                            />
                            <h2 className="rounded-2xl font-medium xs:text-lg text-center text-base sm:text-xl md:text-lg lg:text-xl flex justify-center font-dmsans  my-4  bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                                Aurora Forecast backend server
                            </h2>
                            <div className="font-light font-dmsans mt-1 px-6 py-2 absolute transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                                <h3 className="mb-1 text-lg ">Learning goals:</h3>
                                <ul className="list-disc list-outside text-base leading-5 ml-5 grid grid-flow-row grid-cols-1  ">
                                    <li>Node JS backend server setup</li>
                                    <li>Express JS framework</li>
                                    <li>Data manipulation</li>
                                    <li>REDIS</li>
                                    <li>Time limit for API calls and data storage</li>
                                    <li>Docker deploy</li>
                                    <li>VPS setup with load balancer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default Projects;
