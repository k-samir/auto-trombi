import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaUser } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { MdPhotoCamera, MdWork } from "react-icons/md";

import useGetRemainingMembers from "../../api/UseGetRemainingMembers";
import { Member } from "../../models/Member";
import {
  addExistingMemberToSubGroup,
  addNewMemberToSubGroup
} from "../../services/AuthApi";

type Props = {
  groupId: string;
  subGroupId: string;
  show: boolean;
  closeModal: () => void;
  refetch: () => void;
};
const AddMemberModal = (props: Props) => {
  const { show, closeModal, groupId, subGroupId, refetch } = props;

  var remainingMembers: Member[] = useGetRemainingMembers(
    groupId ?? "-1",
    subGroupId ?? "-1"
  );

  const handleAddNew = async (event: any) => {
    event.preventDefault();

    try {
      const response = await addNewMemberToSubGroup(
        event.target.firstname.value,
        event.target.lastname.value,
        event.target.company.value,
        event.target.picture.value,
        event.target.companyLogo.value,
        groupId,
        subGroupId
      );

      refetch();
      closeModal();
    } catch ({ response }) {}
  };

  const handleAddExisting = async (event: any) => {
    event.preventDefault();
    try {
      const response = await addExistingMemberToSubGroup(
        event.target.member.value,
        groupId,
        subGroupId
      );

      refetch();
      closeModal();
    } catch ({ response }) {}
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
                {remainingMembers.length > 0 && (
                  <form onSubmit={handleAddExisting}>
                    <div className="flex flex-col items-center gap-2">
                      <div className="">
                        <select
                          className="select select-info  flex max-w-xs"
                          defaultValue={"default"}
                          name="member"
                        >
                          <option value="default" disabled>
                            Select Available Member
                          </option>
                          {remainingMembers?.map((member, index) => (
                            <option key={index} value={member.id}>
                              {member.firstname} {member.lastname}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-1 ">
                        <button
                          type="submit"
                          className="rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-blue-900 bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Add existing Member
                        </button>
                      </div>
                    </div>
                    <div className="divider m-1 "></div>
                  </form>
                )}

                <form onSubmit={handleAddNew}>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Add new member
                    </h3>
                    <div className="">
                      <label className="input-group input-group-md">
                        <span>
                          <FaUser />
                        </span>

                        <input
                          required
                          type="text"
                          name="firstname"
                          placeholder="Firstname"
                          className="input input-bordered input-md"
                        />
                      </label>
                    </div>
                    <div className="">
                      <label className="input-group input-group-md">
                        <span>
                          <FaUser />
                        </span>

                        <input
                          required
                          type="text"
                          name="lastname"
                          placeholder="Lastname"
                          className="input input-bordered input-md"
                        />
                      </label>
                    </div>
                    <div className="">
                      <label className="input-group input-group-md">
                        <span>
                          <MdWork />
                        </span>

                        <input
                          required
                          type="text"
                          name="company"
                          placeholder="Company"
                          className="input input-bordered input-md"
                        />
                      </label>
                    </div>

                    <div className="">
                      <label className="input-group input-group-md">
                        <span>
                          <MdPhotoCamera />
                        </span>

                        <input
                          required
                          type="text"
                          name="picture"
                          placeholder="Member Picture url"
                          className="input input-bordered input-md"
                        />
                      </label>
                    </div>

                    <div className="">
                      <label className="input-group input-group-md">
                        <span>
                          <IoLogoApple />
                        </span>

                        <input
                          required
                          type="text"
                          name="companyLogo"
                          placeholder="Company Logo url"
                          className="input input-bordered input-md"
                        />
                      </label>
                    </div>

                    <div className="flex flex-col"></div>

                    <button
                      type="submit"
                      className=" w-[65%] self-center rounded-md border bg-blue-200 border-transparent  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Add new Member
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default AddMemberModal;
