import React from "react";
import Image from "next/image";

interface NotificationData {
  id: string;
  image: string;
  title: string;
  description: string;
  time: string;
}

interface NotificationProps {
  isOpen: boolean;
  toggleNoti: () => void;
  notifications: NotificationData[];
}

const Notification: React.FC<NotificationProps> = ({
  isOpen,
  toggleNoti,
  notifications,
}) => {
  return (
    <div>
      <button
        onClick={toggleNoti}
        className="relative flex items-center space-x-2 text-sm mb-2 mt-10"
      >
        <Image src="/icons/noti.svg" alt="Noti" width={24} height={24} />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] rounded-full w-3 h-3 flex items-center justify-center border-1 border-white">
          3
        </span>
      </button>

      {isOpen && (
        <div
          className="bg-white py-4 absolute right-0 mb-12 mr-4 z-10 rounded-xl shadow-md space-y-4 border border-gray-200"
          style={{
            animation: isOpen ? "slideDown 0.3s ease-out" : "none",
          }}
        >
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`flex items-center space-x-4 ps-4 py-2 ${
                index === 1 ? "bg-[#F0F0F0]" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={notification.image}
                  alt={notification.title}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-600">
                  {notification.title}
                </p>
                <p className="text-xs font-semibold text-gray-800">
                  {notification.description}
                </p>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap pe-4">
                {notification.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
