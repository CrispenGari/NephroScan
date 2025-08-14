import { ImageBackground, Animated } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as LocalAuthentication from "expo-local-authentication";
import { useSettingsStore } from "@/src/store/settingsStore";
import { useRouter } from "expo-router";
import Button from "@/src/components/Button/Button";
import { APP_NAME, COLORS, FONTS } from "@/src/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Page = () => {
  const { settings } = useSettingsStore();
  const scale = React.useRef(new Animated.Value(0.5)).current;
  const opacity = React.useRef(new Animated.Value(0.5)).current;
  const router = useRouter();

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 3.4,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();

    if (!settings.lock) {
      router.replace({
        pathname: "/(tabs)/home",
      });
    }
  }, [settings]);

  const unlockApp = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      disableDeviceFallback: true,
      biometricsSecurityLevel: "strong",
      cancelLabel: "CANCEL",
      promptMessage: "Please unlock your phone to use Nephro Scan.",
      requireConfirmation: true,
    });
    if (success) {
      router.replace({ pathname: "/(tabs)/home" });
    }
  };

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require("@/assets/images/background.jpg")}
      blurRadius={1}
    >
      <SafeAreaView
        style={{
          flex: 1,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white,
            borderRadius: 10,
            padding: 10,
            transform: [{ scale }],
          }}
        >
          <Animated.Image
            source={require("@/assets/images/icon.png")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 10,
              objectFit: "contain",
            }}
          />
          <Animated.Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 25,
              color: COLORS.black,
              transform: [{ scale }],
            }}
          >
            {APP_NAME}
          </Animated.Text>
        </Animated.View>
        <Button
          style={{
            width: "100%",
            marginTop: 200,
          }}
          onPress={unlockApp}
          Icon={
            <MaterialCommunityIcons
              name="fingerprint"
              size={24}
              color="black"
            />
          }
          titleStyle={{
            color: COLORS.black,
          }}
          title="Unlock Nephro Scan"
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Page;
