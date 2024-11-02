type Props = {
  title: string;
};

function SectionTitle({ title }: Props) {
  return (
    <div className="w-[180px] h-[72px] md:w-[200px] bg-[#F2f2f2] flex justify-center items-center border border-[#121212] rounded-sm shadow-div">
      <p className="text-lg md:text-xl">{title}</p>
    </div>
  );
}

export default SectionTitle;
