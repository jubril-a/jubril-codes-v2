const SkillBox = ({lang}) => {
  return (
    <div className="border-1 border-[#ffffff13] p-5">
        <div className="max-w-[320px] bg-linear from-[#212121] to-[#090909]">
            <div className="mb-8">

            </div>
            <div>
                <h3 className="text-white">{lang}</h3>
                <p className="text-[#ffffff88] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default SkillBox