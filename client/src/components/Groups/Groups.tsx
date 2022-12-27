import { Disclosure } from "@headlessui/react";
import { useContext, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { GiCheckboxTree } from "react-icons/gi";
import SelectedGroup from "../../contexts/SelectedGroup";
import SelectedSubGroup from "../../contexts/SelectedSubGroup";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";
import AddGroupModal from "../AddGroupModal/AddGroupModal";
import AddSubGroupModal from "../AddSubGroupModal/AddSubGroupModal";
import RemoveGroupModal from "../RemoveGroupModal/RemoveGroupModal";
import RemoveSubGroupModal from "../RemoveSubGroupModal/RemoveSubGroupModal";

type Props = {
  groups: Group[];
 // selectedSubGroup: SubGroup;
 // handleSelectedChange: (group: Group, subgroup: SubGroup) => void;
  refetch: () => void;
};
const Groups = (props: Props) => {
  const { groups, refetch } = props;

  const [addSubGroupModalIsOpen, setAddSubGroupModalOpen] = useState(false);
  const [addGroupModalIsOpen, setAddGroupModalOpen] = useState(false);
  const [removeGroupModalIsOpen, setRemoveGroupModalOpen] = useState(false);
  const [removeSubGroupModalIsOpen, setRemoveSubGroupModalOpen] = useState(false);
   
  const { setSelectedGroup } = useContext(SelectedGroup);
  const { selectedSubGroup,setSelectedSubGroup } = useContext(SelectedSubGroup);

  const [chosenGroup,setChosenGroup] = useState<Group>({} as Group);
  const [chosenSubGroup,setChosenSubGroup] = useState<SubGroup>({} as SubGroup);

  const handleSelectedChange = (group: Group, subgroup: SubGroup) => {
    setSelectedGroup(group);
    setSelectedSubGroup(subgroup);
  }
  
  // ADD GROUP MODAL
  const closeAddGroupModal = () => {
    setAddGroupModalOpen(false);
  };
  const openAddGroupModal = () => {
    setAddGroupModalOpen(true);
  };

  // ADD SUBGROUP MODAL
  const closeAddSubGroupModal = () => {
    setAddSubGroupModalOpen(false);
  };
  const openAddSubGroupModal = (group:Group) => {
    setChosenGroup(group);
    setAddSubGroupModalOpen(true);
  };
  // REMOVE GROUP MODAL
  const openRemoveGroupModal = (group:Group) => {
    setChosenGroup(group);
    setRemoveGroupModalOpen(true);
  };
  const closeRemoveGroupModal = () => {
    setRemoveGroupModalOpen(false);
  };
  // REMOVE SUBGROUP MODAL
  const openRemoveSubGroupModal = (group:Group,subGroup:SubGroup) => {
    setChosenGroup(group);
    setChosenSubGroup(subGroup);
    setRemoveSubGroupModalOpen(true);
  };
  const closeRemoveSubGroupModal = () => {
    setRemoveSubGroupModalOpen(false);
  };

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
                          <div className="flex gap-1 items-center">
                            {group.subGroups.length == 0 && (
                              <FaTimes
                                className="hover:fill-red-500 hover:cursor-pointer"
                                onClick={() => openRemoveGroupModal(group)}
                              />
                            )}
                                 <RemoveGroupModal
                                    refetch={refetch}
                                    show={removeGroupModalIsOpen}
                                    groupId={chosenGroup.id}
                                    closeModal={closeRemoveGroupModal}
                                    groupName={chosenGroup.name}
                                    />

                            <FiChevronUp
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-white`}
                            />
                          </div>
                        </Disclosure.Button>

                        {group.subGroups.map((sb: SubGroup, index: number) => {
                          return (
                            <Disclosure.Panel key={index}>
                              <li
                                className={`${
                                  selectedSubGroup.name === sb.name
                                    ? "bordered"
                                    : ""
                                } border border-1 flex flex-row text-gray-500 fill-black`}
                                onClick={() => handleSelectedChange(group, sb)}
                              >
                                <div className="flex flex-1 justify-between">
                                  <a className="text-sm">{sb.name}</a>
                                  <FaTimes
                                    className="hover:fill-red-500 hover:cursor-pointer"
                                    onClick={() => openRemoveSubGroupModal(group,sb)}//() => console.log(sb.name,group.name)}//openRemoveSubGroupModal}
                                  />
                                  <RemoveSubGroupModal 
                                    refetch={refetch}
                                    show={removeSubGroupModalIsOpen}
                                    groupId={chosenGroup.id}
                                    closeModal={closeRemoveSubGroupModal}
                                    groupName={chosenGroup.name}
                                    subGroupName={chosenSubGroup.name}
                                    subGroupId={chosenSubGroup.id}
                                  />
                                </div>
                              </li>
                            </Disclosure.Panel>
                          );

                        })}
                        <Disclosure.Panel>
                          <li className="text-sm">
                            <a
                              className="flex flex-1 text-sm border border-1"
                              onClick={() => openAddSubGroupModal(group)}
                            >
                              <GiCheckboxTree size={22} />
                              Add Subgroup
                            </a>
                          </li>

                          <AddSubGroupModal
                            show={addSubGroupModalIsOpen}
                            closeModal={closeAddSubGroupModal}
                            groupId={chosenGroup.id}
                            refetch={refetch}
                          />
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
            <a
              className="flex flex-1 border border-1 p-2 gap-2 rounded-md"
              onClick={openAddGroupModal}
            >
              <BiBookAdd size={22} />
              Add Group
            </a>
            <AddGroupModal
              show={addGroupModalIsOpen}
              closeModal={closeAddGroupModal}
              refetch={refetch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
