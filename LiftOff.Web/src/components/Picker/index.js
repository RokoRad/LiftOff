import React from 'react';
import _picker from './_picker.js';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _onOpen from './_onOpen.js';
import _onSelect from './_onSelect.js';
import './style.css';

export default ({ }) => (
  <div className="picker" onClick={() => _picker()}>
    <MuiThemeProvider>
      <DateTimePicker
        clearIcon={true}
        className="date-picker"
        onChange={e => console.log(e)}
        DatePicker={DatePickerDialog}
        TimePicker={TimePickerDialog}
        onDatePickerShow={() => _onOpen()}
        onTimeSelected={(e) => _onSelect(e)}
      />
    </MuiThemeProvider>
  </div>
);
