type Props = {
  job: string;
  workplace: string;
  date: string;
};

function ExperienceItem({ job, workplace, date }: Props) {
  return (
    <div className="h-[140px] bg-customGray mr-3 border border-customBlack rounded-sm shadow-div p-3">
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="font-bold text-md line-clamp-2">{job}</p>
          <p className="text-sm line-clamp-2">{workplace}</p>
        </div>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
