import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Card from "../Card/Card";
import { THistory } from "../../types";
import { useSettingsStore } from "../../store/settingsStore";
import { useRouter } from "expo-router";
import { onImpact } from "../../utils";
import {
  COLORS,
  FONTS,
  PLOT_COLORS,
  relativeTimeObject,
} from "../../constants";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocal from "dayjs/plugin/updateLocale";
import { PieChart } from "react-native-gifted-charts";
import LegendItem from "../LegendItem/LegendItem";
import Animated from "react-native-reanimated";
dayjs.extend(relativeTime);
dayjs.extend(updateLocal);
dayjs.updateLocale("en", {
  relativeTime: relativeTimeObject,
});

const HistoryItemHome = ({ item }: { item: THistory }) => {
  const { settings } = useSettingsStore();
  const router = useRouter();

  const plotsData = React.useMemo(() => {
    const { prediction } = item;
    return ["stone", "normal"].map((item, index) => {
      const isMatch = item === prediction.class_label;
      const probability = isMatch
        ? prediction.probability * 100
        : (1 - prediction.probability) * 100;

      return {
        value: probability,
        color: PLOT_COLORS[index],
        kidney: `${item} (${
          isMatch ? prediction.label : prediction.label === 1 ? 0 : 1
        }) • ${probability.toFixed(0)}%`,
        label: "",
      };
    });
  }, [item]);

  return (
    <Card
      style={{
        backgroundColor: COLORS.white,
        width: "100%",
        maxWidth: 500,
        alignSelf: "center",
        padding: 10,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.secondary,
          position: "absolute",
          top: 0,
          right: 0,
          width: 50,
          padding: 5,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            color: COLORS.black,
            fontSize: 10,
          }}
        >
          {dayjs(new Date(item.date)).fromNow()} ago
        </Text>
      </View>
      <TouchableOpacity
        style={{}}
        onPress={async () => {
          if (settings.haptics) {
            await onImpact();
          }
          router.navigate({
            pathname: "/(common)/results",
            params: {
              id: item.id,
            },
          });
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            gap: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={async () => {
                if (settings.haptics) {
                  await onImpact();
                }

                router.navigate({
                  pathname: "/(common)/image-viewer",
                  params: {
                    id: item.id,
                  },
                });
              }}
            >
              <Animated.Image
                source={{
                  uri: item.kidney,
                }}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 14,
                color:
                  item.prediction.label === 1 ? COLORS.red : COLORS.tertiary,
              }}
            >
              {item.prediction.label === 1
                ? "Kidney stones were detected based on the image provided."
                : "No Kidney stone detected on the image provided."}
            </Text>

            <View
              style={{
                backgroundColor: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 5,
                width: 120,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: COLORS.black,
                  textTransform: "uppercase",
                  fontSize: 12,
                }}
              >
                {item.model}
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 5,
              flex: 1,
            }}
          >
            <View style={{}}>
              <PieChart
                donut
                isAnimated
                animationDuration={300}
                innerRadius={20}
                data={plotsData}
                radius={30}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.bold,
                          fontSize: 10,
                          textAlign: "center",
                          color:
                            item.prediction.label === 1
                              ? COLORS.red
                              : COLORS.black,
                        }}
                      >
                        {item.prediction.label === 1
                          ? "Kidney Stone"
                          : "Normal Kidney"}
                      </Text>
                    </View>
                  );
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 5,
                }}
              >
                {plotsData.map((data, i) => (
                  <LegendItem
                    label={data.kidney}
                    key={i}
                    color={data.color}
                    dotStyle={{ width: 10, height: 10, borderRadius: 10 }}
                    labelStyle={{
                      fontSize: 12,
                      fontFamily: FONTS.regular,
                    }}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default HistoryItemHome;
