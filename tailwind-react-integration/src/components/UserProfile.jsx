function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 sm:p-4 md:p-8 mx-auto rounded-lg shadow-lg max-w-xs md:max-w-sm text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto mb-4 transition-transform hover:scale-105 duration-300"
        />
        <h1 className="text-lg md:text-xl font-bold text-blue-800">Oluwadamilola Ayeni</h1>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          CEO at Baaston Tech Solutions. Bringing tech solutions to your finger tips.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
