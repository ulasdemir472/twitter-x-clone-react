import { PropTypes } from "prop-types";
import Button from "~/components/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserCard = ({ user }) => {
  const [following, setFollowing] = useState(false);

  return (
    <Link
      to={`/${user.username}`}
      className="px-4 py-3 flex justify-center items-center gap-2 hover:bg-white/[0.03]"
    >
      <div className="mr-2">
        <img
          height={40}
          width={40}
          src={user.avatar}
          alt={user.fullname}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold flex items-center">
            {user.fullname}
            {user?.verified && (
              <svg
                viewBox="0 0 22 22"
                role="img"
                width={18.75}
                height={18.75}
                className=" text-blue-500 ml-0.5"
              >
                <path
                  fill="currentColor"
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                ></path>
              </svg>
            )}
          </span>
          <span className="text-[color:var(--color-baseSecondary)]">
            @{user.username}
          </span>
        </div>
        {following ? (
          <Button
            size="small"
            variant="outline-white"
            onClick={() => setFollowing(false)}
            className="whitespace-nowrap group hover:border-red-600 hover:bg-[#f4212e1a]"
          >
            <div className="group-hover:hidden">Takip ediliyor</div>
            <div className="hidden group-hover:flex group-hover:text-red-600">
              Takibi bırak
            </div>
          </Button>
        ) : (
          <Button
            size="small"
            variant="white"
            onClick={() => setFollowing(true)}
          >
            Takip et
          </Button>
        )}
      </div>
    </Link>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
