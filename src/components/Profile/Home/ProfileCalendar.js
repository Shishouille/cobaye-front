import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// + d'infos : https://github.com/wojtekmaj/react-calendar 

const ProfileCalendar = () => {
  const [date, changeDate] = useState(new Date());
  const [experiences, showExperiences] = useState(false);

  const dates = [new Date(2020, 4, 20), new Date(2020, 4, 10)];

  const seeExperience = (value) => {
    const selectionFind = dates.find((comparedDate) => comparedDate.getTime() === value.getTime());
    return selectionFind ? showExperiences(true) : showExperiences(false);
  };

  return (
    <div className="calendar">
      <h2>Calendrier</h2>
      <div>
        {experiences && (
          <div>
            <h4>Vous avez rendez-vous :</h4>
            <p>Expérience 1 : Le {date.getDate()} {date.getMonth()} à {date.getHours()} : {date.getMinutes()}</p>
          </div>
        )}
        <Calendar
          locale="fr"
          onChange={changeDate}
          value={date}
          onClickDay={seeExperience}
          tileClassName={({ date }) => {
            const selectionFind = dates.find((comparedDate) => comparedDate.getTime() === date.getTime());
            return selectionFind ? 'selected' : '';
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCalendar;
