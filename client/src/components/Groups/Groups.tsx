import { BiBookAdd } from "react-icons/bi";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";

type Props = {
    groups : Group[];
    selectedSubGroup:SubGroup;
    handleSelectedChange : (group:Group,subgroup:SubGroup) => void
}
const Groups = (props:Props) => {
    const {groups,selectedSubGroup,handleSelectedChange} = props;

  return (
    <div className="flex flex-col overflow-auto sm:w-[15%] sm:h-[calc(100vh-75px)] items-stretch sm:sticky top-[75px] z-2 ">
      <ul className="menu menu-compact lg:menu-normal flex flex-1 p-2 rounded-box">
        {groups.map((group: Group, index: number) => {
          return (
            <div key={index}>
              <li className="menu-title">
                <span>{group.name}</span>
              </li>
              {group.subGroups.map((sb: SubGroup,index:number) => {
                return (
                  <li key={index} className={`${selectedSubGroup.name === sb.name ? "bordered" : ""} border border-1`} 
                  onClick={() => handleSelectedChange(group,sb)} >
                    <a>{sb.name}</a>
                  </li>
                );
              })}
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
      </ul>
    </div>
  );
};

export default Groups;
