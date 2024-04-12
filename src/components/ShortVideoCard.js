// import { View, Text, Image } from "react-native";
// import React from "react";
// import * as Icon from "react-native-feather";
// export default function ShortVideoCard({ item }) {
//   return (
//     <View className="relative h-64 w-40 flex mr-3 justify-between">
//       <Image
//         source={item.image}
//         className="h-full w-full rounded-xl absolute"
//       />
//       <View className="flex-row justify-end pt-3 pr-1">
//         <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} height="20" />
//       </View>
//       <View className="p-2">
//         <Text className="text-white shadow-lg font-bold text-sm">
//           {item.title}
//         </Text>
//         <Text className="text-white shadow-md font-extrabold text-xs">
//           {item.viewCount}
//         </Text>
//       </View>
//     </View>
//   );
// }
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import * as Icon from "react-native-feather";

export default function ShortVideoCard({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View className="relative h-64 w-40 mr-3 justify-between">
        <Image
          source={item.image}
          className="h-full w-full rounded-xl absolute"
        />
        <View className="flex-row justify-end pt-3 pr-1">
          <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} height="20" />
        </View>
        <View className="p-2">
          <Text className="text-white shadow-lg font-bold text-sm">
            {item.title}
          </Text>
          <Text className="text-white shadow-md font-extrabold text-xs">
            {item.viewCount}
          </Text>
        </View>
      </View>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-80">
          <Image
            source={item.image}
            style={{
              aspectRatio: 19.5 / 9,
            }}
          />
          <TouchableOpacity
            className="absolute top-12 right-8"
            onPress={() => setModalVisible(false)}
          >
            <Icon.X color="white" width={20} height={20} />
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
