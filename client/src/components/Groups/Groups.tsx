import { BiBookAdd } from "react-icons/bi";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";

type Props = {
    groups : Group[]
}
const Groups = (props:Props) => {
    const {groups} = props;
  

  return (
    <div className="flex w-[20%] items-stretch">
      <ul className="menu menu-compact lg:menu-normal bg-info-content  flex flex-1 p-2 rounded-box">
        {groups.map((group: Group, index: number) => {
          return (
            <div key={index}>
              <li className="menu-title">
                <span>{group.name}</span>
              </li>
              {group.subGroups.map((sb: SubGroup) => {
                return (
                  <li className="bordered" >
                    <a>{sb.name}</a>
                  </li>
                );
              })}
            </div>
          );
        })}

        <div className="divider"></div>
        <li>
          <a className="flex flex-1">
          <BiBookAdd size={33} />
            add group
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Groups;
