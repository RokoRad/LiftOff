import Toast from 'react-native-simple-toast';

const registration = (data) => {
  if([data.username].length != 0 && [data.email].length != 0 && [data.password].length > 8) {
    // pozitivan unos
  } else {
    if([data.password].length < 9) {
      // password manji od 8
    } else {
      // Toast.show("") KRIVI PODATCI
    }
  }
}

export default registration;


//   const register = () => {
//     const details = {
//       username: values.username,
//       password: values.password,
//       grant_type: 'password'
//     };

//     if(true
//       //[values.email].length > 0 && [values.username].length > 0 && [values.password].length > 8
//     ) {
//       fetch('http://liftoffapi.azurewebsites.net/api/account/register', {  
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(values)
//       }).then((response) => {
//         console.log(response)
//         if (response.status === 200) {
//           fetch('http://liftoffapi.azurewebsites.net/token', {  
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//             },
//             body: encode(details)
//           }).then((response) => {
//             if (response.status === 200) {
//               AsyncStorage.setItem('@token', JSON.parse(response._bodyInit).access_token);
//               //props.router.push("/home");
//             }
//           }).catch((error) => {
//             Toast.show(language.serverError);
//           });
//         } else {
//           Toast.show(language.registerError);
//           console.log(response)
//         }
//       }).catch((error) => {
//         Toast.show(language.serverError);
//       });
//     } else {
//       if ([values.password].length < 8) {
//         Toast.show(language.passwordLength);
//       } else {
//         Toast.show(language.registerError);
//       }
//     }
//   }
