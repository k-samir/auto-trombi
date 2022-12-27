import { Member } from "../../models/Member";

type Props = {
  member: Member;
};
const NavMember = (props: Props) => {
  const { member } = props;

  return (
    <div className=" flex flex-1 justify-end border border-1 bg-base-100 text-black">
      {member?.firstname} {member?.lastname}
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src={member?.picture} />
        </div>
      </div>
    </div>
  );
};

export default NavMember;
