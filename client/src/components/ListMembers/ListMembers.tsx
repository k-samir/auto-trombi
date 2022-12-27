import uuid from 'react-uuid';
import { SubGroup } from '../../models/SubGroup';
import NavMember from '../NavMember/NavMember';

type Props = {
  selectedSubGroup:SubGroup;
}

const ListMembers = (props:Props) => {
    const {selectedSubGroup} = props;
  
    return ( <div className="w-[100%] sm:w-[20%] ">
    <div className="flex flex-1 flex-col  overflow-auto sm:sticky top-[75px] z-2 scrollbar-hide sm:h-[calc(100vh-75px)]">
    <ul className="menu  flex flex-1  gap-2 text-secondary-content p-2 rounded-box">
      {selectedSubGroup.membersId?.map((id:string) => (
        <li key={uuid()} className="flex">
          <NavMember memberId={id} />
        </li>
      ))}
    </ul>
    </div>
  </div>);
}

export default ListMembers;