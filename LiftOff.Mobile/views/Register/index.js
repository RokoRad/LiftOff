import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import RegisterForm from '../../components/RegisterForm';
import InitalLogo from '../../components/InitalLogo';
import InitalLink from '../../components/InitalLink';
import InitalButton from '../../components/InitalButton';

const registration = (data) => {
  console.log(data)
}

const Register = () => {
  <View style={inital.screen}>  
    <View style={inital.container}>
      <Image source={require('../../images/splash.png')} style={inital.image}/>
      {/* register form */}
      <InitalLink type="login"  />
      <InitalButton type="login" onPress={() => registration("a")} />
    </View>
  </View>
}

// class Inital extends Component {
//   constructor() {
//      super();
//      this.state = {
//         login: true
//      };
//   };

//   componentWillMount = () => {
//     if (AsyncStorage.getItem('@token').then()) {
//       this.props.history.push('/home');
//     }
//   }
//   changeView = () => {
//     this.setState({
//        login: !this.state.login 
//     });
//   };

//   render() {
//       return (
//           <View style={styles.screen}>
//             <View style={styles.container}>
//               <Image source={require('../../images/splash.png')} style={styles.image}/>
//               {this.state.login === true
//               ? <LoginForm />
//               : <RegisterForm />
//               }
//               <TouchableWithoutFeedback onPress={this.changeView}>
//                 <View style={styles.messageWrapper}>
//                   <Text style={styles.message}>
//                     {(this.state.login === true) ? language.registerAccount : language.haveAccount} <Text style={styles.messageBold}>{(this.state.login === true) ? language.register : language.login}</Text>
//                   </Text>
//                 </View>
//               </TouchableWithoutFeedback>
//               <InitalButton type={(this.state.login === true) ? 'login' : 'register'} action={(this.state.login === true) ? 'login' : 'register'} router={this.props.history}/>
//             </View>
//           </View>    
//       );
//   }
// }

export default Register;