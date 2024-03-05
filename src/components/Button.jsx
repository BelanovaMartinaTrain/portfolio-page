const Button = ({ children }) => {
  if (!children) {
    children = "default"
  } 

  return (
    <button className="transition ease-in-out delay-150 px-10 py-3 rounded-lg bg-[#02587D] shadow-base-100 shadow-md hover:bg-[#0A5D75] bg-opacity-100  font-bold font-dmsans text-lg ">{children}</button>
  )
}

export default Button