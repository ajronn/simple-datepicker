import { useState } from 'react';

interface Day {
    dateNumber: string;
    dayofweek: number;
}

export function useCalendar() {
    const [date, setDate] = useState(new Date());
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const daysOfWeek = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];

    const getShortDate = (): string => {
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    const getLongDate = (day = date.getDate() + ""): string => {
        return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    const calcNumberDays = (daysInMonth: number, dayOfWeek: number) => {
        const daysArray: Day[] = [];
        let dayofweekcounter = dayOfWeek;
        let shift = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

        for (let i = 0; i < shift; i++) {
            daysArray.push({
                dateNumber: "",
                dayofweek: 0
            })
        }

        for (let i = 0; i < daysInMonth; i++) {
            daysArray.push({
                dateNumber: (i + 1) + "",
                dayofweek: dayofweekcounter
            })
            dayofweekcounter++;
            if (dayofweekcounter > 7) dayofweekcounter = 1;
        }

        shift = (7 - daysArray[daysArray.length - 1].dayofweek);
        for (let i = 0; i < shift; i++) {
            daysArray.push({
                dateNumber: "",
                dayofweek: 0
            })
        }

        return daysArray;
    }

    const changeDate = (direction: number): void => {
        let month = date.getMonth() + direction;
        let year = date.getFullYear();
        if (month < 0) {
            month = 11;
            year--;
        }
        if (month > 11) {
            month = 0;
            year++;
        }

        setDate(new Date(year, month, 1));
    }

    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month, 0).getDate();
    }

    return {
        Date: date,
        MONTHS: months,
        DAYS_OF_WEEK: daysOfWeek,
        DaysInMonth: daysInMonth,
        ChangeDate: changeDate,
        CalcNumberDays: calcNumberDays,
        GetShortDate: getShortDate,
        GetLongDate: getLongDate
    }

}