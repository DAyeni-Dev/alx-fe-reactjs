function UserProfile() {
  return (
    <div className="user-profile"> 
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">Use Profile
      <img src="https://via.placeholder.com/150"
       alt="User" 
       className="rounded-full w-36 h-36 mx-auto"
       />
      <h1 className="text-xl text-blue-800 my-4">Oluwadamilola Ayeni</h1>
      <p className="text-gray-600 text-base">CEO at Bastion Tech Solutions. Bringing tech to your fingertips.</p>
    </div>
    </div>
  );
}

export default UserProfile;