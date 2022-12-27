import { useContext } from 'react';
import uuid from 'react-uuid';
import useGetMembers from '../../api/UseGetMembers';
import SelectedSubGroup from '../../contexts/SelectedSubGroup';
import { Member } from '../../models/Member';
import NavMember from '../NavMember/NavMember';

type Props = {
  className?: string;
}
const ListMembers = (props:Props) => {
  const { className } = props;
  
  const { selectedSubGroup } = useContext(SelectedSubGroup);

  const members = useGetMembers(selectedSubGroup.membersId);
    
    return ( <div className={className}>
    <div className="flex flex-1 flex-col  overflow-auto sm:sticky top-[75px] z-2 scrollbar-hide sm:h-[calc(100vh-75px)]">
    <ul className="menu  flex flex-1  gap-2 text-secondary-content p-2 rounded-box">
      {members?.map((member:Member) => (
        <li key={uuid()} className="flex">
          <NavMember member={member} />
        </li>
      ))}
    </ul>
    </div>
  </div>);
}

export default ListMembers;