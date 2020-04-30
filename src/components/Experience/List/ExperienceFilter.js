import React, { useState } from 'react';
import { getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';

const modifiers = {
  disabled: (date) => getDay(date) === 6, // Disables Sundays
};

// CHECK LA LIB POUR PLUS d'INFOS - https://reactnicedates.hernansartorio.com/#installation

const ExperienceFilter = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        minimumDate={new Date()}
        format="dd MMM yyyy"
        locale={fr}
        modifiers={modifiers}
      >
        {({ startDateInputProps, endDateInputProps, focus }) => (
          <div className="date-range">
            <input
              className={`input${focus === START_DATE ? ' -focused' : ''}`}
              {...startDateInputProps}
              placeholder="Du..."
            />
            <span className="date-range_arrow" />
            <input
              className={`input${focus === END_DATE ? ' -focused' : ''}`}
              {...endDateInputProps}
              placeholder="Au..."
            />
          </div>
        )}
      </DateRangePicker>
      <label htmlFor="Horaires" />
      <select name="hours">
        <option value="" selected>Sélectionnez une heure</option>
        <option value="morning">Matin (7h-12h)</option>
        <option value="afternoon">Début d'Après-Midi(12h-16h)</option>
        <option value="evening">Fin d'Après-Midi(16h-18h)</option>
      </select>
      <select label="Domaine d'études" name="domain">
        <option value="" selected>Sélectionnez un domaine d'études</option>
        <option value="biology">Biologie</option>
        <option value="psychology">Psychologie</option>
        <option value="medecine">Médecine</option>
      </select>
      <select label="Université" name="university">
        <option value="" selected>Sélectionnez une université</option>
        <option value="university-1">URCA</option>
        <option value="university-2">Lille</option>
        <option value="university-3">Paris Nanterre</option>
      </select>
    </div>
  );
};

export default ExperienceFilter;
