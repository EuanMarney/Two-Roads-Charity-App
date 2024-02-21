import { StyleSheet, Dimensions } from "react-native";
import backgroundImg from "../../assets/background.png";

//Colour Pallete
const blue = "#3892E5";
const white = "#F0F8FF";
const indigo = "#AA9CFC";
const light_green = "#C1F6A2";
const mauve = "#DA9CFC";
const purple = "#592E83";


//Get Screen Dimensions
const { width } = Dimensions.get('window');

const styles = StyleSheet.create(
    {

        // Welcome Page Styles
        container: {
            flexGrow: 1,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: white,
          },
        
          title: {
            fontSize: width * 0.06, // Adjust the multiplier for different font size
            fontWeight: 'bold',
            fontFamily: 'NunitoBold',
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
            fontFamily: 'Nunito',
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
            fontFamily: 'Nunito',
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
            backgroundColor: white,
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
            justifyContent: "justify-between",
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
            backgroundColor: white,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          },

          usernameTitle: {
            fontSize: 30,
            fontFamily: "NunitoBold",
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

          // ---------------------------------------------------------------------------- //

          // Header 

          headerComponentContainer: {
            flexDirection: "column",
            backgroundColor: "#FFF",
            height: "15%",
          },

          headerBlueRectangle: {
            backgroundColor: purple,
            height: "100%",
            justifyContent: "flex-end",
            padding: "3.5%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },

          headerWithIconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },

          headerText: {
            fontSize: 20,
            fontFamily: "Nunito",
            letterSpacing: 2,
            color: "#FFF",
            marginBottom: 0.5,
          },

          headerInlineContainer: {
            flexDirection: "row",
            alignItems: "flex-end",
          },

          subHeaderText: {
            fontSize: 16,
            fontFamily: "NunitoBold",
            letterSpacing: 0.5,
            color: "#FFF",
            marginTop: 0.5,
            marginBottom: 0.5,
          },

          dateContainer: {
            flex: 1,
            alignItems: "flex-end",
          },

          dateText: {
            fontSize: 12,
            fontFamily: "Nunito",
            color: "#FFF",
          },

          headerTitle: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: 0,
          },

          iconCog: {
            fontSize: 25,
            color: "#FFF",
          },

          // ---------------------------------------------------------------------------- //

          // Home Screen

          homeView: {
            flex: 1,
          },

          homeLayoutScrollStyle: {
            backgroundColor: white
          },

          backgroundImage: {
            width: "100%",
            height: "100%",
          },

          homeLayoutContainer: {
            flex: 1,
            flexDirection: "column",
          },

          content: {
            flex: 1,
          },

          headerContainer: {
            alignItems: "center",
            paddingTop: 10,
            marginBottom: -30, // Adjust the marginBottom for padding
          },

          homeHeader: {
            marginTop: 20,
            color: "#000",
            fontFamily: "NunitoBold",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: 30, // Set a numeric value for lineHeight
            paddingBottom: 35,
          },

          buttonContainer: {
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: "2%",
            marginTop: "6%", // Adjust the marginTop to bring buttons closer to text
          },
          customButton: {
            marginBottom: "5%",
            borderRadius: "7.5%",
            paddingVertical: "7.5%",
            paddingHorizontal: "5%",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },
          homeButtonText: {
            color: "black",
            fontFamily: "Nunito",
            letterSpacing: 3,
            fontSize: 16,
          },

          // ---------------------------------------------------------------------------- //


    }


)

export default styles;