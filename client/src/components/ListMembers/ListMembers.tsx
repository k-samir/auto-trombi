import uuid from 'react-uuid';
import { SubGroup } from '../../models/SubGroup';

type Props = {
  selectedGroup:SubGroup;
}

const ListMembers = (props:Props) => {
    const {selectedGroup} = props;

    return ( <div className="w-[100%] sm:w-[20%] ">
    <div className="flex flex-1 flex-col  overflow-auto sm:sticky top-[75px] z-2 scrollbar-hide sm:h-[calc(100vh-75px)]">
    <ul className="menu bg-info-content flex flex-1  gap-2 text-secondary-content p-2 rounded-box">
      {selectedGroup.membersId?.map(() => (
        <li key={uuid()} className="flex  ">
          <div className="bg-neutral flex flex-1 justify-center">
          firstname lastname
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  </div>);
}

export default ListMembers;