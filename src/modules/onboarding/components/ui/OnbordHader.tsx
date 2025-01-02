interface OnboardHeaderPropsType{
    title: string,
    description: string
}
function OnbordHader({title,description}:OnboardHeaderPropsType) {
  return (
    <div className="w-full text-center leading-10">
      <h1 className="md:text-4xl text-2xl">{title}</h1>
      <p className="text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

export default OnbordHader;
