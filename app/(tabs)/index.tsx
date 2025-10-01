import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Tailwind CSS Tests
          </Text>
          <Text className="text-lg text-gray-600 dark:text-gray-300">
            Testing NativeWind 4 with React Native
          </Text>
        </View>

        {/* Typography Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Typography
          </Text>
          <Text className="text-6xl font-black text-blue-600 mb-2">H1</Text>
          <Text className="text-4xl font-bold text-green-600 mb-2">H2</Text>
          <Text className="text-2xl font-semibold text-purple-600 mb-2">
            H3
          </Text>
          <Text className="text-lg font-medium text-red-600 mb-2">H4</Text>
          <Text className="text-base text-gray-700 dark:text-gray-300 mb-2">
            Regular text with <Text className="font-bold">bold</Text> and{" "}
            <Text className="italic">italic</Text> styles
          </Text>
        </View>

        {/* Color Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Colors
          </Text>
          <View className="flex-row flex-wrap gap-2 mb-4">
            <View className="w-16 h-16 bg-red-500 rounded-lg" />
            <View className="w-16 h-16 bg-blue-500 rounded-lg" />
            <View className="w-16 h-16 bg-green-500 rounded-lg" />
            <View className="w-16 h-16 bg-yellow-500 rounded-lg" />
            <View className="w-16 h-16 bg-purple-500 rounded-lg" />
            <View className="w-16 h-16 bg-pink-500 rounded-lg" />
          </View>
          <View className="flex-row flex-wrap gap-2">
            <View className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg" />
            <View className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <View className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg" />
            <View className="w-16 h-16 bg-gray-400 dark:bg-gray-500 rounded-lg" />
          </View>
        </View>

        {/* Spacing Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Spacing
          </Text>
          <View className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
            <View className="bg-blue-200 dark:bg-blue-800 p-2 m-2 rounded">
              <Text className="text-blue-800 dark:text-blue-200">
                Padding & Margin
              </Text>
            </View>
          </View>
        </View>

        {/* Button Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Buttons
          </Text>
          <View className="gap-3">
            <TouchableOpacity
              className="bg-blue-500 py-3 px-6 rounded-lg"
              onPress={() => Alert.alert("Primary Button Pressed")}
            >
              <Text className="text-white text-center font-semibold">
                Primary Button
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-gray-200 dark:bg-gray-700 py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-600"
              onPress={() => Alert.alert("Secondary Button Pressed")}
            >
              <Text className="text-gray-800 dark:text-gray-200 text-center font-semibold">
                Secondary Button
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-red-500 py-3 px-6 rounded-full"
              onPress={() => Alert.alert("Danger Button Pressed")}
            >
              <Text className="text-white text-center font-semibold">
                Danger Button
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Layout Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Layout
          </Text>
          <View className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <View className="flex-row justify-between items-center mb-4">
              <View className="bg-green-500 w-20 h-20 rounded-lg" />
              <View className="bg-yellow-500 w-20 h-20 rounded-lg" />
              <View className="bg-red-500 w-20 h-20 rounded-lg" />
            </View>
            <View className="flex-row justify-center items-center">
              <View className="bg-purple-500 w-32 h-16 rounded-lg" />
            </View>
          </View>
        </View>

        {/* Shadow Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Shadows
          </Text>
          <View className="flex-row justify-around">
            <View className="bg-white dark:bg-gray-700 w-20 h-20 rounded-lg shadow-sm" />
            <View className="bg-white dark:bg-gray-700 w-20 h-20 rounded-lg shadow-md" />
            <View className="bg-white dark:bg-gray-700 w-20 h-20 rounded-lg shadow-lg" />
            <View className="bg-white dark:bg-gray-700 w-20 h-20 rounded-lg shadow-xl" />
          </View>
        </View>

        {/* Responsive Test */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Responsive Design
          </Text>
          <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
            <Text className="text-white text-center text-lg font-semibold">
              Gradient Background
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
