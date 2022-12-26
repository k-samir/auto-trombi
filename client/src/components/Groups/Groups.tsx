import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { FiChevronUp } from "react-icons/fi";
import { GiCheckboxTree } from "react-icons/gi";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";
import AddGroupModal from "../AddGroupModal/AddGroupModal";
import AddSubGroupModal from "../AddSubGroupModal/AddSubGroupModal";

type Props = {
  groups: Group[];
  selectedSubGroup: SubGroup;
  handleSelectedChange: (group: Group, subgroup: SubGroup) => void;
  refetch: () => void;
};
const Groups = (props: Props) => {
  const { groups, selectedSubGroup, handleSelectedChange,refetch } = props;

  const [addSubGroupModalIsOpen, setAddSubGroupModalOpen] = useState(false);
  const [addGroupModalIsOpen, setAddGroupModalOpen] = useState(false);

  function closeGroupModal() {
    setAddGroupModalOpen(false);
  }

  function openAddGroupModal() {
    setAddGroupModalOpen(true);
  }
  

  function closeSubGroupModal() {
    setAddSubGroupModalOpen(false);
  }

  function openAddSubGroupModal() {
    setAddSubGroupModalOpen(true);
  }

  return (
    <div className="flex flex-col overflow-auto scrollbar-hide sm:w-[15%] sm:h-[calc(100vh-75px)] items-stretch sm:sticky top-[75px] z-2">
      <div className="w-full ">
        <div className="mx-auto w-full max-w-md rounded-2xl p-2">
          <ul className="menu menu-compact  lg:menu-normal flex flex-1  bg-base-100">
            {groups.map((group: Group, index: number) => {
              return (
                <Disclosure defaultOpen={index == 0} key={index}>
                  {({ open }) => (
                    <>
                      <div key={index}>
                        <Disclosure.Button className="flex w-full justify-between bg-primary px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                          <span>{group.name}</span>
                          <FiChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-white`}
                          />
                        </Disclosure.Button>

                        {group.subGroups.map((sb: SubGroup, index: number) => {
                          return (
                            <Disclosure.Panel key={index}>
                              <li
                                className={`${
                                  selectedSubGroup.name === sb.name
                                    ? "bordered"
                                    : ""
                                } border border-1 flex text-gray-500 `}
                                onClick={() => handleSelectedChange(group, sb)}
                              >
                                <a className="text-sm">{sb.name}</a>
                              </li>
                            </Disclosure.Panel>
                          );
                        })}
                        <Disclosure.Panel>
                          <li className="text-sm">
                            <a className="flex flex-1 text-sm border border-1" onClick={openAddSubGroupModal}>
                              <GiCheckboxTree size={22} />
                              Add Subgroup
                            </a>
                          </li>

                          <AddSubGroupModal show={addSubGroupModalIsOpen} closeModal={closeSubGroupModal} groupId={group.id} refetch={refetch}/>

                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </ul>

          <div className="divider text-white fill-white">OR</div>

          <div className="bg-white rounded-md">
            <a className="flex flex-1 border border-1 p-2 gap-2 rounded-md" onClick={openAddGroupModal}>
              <BiBookAdd size={22} />
              Add Group
            </a>
            <AddGroupModal show={addGroupModalIsOpen} closeModal={closeGroupModal} refetch={refetch}  />
          </div>
        </div>
      </div>

      {/*  <ul className="menu menu-compact lg:menu-normal flex flex-1 p-2 rounded-box">
        {groups.map((group: Group, index: number) => {
          return (
            <div key={index}>
              <li className="menu-title">
                <span>{group.name}</span>
              </li>
              {group.subGroups.map((sb: SubGroup, index: number) => {
                return (
                  <li
                    key={index}
                    className={`${
                      selectedSubGroup.name === sb.name ? "bordered" : ""
                    } border border-1`}
                    onClick={() => handleSelectedChange(group, sb)}
                  >
                    <a>{sb.name}</a>
                  </li>
                );
              })}
              <li key={uuid()} className="">
                <a className="flex flex-1 border border-1">
                  <GiCheckboxTree size={18} />
                  add subgroup
                </a>
              </li>
            </div>
          );
        })}

        <div className="divider"></div>

        <li>
          <a className="flex flex-1 border border-1">
            <BiBookAdd size={30} />
            add group
          </a>
        </li>
      </ul>*/}
    </div>
  );
};

export default Groups;
