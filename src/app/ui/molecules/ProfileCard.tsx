import clsx from "clsx";
import Link from "next/link";

const ProfileCard = ({
  isProfileOpen,
  toggleProfile,
}: {
  isProfileOpen: boolean;
  toggleProfile: () => void;
}) => {
  return (
    <div
      className={clsx(
        "bg-twikkl-tertiary rounded-lg flex flex-col shadow-lg  absolute top-20 w-[13rem] transition-all duration-200",
        isProfileOpen
          ? "opacity-1 pointer-events-auto"
          : "pointer-events-none opacity-0"
      )}
    >
      <Link
        className="py-3 pl-4 text-twikkl-main border-b text-left hover:bg-twikkl-active rounded-t-lg"
        href="/dashboard/setting"
      >
        Go to Profile
      </Link>
      <button
        className="py-3 pl-4 text-twikkl-main text-left hover:bg-twikkl-active rounded-b-lg"
        onClick={toggleProfile}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
