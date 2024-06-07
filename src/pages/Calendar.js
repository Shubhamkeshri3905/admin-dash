import React from 'react';

const Calendar = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <header className="p-4 shadow">
        <h1 className="text-2xl font-semibold">Calendar</h1>
      </header>
      <main className="p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4 text-black">Upcoming Events</h2>
          {/* Calendar implementation goes here */}
          <p className='text-black'>Implement your calendar here.</p>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
