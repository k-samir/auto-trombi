import { useState } from "react";
import { HiUserAdd, HiUserRemove } from "react-icons/hi";
import { Member } from "../../models/Member";

import AddMemberModal from "../AddMemberModal/AddMemberModal";
import RemoveMemberModal from "../RemoveMemberModal/RemoveMemberModal";
type Props = {
  member?: Member;
  groupId?: string;
  subGroupId?: string;
  refetch?: () => void;
};
const MemberItem = (props: Props) => {
  const { member, groupId, subGroupId, refetch } = props;

  const [addModalIsOpen, setAddModalOpen] = useState(false);
  const [removeMemberIsOpen, setRemoveMemberOpen] = useState(false);

  function closeAddModal() {
    setAddModalOpen(false);
  }

  function closeRemoveModal() {
    setRemoveMemberOpen(false);
  }

  function openAddModal() {
    setAddModalOpen(true);
  }


  if (member) {
    //const member = useGetMember(memberId);
    //if (member) {
      return (
        <>
          <div className=" rounded-lg items-center w-32 md:w-40 flex flex-col gap-1 border border-1 bg-base-100">
            <div className="flex flex-1 self-end px-2 pt-2">
              <HiUserRemove
                onClick={() => setRemoveMemberOpen(true)}
                size={20}
                className="hover:fill-red-500 hover:cursor-pointer"
              />
            </div>
            <div className="flex w-28 md:w-[60%] h-28 ">
              <img
                className="mask mask-squircle object-scale-down "
                src={member?.picture}
              />
            </div>

            <div className=" flex flex-col flex-1 place-content-evenly">
              <div className="flex flex-col text-center">
                <h3 className="text-black font-semibold">
                  {member?.firstname}{" "}
                </h3>
                <h3 className="text-black font-medium">{member?.lastname}</h3>
              </div>

              <div className="p-2 self-center">
                <img className="p-2 object-scale-down w-28 h-20" src={member?.companyLogo} />
              </div>
            </div>
          </div>
          {(groupId && subGroupId) &&
          
            <RemoveMemberModal
            refetch={refetch!}
              show={removeMemberIsOpen}
              groupId={groupId!}
              subGroupId={subGroupId!}
              closeModal={closeRemoveModal}
              memberToRemove={member}
            />
          }
        </>
      );
    //}
  }

  return (
    <>
      <div onClick={() => openAddModal()} className="self-center rounded-2xl flex flex-col bg-base-100 grouphover:cursor-pointer w-18 h-18 items-center p-2 justify-center border border-1 hover:bg-black/10">
        <HiUserAdd size={44} color="black"  className="group-hover:fill-blue-500 " />
      </div>
      <AddMemberModal
        refetch={refetch!}
        groupId={groupId!}
        subGroupId={subGroupId!}
        show={addModalIsOpen}
        closeModal={closeAddModal}
      />
    </>
  );
};
export default MemberItem;
