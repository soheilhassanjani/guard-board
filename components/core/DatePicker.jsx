import React from "react";
import ReactModernDatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

const DatePicker = ({ value, onChange }) => {
  return (
    <ReactModernDatePicker
      value={value}
      onChange={onChange}
      inputPlaceholder="روز را انتخاب کنید"
      shouldHighlightWeekends
      wrapperClassName="!w-full"
      locale="fa"
      inputClassName="!bg-white !border !border-gray-200 !rounded-lg !h-10 !outline-none !p-2 !text-sm !w-full"
    />
  );
};

export default DatePicker;
