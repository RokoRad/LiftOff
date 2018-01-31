import React from 'react';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import createMuiTheme from 'material-ui/styles/theme';
// import createPalette from 'material-ui/styles/palette';
import _onOpen from './_onOpen.js';
import _onSelect from './_onSelect.js';
import './style.css';

// const theme = createMuiTheme({
//   palette: createPalette({
//     // primary2Color: "#297CCA"
//   })
// })

export default ({}) => (
  <div className="picker">
    <MuiThemeProvider>
      <DateTimePicker
        clearIcon={true}
        className="date-picker"
        DatePicker={DatePickerDialog}
        TimePicker={TimePickerDialog}
        onDatePickerShow={() => _onOpen()}
        onTimeSelected={e => _onSelect(e)}
        format="YYYY-MM-DDTHH:mm:ss.sssZ"
        showCurrentDateByDefault={true}
      />
    </MuiThemeProvider>
  </div>
);
