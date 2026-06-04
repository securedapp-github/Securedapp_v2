import Image from "next/image";

const BookMeetCta = () => {
  return (
    <button
      onClick={() =>
        window.open("https://calendar.app.google/DwaR8QDDAotwnafu5")
      }
      aria-label="Schedule a meeting"
      className=" fixed bottom-4 right-4 w-12 h-12 bg-tertiary flex justify-center items-center   rounded-full "
    >
      <Image
        className="w-6 h-6 bg-tertiary"
        src="/assets/images/google-calendar-icon.svg"
        alt="Google Calendar"
        width={24}
        height={24}
      />
    </button>
  );
};

export default BookMeetCta;
