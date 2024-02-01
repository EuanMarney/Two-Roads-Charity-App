import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigations/StackNavigator";
import { connectToDatabase, createTables } from "./src/database/db";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while resources are fetched
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          Arial: require("./src/assets/fonts/arial.ttf"),
        });

        // initialize database
        try {
          console.log("Attempting to connect to database...");
          const db = await connectToDatabase();
          console.log("Database connection established:", db);

          console.log("Creating tables...");
          await createTables(db);
          console.log("Database initialized and tables created.");
        } catch (error) {
          console.error("Error initializing database: ", error);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  // Hide the splash screen when the app is ready
  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}