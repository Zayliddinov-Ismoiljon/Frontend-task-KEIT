import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const PhoneNumberInput = () => {
  return (
    <PhoneInput
      country={'uz'}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true
      }}
      inputStyle={{
        width: '100%'
      }}
    />
  );
};

export default PhoneNumberInput;
