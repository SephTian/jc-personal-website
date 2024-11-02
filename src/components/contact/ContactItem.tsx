import { ReactElement } from 'react';
import Button from '../UI/Button';
import { TbSend } from 'react-icons/tb';

type Props = {
  link: string;
  title: string;
  icon: ReactElement;
  detail: string;
  isLink: boolean;
};

function ContactItem({ link, icon, title, detail, isLink }: Props) {
  return (
    <div className="bg-customGray p-2 flex justify-between w-[320px] h-[76px] rounded-sm border border-customBlack shadow-div">
      <div className="flex flex-col justify-between">
        <div className="flex gap-2 items-center">
          {icon}
          <p className="text-lg underline">{title}</p>
        </div>
        <p className="text-sm">{detail}</p>
      </div>
      <div className="h-full flex items-end">
        {isLink && (
          <Button link={link} className="bg-[#76FFB4] px-2 py-1 gap-2">
            <TbSend className="w-5 h-5" /> Connect
          </Button>
        )}
      </div>
    </div>
  );
}

export default ContactItem;
