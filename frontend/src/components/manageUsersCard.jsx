import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { getDay } from "../common/date";

const ManageUsersCard = ({ user }) => {
  const {
    personal_info: { fullname, email, profile_img, username },
    account_info: { total_reads },
    joinedAt,
    isBlogger,
    admin,
    _id,
  } = user;

  const {
    userAuth: { accessToken },
  } = useContext(UserContext);

  const [isBanned, setIsBanned] = useState(false);

  const banUser = (userId) => {
    if (!accessToken) return;

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/ban-user`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        setIsBanned(true);
      })
      .catch((err) => {
        console.error("Failed to ban user:", err);
      });
  };

  return (
    <div className="flex gap-10 border-b mb-6 max-md:px-4 border-grey pb-6 items-center">
      <img
        src={profile_img}
        className="max-md:hidden lg:hidden xl:block w-28 h-28 flex-none bg-grey object-cover rounded-full"
        alt="Profile"
      />

      <div className="flex flex-col justify-between py-2 w-full min-w-[300px]">
        <div>
          <Link
            to={`/blog/user/${username}`}
            className="user-title mb-4 hover:underline"
          >
            {fullname}
          </Link>
          <p className="line-clamp-1">Username: @{username}</p>
          <p className="line-clamp-1">Email: {email}</p>
          <p className="line-clamp-1">Signed Up: {getDay(joinedAt)}</p>
          <p className="line-clamp-1">Total Reads: {total_reads}</p>
          <p className="line-clamp-1">
            Role: {admin ? "Admin" : isBlogger ? "Blogger" : "User"}
          </p>
        </div>

        <div className="flex gap-6 mt-3">
          <Link
            to={`/blog/user/${username}`}
            className="pr-4 py-2 underline"
          >
            View Profile
          </Link>
          {!admin && (
            <button
              className={`pr-4 py-2 underline text-red ${isBanned ? "opacity-50" : ""}`}
              disabled={isBanned}
              onClick={() => banUser(_id)}
            >
              {isBanned ? "Banned" : "Ban User"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ManageUsers = ({ users }) => {
  return (
    <section className="manage-users-section">
      <h1 className="text-2xl font-medium mb-8">Manage Users & Bloggers</h1>
      {users && users.length ? (
        users.map((user, i) => (
          <ManageUsersCard key={i} user={user} />
        ))
      ) : (
        <p>No users found</p>
      )}
    </section>
  );
};

export default ManageUsers;

// Usage in the Admin Dashboard
// You would fetch the list of users from the backend and pass it to the ManageUsers component.
// Example usage:
// <ManageUsers users={usersListFromBackend} />
