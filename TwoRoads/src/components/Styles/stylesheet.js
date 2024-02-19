import { StyleSheet, Dimensions } from "react-native";

//Colour Pallete
const blue = "#3892E5";
const seashell = "#FFF1EB";
const indigo = "#AA9CFC";
const light_green = "#C1F6A2";
const mauve = "#DA9CFC";

//Get Screen Dimensions
const { width } = Dimensions.get('window');

const styles = StyleSheet.create(
    {

        // Welcome Page Styles
        container: {
            flexGrow: 1,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: seashell,
          },
        
          title: {
            fontSize: width * 0.06, // Adjust the multiplier for different font size
            fontWeight: 'bold',
            fontFamily: 'LoraBold',
            color: '#2c3e50', // Dark shade for better contrast
            textAlign: 'center',
            marginTop: "5%",
            marginBottom: "2%",
            paddingHorizontal: 10,
          },
          textContainer: {
            paddingHorizontal: 20, // Side padding
            paddingTop: "5%",
            paddingBottom: "8%"
          },

          description: {
            fontSize: width * 0.04, // Smaller than title
            fontFamily: 'LoraRegular',
            textAlign: 'center',
            color: '#34495e', // Slightly lighter than title for hierarchy
            marginBottom: "5%",
          },
        
          button: {
            backgroundColor: blue, // A calming blue color for the button
            borderRadius: "10%", // Rounded corners
            paddingVertical: "2.5%",
            paddingHorizontal: "5%",
            marginHorizontal: "5%",
            marginBottom: "4%"
          },
        
          buttonText: {
            textAlign: 'center',
            fontFamily: 'NunitoBold',
            color: "white",
            fontSize: width * 0.05, // Responsive font size for the button
            fontWeight: 'bold',
          },

          // ---------------------------------------------------------------------------- //

          //Login/Register Pin Page Styles

          loginContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: seashell,
          },

          titleLogin: {
            fontSize: 18,
            fontFamily: "Nunito",
            marginBottom: "8%",
            marginTop: "5%",
          },

          circleContainer: {
            flexDirection: "row",
            marginBottom: "5%",
          },

          circle: {
            width: "5%",
            flexDirection: "column",
            height: 20,
            // Android Border Issue Fix
            ...Platform.select({
              ios: {
                borderRadius: "100%",
              },
              android: {
                borderRadius: 100,
              },
              default: {
                borderRadius: 100,
              },
            }),
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: "black",
          },

          numbersContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: 300,
          },

          number: {
            width: 75,
            height: 75,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            margin: 12,
            borderWidth: 1,
            borderColor: "black",
          },

          numberText: {
            fontSize: 24,
          },

          icon: {
            marginLeft: 15,
            width: 60,
            height: 75,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          },

          forgotText: {
            marginTop: "10%",
            color: "blue",
            fontFamily: "Nunito",
          },

          buttonLogin: {
            backgroundColor: blue,
            padding: 15,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          },

          submitText: {
            fontFamily: "Nunito",
            color: "white",
          },

          // ---------------------------------------------------------------------------- //

          //Username Registration Page

          usernameContainer: {
            flex: 1,
            backgroundColor: seashell,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          },

          usernameTitle: {
            fontSize: 30,
            fontFamily: "LoraBold",
            marginBottom: 20,
          },

          usernameInput: {
            width: '80%',
            borderWidth: 1,
            borderColor: '#ddd',
            backgroundColor: "white",
            padding: 10,
            marginBottom: 20,
            borderRadius: 5,
          },

          usernameButton: {
            backgroundColor: blue,
            padding: 12,
            paddingHorizontal: 20,
            borderRadius: "10%",
          },

          usernameButtonText: {
            color: '#fff',
            fontFamily: "NunitoBold"
          },

    }

)

export default styles;