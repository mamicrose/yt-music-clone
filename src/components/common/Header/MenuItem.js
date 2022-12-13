import { memo } from "react";
import clsx from "clsx";
import { IoSearchOutline } from "react-icons/io5";

const MenuItem = ({ label, active, icon, onPress }) => {
  return (
    <button
      type="button"
      onClick={onPress}
      className={clsx(
        "font-bold text-lg px-2 flex items-center gap-5 hover:text-white",
        active ? "text-white" : "text-white/50"
      )}
    >
      {icon && <IoSearchOutline size={20} color="text-white/50" />}
      {label}
    </button>
  );
};

MenuItem.defaultProps = {
  icon: false,
  onPress: () => null,
};

export default memo(MenuItem);
