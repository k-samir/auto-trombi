import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Member } from "../../models/Member";
import { removeMemberFromSubGroup } from "../../services/AuthApi";

type Props = {
  show: boolean;
  closeModal: () => void;
  groupId: string;
  subGroupId: string;
  memberToRemove: Member;
  refetch: () => void;
};
const RemoveMemberModal = (props: Props) => {
  const { refetch,show, closeModal, groupId,subGroupId,memberToRemove } = props;

 
  const handleRemoveMember = async () => {
 
    try {
      const response = await removeMemberFromSubGroup(
        memberToRemove.id,
        groupId,
        subGroupId
      );
      refetch();
      closeModal();
    } catch ({ response }) {
    }
  };

  
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto bg-black/70">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white border-primary border-[2px] flex flex-col gap-2 w-full max-w-md transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col text-center gap-6">
                  <div className="flex flex-col gap-4">
                    <FaTrashAlt
                      size={40}
                      className="fill-red-500 self-center"
                    />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-bold">Are you sure?</h2>
                      <p className="text-sm text-gray-500 px-8">
                        Do you really want to remove
                        <span className="font-bold">
                          {" "}
                          {memberToRemove.firstname} {memberToRemove.lastname}{" "}
                        </span>
                        from this subgroup ? This process cannot be undone
                      </p>
                    </div>
                  </div>
                  <div className="flex self-center gap-2">
                    <button
                      type="button"
                      className="rounded-xl border px-4 py-2 text-sm font-medium border-black/20 focus:outline-none hover:shadow-lg hover:bg-gray-100"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="rounded-xl border border-transparent  px-4 py-2 text-sm font-medium text-white bg-red-500 focus:outline-none hover:shadow-lg hover:bg-red-600"
                      onClick={handleRemoveMember}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default RemoveMemberModal;
