type Props = {
  skill: string;
};

function Skill({ skill }: Props) {
  return (
    <img className="rounded-[16px] shadow-button hover:translate-x-1 hover:translate-y-1 hover:shadow-none border border-customBlack overflow-clip" src={`https://skillicons.dev/icons?i=${skill}`} />
  );
}

export default Skill;
