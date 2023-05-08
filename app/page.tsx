import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <AddToCalendarButton
          name="Title"
          options={["Apple", "Google"]}
          location="World Wide Web"
          startDate="2023-05-11"
          endDate="2023-05-11"
          startTime="10:15"
          endTime="23:30"
          timeZone="America/Los_Angeles"
        />
      </div>
    </main>
  );
}
