import Navbar from "@/components/Navbar";
import Navmini from "@/components/Navmini";

const InviteFriends = () => {
  // Function to copy the invite link to the clipboard
  const copyInviteLink = () => {
    const inviteLink = "https://yourwebsite.com/invite"; // Replace with your actual invite link
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        alert("Invite link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
        alert("Failed to copy the invite link.");
      });
  };

  return (
    <>
      <Navbar />
      <Navmini />
      <div className="text-white min-h-screen flex flex-col items-center pt-24 pb-12 max-sm:pt-4 px-4">
        {/* Hero Section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between bg-[url('/BlueGradient.png')] rounded-lg shadow-xl p-12 max-sm:p-4 mb-10 relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold leading-tight">
              Invite Friends and Get Rewarded
            </h1>
            <p className="text-lg font-medium text-gray-200 max-sm:mr-24">
              Earn exciting rewards by inviting your friends to join!
            </p>
            <button
              onClick={copyInviteLink}
              className="mt-4 py-3 px-6 bg-purple-800 bg-opacity-50 text-white rounded-2xl hover:bg-purple-600 transition duration-300 w-fit"
            >
              Invite Friends Here
            </button>
          </div>
          <img
            src="/inviteFriends.png"
            alt="Invite Friends"
            className="absolute bottom-0 -right-3 w-48 h-48 md:w-60 md:h-60"
          />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Invitation Section */}
          <div className="bg-gray-900 opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-400">
              Invite a Friend
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Share your invite link and earn a reward for each friend who signs
              up and joins!
            </p>
            <div className="flex justify-center mb-6">
              <button
                onClick={copyInviteLink}
                className="py-3 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
              >
                Copy Invite Link
              </button>
            </div>

            {/* Reward Info Section */}
            <div className="bg-gray-800 opacity-90 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                How It Works
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>1. Invite your friends to join the app.</li>
                <li>2. Once they sign up, you'll both earn rewards.</li>
                <li>3. Earn a ticket for every friend who joins.</li>
              </ul>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bg-gray-900 opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
              Your Rewards
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300">Total Tickets Earned</p>
                <p className="text-lg font-bold text-green-400">5</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300">Friends Invited</p>
                <p className="text-lg font-bold text-blue-400">8</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="py-3 px-6 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300">
                Invite More Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFriends;
