import useGetMember from "../../api/useGetMember";

type Props = {
    memberId:string;
} 
const NavMember = (props:Props) => {
    const {memberId} = props;
    if(memberId){
        const member = useGetMember(memberId);

    return (
        <div className=" flex flex-1 justify-end border border-1">
        {member?.firstname} {member?.lastname}
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src={member?.picture} />
          </div>
        </div>
        </div>
    );
    }
    return <></>
}

export default NavMember;