import { HiUserAdd } from "react-icons/hi";
import useGetMember from "../../api/useGetMember";
type Props = {
  memberId?: string;
};
const MemberItem = (props: Props) => {
  const { memberId } = props;

  
  if(memberId){
    const member = useGetMember(memberId);

  return (
    <div className="rounded-2xl flex flex-col bg-white w-28 gap-5 items-center p-2">
      <div className=" flex object-fill w-24">
        <img className="mask mask-circle" src={member?.picture} />
      </div>

      <div className="flex flex-1 h-[20%]">
        <h3 className="text-black">
          {member?.firstname} {member?.lastname}
        </h3>
      </div>

      <div className="flex p-2 h-[40%]">
        <img className="object-scale-down" src={member?.companyLogo} />
      </div>
    </div>
  );}
return (
  <div className="rounded-2xl flex flex-col bg-white w-28 items-center p-2 justify-center">
 

    <HiUserAdd size={50} color="black"/>

</div>
)

};
export default MemberItem;
