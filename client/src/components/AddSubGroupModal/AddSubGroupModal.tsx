import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GiCheckboxTree } from "react-icons/gi";
import { addSubGroup } from "../../services/AuthApi";

type Props = {
  groupId: string;
 // subGroupId: string;
  show: boolean;
  closeModal: () => void;
  refetch: () => void;
};
const AddSubGroupModal = (props: Props) => {
  const { show, closeModal,groupId,refetch } = props;

  const handleAddNew = async (event: any) => {
    event.preventDefault();
    console.log("adding " + event.target.subgroupName.value + " to " + groupId);

    try {
      const response = await addSubGroup(
        event.target.subgroupName.value,
        groupId
      );
      refetch();
      closeModal();
    } catch ({ response }) {
      //console.log(response);
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
                <form onSubmit={handleAddNew} className="flex flex-col gap-4">
                  <div className="">
                    <label className="input-group input-group-md">
                      <span>
                      <GiCheckboxTree />
                      </span>

                      <input
                        required
                        type="text"
                        name="subgroupName"
                        placeholder="Subgroup Name"
                        className="input input-bordered input-md"
                      />
                    </label>
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
                      type="submit"
                      className="rounded-xl border border-transparent  px-4 py-2 text-sm font-medium text-white bg-red-500 focus:outline-none hover:shadow-lg hover:bg-red-600"
                    >
                      Add SubGroup
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
export default AddSubGroupModal;
