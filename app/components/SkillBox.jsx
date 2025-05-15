const SkillBox = ({lang}) => {
  return (
    <div className="border-1 border-[#ffffff13] p-2 rounded-2xl">
        <div className="bg-linear-to-t from-[#090909] to-[#212121] pt-10 px-6 pb-6 rounded-2xl">
            <div className="w-10 h-10 mb-8 bg-primary rounded-full">

            </div>
            <div>
                <h3 className="text-white mb-2 font-semibold">{lang}</h3>
                <p className="text-[#ffffffbe] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default SkillBox