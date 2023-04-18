// interface NavbarItemProps {
//   label: string;
// }

// const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
//   return (
//     <div className="text-white cursor-pointer hover:text-gray-300 transition">
//       {label}
//     </div>
//   );
// };

// export default NavbarItem;

import React from 'react';

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  return (
    <div
      className={
        active
          ? 'text-white cursor-default'
          : 'text-gray-300 hover:text-gray-300 cursor-pointer transition'
      }
    >
      {label}
    </div>
  );
};

export default NavbarItem;
