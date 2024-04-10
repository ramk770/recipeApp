import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function Termcondition({navigation}) {
  return (
    <View style={{flex:1,marginTop:35,}}>
   

        <Text style={{color:"black", fontSize:28}}> Terms and Condition</Text>

    
         
        <View>
          <Text style={{padding:10, fontSize:18,fontWeight:'200'}}>Welcome to Your Recipe Creation Platform

These terms and conditions outline the rules and regulations for the use of [Your Recipe Creation Platform]'s Website and Mobile App.

By accessing this platform we assume you accept these terms and conditions. Do not continue to use [Your Recipe Creation Platform] if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this platform and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies

We employ the use of cookies. By accessing [Your Recipe Creation Platform], you agreed to use cookies in agreement with the [Your Recipe Creation Platform]'s Privacy Policy.

Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our platform to enable the functionality of certain areas to make it easier for people visiting our platform. Some of our affiliate/advertising partners may also use cookies.
You must not:

- Republish material from [Your Recipe Creation Platform]
- Sell, rent or sub-license material from [Your Recipe Creation Platform]
- Reproduce, duplicate or copy material from [Your Recipe Creation Platform]
</Text>
        </View>
    </View>
  )
}

export default Termcondition
