import { useState } from 'react';
import { HiUserAdd } from "react-icons/hi";
import useGetMember from "../../api/useGetMember";
import AddMemberModal from '../AddMemberModal/AddMemberModal';
type Props = {
  memberId?: string;
  groupId?:string;
  subGroupId?:string;
  refetch?: () => void
};
const MemberItem = (props: Props) => {
  const { memberId,groupId,subGroupId,refetch } = props;

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  
  if (memberId) {
    const member = useGetMember(memberId);
    return (
      <div className=" rounded-lg items-center w-32 md:w-40 flex flex-col gap-2 border border-1">
        <div className="w-28 md:w-[60%]">
          <img className="mask mask-squircle /90" src={member?.picture} />
        </div>

        <div className=" flex flex-col flex-1 place-content-evenly">
          <div className="flex flex-col text-center">
            <h3 className="text-black font-semibold">{member?.firstname} </h3>
            <h3 className="text-black font-medium">{member?.lastname}</h3>
          </div>

          <div className=" p-2 self-center">
            <img className="p-2 sm:max-w-[7rem] max-h-[3rem]" src={member?.companyLogo} />
          </div>
        </div>
      </div>
    );
  }

 
  return (
    <><div className="self-center rounded-2xl flex flex-col  w-18 h-18 items-center p-2 justify-center border border-1">
      <HiUserAdd size={44} color="black" onClick={() => openModal()} />
    </div><AddMemberModal refetch={refetch!} groupId={groupId!} subGroupId={subGroupId!} show={isOpen} closeModal={closeModal} /></>
   

  );
};
export default MemberItem;
