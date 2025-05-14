
const Button = ({ label, href }) => {
  return (
    <a href={href} className="bg-primary first:bg-secondary hover:opacity-60 font-medium py-2 px-4 text-[#363636] first:text-white text-[12px] rounded-[8px]">{ label }</a>
  )
}

export default Button