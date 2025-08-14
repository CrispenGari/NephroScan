export const SERVER_BASE_URL = "http://10.20.9.73:8000";

export const COLORS = {
  main: "#FBF8EF",
  primary: "#FFB433",
  secondary: "#B4EBE6",
  tertiary: "#80CBC4",
  black: "#000000",
  white: "#ffffff",
  red: "#FB2576",
  gray: "#758694",
  transparent: "transparent",
  gray100: "#DDDDDD",
  gray200: "#7F8CAA",
};

export const PLOT_COLORS = ["#443627", "#57B4BA"];

export const AUDIOS = {
  predicting: require("@/assets/sounds/diagnosing.wav"),
  results: require("@/assets/sounds/response.wav"),
};

export const Fonts = {
  "JosefinSans-Bold": require("@/assets/fonts/JosefinSans-Bold.ttf"),
  "JosefinSans-Regular": require("@/assets/fonts/JosefinSans-Regular.ttf"),
};
export const FONTS = {
  regular: "JosefinSans-Regular",
  bold: "JosefinSans-Bold",
};

export const STORAGE_NAME = {
  SETTINGS: "nephroscan:settings",
  HISTORY: "nephroscan:history",
};

export const APP_NAME = "Nephro Scan";

export const relativeTimeObject = {
  future: "in %s",
  past: "%s",
  s: "now",
  m: "1m",
  mm: "%dm",
  h: "1h",
  hh: "%dh",
  d: "1d",
  dd: "%dd",
  M: "1M",
  MM: "%dM",
  y: "1y",
  yy: "%dy",
};

export const LANDING_MESSAGES = [
  {
    id: 1,
    image: require("@/assets/images/0.png"),
    title: "Welcome to Nephro Scan!",
    message:
      "Your AI-powered assistant for kidney health — Nephro Scan uses deep learning to detect kidney stones directly from medical images. Early detection made simple.",
  },
  {
    id: 2,
    image: require("@/assets/images/1.png"),
    title: "Accurate Stone Detection",
    message:
      "Nephro Scan analyzes kidney images using advanced AI models like ResNet50, MobileNetV3, and DenseNet201, providing fast and reliable stone detection results.",
  },
  {
    id: 3,
    image: require("@/assets/images/2.png"),
    title: "Clear Results for Better Care",
    message:
      "Get easy-to-understand results with visual indicators — from stone-free to possible or confirmed stones — helping you and your doctor make informed decisions.",
  },
  {
    id: 4,
    image: require("@/assets/images/3.png"),
    title: "AI Support Anytime, Anywhere",
    message:
      "Whether at the clinic or remotely, Nephro Scan puts advanced kidney stone detection in your pocket — accessible through our secure mobile app.",
  },
];
