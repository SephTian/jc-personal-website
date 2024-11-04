type Props = {
  job: string;
  workplace: string;
  date: string;
};

function ExperienceItem({ job, workplace, date }: Props) {
  return (
    <div className="h-[120px] bg-customGray mr-3 border border-customBlack rounded-sm shadow-div p-3">
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="font-bold text-md">{job}</p>
          <p className="text-sm">{workplace}</p>
        </div>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
