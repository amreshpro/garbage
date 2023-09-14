
const UserProfile = ({params}:any) => {
    return (
        <div>

            <h1 className="text-blue-400">Profile PAge</h1>

<h1>{params.id}</h1>
        </div>
    )
}


export default UserProfile