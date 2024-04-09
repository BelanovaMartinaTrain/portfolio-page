// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
    return (
        <button className="transition ease-in-out z-40  px-10 py-3 rounded-lg bg-blue-900 shadow-base-100 shadow-md hover:bg-blue-600 bg-opacity-100 hover:-translate-y-0.5 font-bold font-dmsans text-lg ">
            {children}
        </button>
    );
};

export default Button;
