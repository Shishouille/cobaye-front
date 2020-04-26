import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// + d'infos : https://github.com/wojtekmaj/react-calendar 

const ProfileCalendar = () => {
  const [date, changeDate] = useState(new Date());
  const seeExperience = (value) => {
    // Permet de se rendre à la liste d'expérience de ce jour
    // Trier les expériences du scientifique et leur période
    alert(`J'ai cliqué à ce jour : ${value}`);
  };
  console.log(date);
  return (
    <div className="calendar">
      <h2>Calendrier</h2>
      <div>
        <Calendar
          onChange={changeDate}
          value={date}
          onClickDay={seeExperience}
        />
      </div>
    </div>
  );
};

export default ProfileCalendar;
