import React, { useState } from 'react';
import { getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';

import { StyledSelect, StyledLabel, StyledInput } from 'src/components/Inputs/StyledInput';

const modifiers = {
  disabled: (date) => getDay(date) === 6, // Disables Sundays
};


// CHECK LA LIB POUR PLUS d'INFOS - https://reactnicedates.hernansartorio.com/#installation

const ExperienceFilter = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div>
      <StyledLabel htmlFor="Horaires">Période</StyledLabel>
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
            <StyledInput
              className={`input${focus === START_DATE ? ' -focused' : ''}`}
              {...startDateInputProps}
              placeholder="Du..."
            />
            <span className="date-range_arrow" />
            <StyledInput
              className={`input${focus === END_DATE ? ' -focused' : ''}`}
              {...endDateInputProps}
              placeholder="Au..."
            />
          </div>
        )}
      </DateRangePicker>
      <StyledLabel htmlFor="Horaires">Horaires</StyledLabel>
      <StyledSelect>
        <select name="hours">
          <option value="" selected>Sélectionnez une heure</option>
          <option value="morning">Matin (7h-12h)</option>
          <option value="afternoon">Début d'Après-Midi (12h-16h)</option>
          <option value="evening">Fin d'Après-Midi (16h-18h)</option>
        </select>
      </StyledSelect>

      <StyledLabel htmlFor="Horaires">Domaine d'études</StyledLabel>
      <StyledSelect>
        <select label="Domaine d'études" name="domain">
          <option value="" selected>Sélectionnez un domaine d'études</option>
          <option value="biology">Biologie</option>
          <option value="psychology">Psychologie</option>
          <option value="medecine">Médecine</option>
        </select>
      </StyledSelect>

      <StyledLabel htmlFor="Horaires">Université</StyledLabel>
      <StyledSelect>
        <select label="Université" name="university">
          <option value="" selected>Sélectionnez une université</option>
          <option value="university-1">URCA</option>
          <option value="university-2">Lille</option>
          <option value="university-3">Paris Nanterre</option>
        </select>
      </StyledSelect>
    </div>
  );
};

export default ExperienceFilter;
