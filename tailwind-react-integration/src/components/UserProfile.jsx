function UserProfile() {
  return (
    <div className="user-profile">
      <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
          alt="User"
          className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"c
        />
        <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
          Oluwadamilola Ayeni
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          CEO at Bastion Tech Solutions. Bring Tech to Your fingertips.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
