import { color } from "@rneui/base";
import {StyleSheet, Dimensions, Platform} from "react-native";

// Colour Pallete
const blue = "#3892E5";
const white = "#F0F8FF";
//const indigo = "#AA9CFC";
//const light_green = "#C1F6A2";
//const mauve = "#DA9CFC";
const headerPurple = "#592E83";
const purple = "#820263";

//Get Screen Dimensions
const { width } = Dimensions.get('window');

const styles = StyleSheet.create(
    {

        // ---------------------------------------------------------------------------- //

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
            borderRadius: width * 10, // Rounded corners
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
            width: 20,
            flexDirection: "column",
            height: 20,
            // Android Border Issue Fix
            ...Platform.select({
              ios: {
                borderRadius: width,
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
            marginTop: "5%",
            color: "blue",
            fontFamily: "Nunito",
          },

          buttonLogin: {
            backgroundColor: blue,
            padding: 15,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            margin: 12,
          },

          submitText: {
            fontFamily: "Nunito",
            color: "white",
          },

          loginImage: {
            aspectRatio: 3,
            resizeMode: "contain",
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
            borderRadius: width * 0.1,
          },

          usernameButtonText: {
            color: '#fff',
            fontFamily: "NunitoBold"
          },

          // ---------------------------------------------------------------------------- //

          // Header (Home, Input, Login Screens)

          loginHeaderContainer: {
            justifyContent: "center",
            alignItems: "center"
          },  

          headerComponentContainer: {
            flexDirection: "column",
            backgroundColor: "#FFF",
            height: "15%",
          },

          headerRectangle: {
            backgroundColor: headerPurple,
            height: "100%",
            justifyContent: "flex-end",
            padding: "4%",
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

          // Footer

          footerContainer: {
            height: "8%",
            backgroundColor: "#FFF",
            borderTopWidth: 1,
            borderTopColor: "#EAEAEA",
            justifyContent: "center",
            alignItems: "center",
          },

          footerText: {
            fontSize: 16,
            color: "#333",
            textAlign: "center",
          },

          footerImage: {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          },

          // ---------------------------------------------------------------------------- //

          // Home Screen

          homeView: {
            flex: 1,
          },

          homeLayoutScrollStyle: {
            paddingTop: "5%",
            paddingBottom: "5%",
            backgroundColor: "transparent"
          },

          backgroundImage: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
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
            paddingTop: 30,
            marginBottom: -10, // Adjust the marginBottom for padding
          },

          homeHeader: {
            marginTop: 20,
            color: "#000",
            fontFamily: "NunitoBold",
            letterSpacing: 2,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: 30, // Set a numeric value for lineHeight
            paddingBottom: 35,
          },

          buttonContainer: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            paddingHorizontal: "3%",
          },
          customButton: {
            marginBottom: "5%",
            borderRadius: width * 0.05,
            paddingVertical: "8%",
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

          //Input Screen Elements

          textBoxContainer: {
            flex: 1,
            padding: 10,
          },

          textBoxInput: {
            backgroundColor: "white",
            borderRadius: 5,
            width: "100%",
            minHeight: 60,
            paddingTop: 20,
            fontFamily: "Nunito"
          },

          inputScrollView: {
            paddingTop: "5%",
            backgroundColor: "transparent"
          },

          paddedText: {
            fontFamily: "Nunito",
            paddingLeft: "3%",
            paddingTop: "1%",
            paddingBottom: "1%",
            color: 'white',
            letterSpacing: 1.5
          },

          rowContainer: {
            flexDirection: "row", // Arrange components horizontally
            justifyContent: "space-between", // Distribute space between components
            alignItems: "center", // Align items vertically
            marginBottom: 10, // Adjust margin bottom as needed
          },

          inputScreenTextBoxContainer: {
            flex: 1, // Take remaining space in the row
          },

          inputScreenButtonContainer: {
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "10%",
          },

          textBoxGroupContainers: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5%",
            paddingTop: "5%",
            paddingBottom: "5%",
            backgroundColor: "#1A73C7",
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 0,
              height: 4
            },
            width: "95%",
          },

          dailyMindfulnessButtonContainer: {

          },

          dailyMindfulnessButtons: {
            paddingVertical: "5%",
            paddingHorizontal: "10%",
            borderRadius: width * 0.05,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: purple
          },

          dailyMindfulnessText: {
            color: "black",
            fontFamily: "Nunito",
            letterSpacing: 2,
            fontSize: 15
          },

          // ---------------------------------------------------------------------------- //

          //Track Player

          trackPlayerContainer: {
            width: width * 1.25,
            height: width * 0.5,
            borderRadius: width * 0.75,
            backgroundColor: purple,
            position: "absolute",
            bottom: -(width * 0.25),
            overflow: "hidden",
            alignSelf: "center",
          },

          trackPlayerIconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            position: 'absolute',
            bottom: width * 0.33,
            width: width,
            marginLeft: "10%",
            marginRight: "10%" 
          },

          trackPlayerIcons: {
            color: "white",
            fontSize: 25
          },

          // ---------------------------------------------------------------------------- //

          //Carousel Component

          carouselContainer: {

          },

          cardContainer: {
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: width * 0.1,
            width: width * 0.8 - 10,
            height: width * 1.35,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 0,
              height: 0.4,
            },

          },

          animationContainer: {
            flex: 1.5,
            height: "100%",
            width: "100%",
          },

          cardTextContainer: {
            flex: 1
          },

          cardTitle: {
            fontFamily: "NunitoBold",
            fontSize: 20,
            marginBottom: 10,
            textAlign: "center",
          },
          
          cardText: {
            fontFamily: "Nunito",
            fontSize: 16,
            textAlign: "center",
            paddingBottom: "5%"
          },
    }


)

export default styles;
