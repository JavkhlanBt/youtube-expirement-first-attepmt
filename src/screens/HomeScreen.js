import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../../constants";
import ShortVideoCard from "../components/ShortVideoCard";
import MovieCard from "../components/MovieCard";
import { fetchTrendingVideos } from "../../api/youtube";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetchTrendingVideos();
  //   console.log("video:", data[0]);
  //   setVideos(data);
  // };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchTrendingVideos();
      console.log("video:", data[0]);
      setVideos(data);
    } catch (error) {
      console.error("Error fetching trending videos:", error);
    }
  };
  return (
    <View className="flex-1 bg-neutral-900">
      <StatusBar style="light" />
      <SafeAreaView className="flex-row justify-between mx-4 mb-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../../assets/icons/1384060.png")}
            className="h-7 w-10"
          />
          <Text className="text-white font-semibold text-xl tracking-tighter">
            YouTube
          </Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Image
            source={require("../../assets/icons/avatar.jpg")}
            className="h-7 w-7 rounded-full"
          />
        </View>
      </SafeAreaView>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="py-2 pb-5">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = isActive ? "text-black" : "text-white";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(category)}
                  key={index}
                  style={{
                    backgroundColor: isActive
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                  }}
                  className="rounded-md p-1 px-3 mr-2"
                >
                  <Text className={textClass}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* <MovieCard video={videos[4]} /> */}
        <View className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-400 border-4 border-l-0 border-r-0">
          <View className="mx-4 flex-row items-center space-x-2">
            <Image
              source={require("../../assets/icons/short.png")}
              className="h-6 w-5"
            />
            <Text className="text-white font-semibold text-lg tracking-tighter">
              Shorts
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4"
          >
            {shortVideos.map((item, index) => (
              <ShortVideoCard item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {videos.map((video, index) => (
            <MovieCard video={video} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
