import { useSelector } from "react-redux"


const Profile = () => {

const userProfileDetail = useSelector((state)=>state.userProfileDetail)

console.log(userProfileDetail)

  return (
    <div>


<div className="profile-img">
    <img src="/favicon.png" alt="" className="w-32 rounded-full" />
</div>

<div className="details">
    <h1>{userProfileDetail?.name}</h1>
    <h1>{userProfileDetail?.email}</h1>
</div>

    </div>
  )
}
export default Profile