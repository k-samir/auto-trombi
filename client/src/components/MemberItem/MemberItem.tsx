import { HiUserAdd } from "react-icons/hi";
import useGetMember from "../../api/useGetMember";
type Props = {
  memberId?: string;
};
const MemberItem = (props: Props) => {
  const { memberId } = props;

  if (memberId) {
    const member = useGetMember(memberId);

    return (
      <div className=" rounded-lg bg-blue-500 items-center w-32 md:w-44 flex flex-col gap-2">
        <div className="w-28 md:w-[60%]">
          <img className="mask mask-squircle bg-white/90" src={member?.picture} />
        </div>

        <div className=" flex flex-col flex-1 place-content-evenly">
          <div className="flex flex-col text-center">
            <h3 className="text-black font-semibold">{member?.firstname} </h3>
            <h3 className="text-black font-medium">{member?.lastname}</h3>
          </div>

          <div className=" p-2 self-center">
            <img className="p-2 sm:max-w-[8rem] max-h-[4rem]" src={member?.companyLogo} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="self-center rounded-2xl flex flex-col bg-white w-18 h-18 items-center p-2 justify-center">
      <HiUserAdd size={44} color="black" />
    </div>
  );
};
export default MemberItem;
