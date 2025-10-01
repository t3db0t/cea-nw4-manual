import { useState } from "react";
import {
  Alert,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Advanced Tailwind Tests
          </Text>
          <Text className="text-lg text-gray-600 dark:text-gray-300">
            Interactive components and complex layouts
          </Text>
        </View>

        {/* Form Elements */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Form Elements
          </Text>
          <View className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <TextInput
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 mb-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
              placeholder="Enter some text..."
              placeholderTextColor="#9CA3AF"
              value={inputValue}
              onChangeText={setInputValue}
            />

            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-gray-700 dark:text-gray-300 font-medium">
                Toggle Switch
              </Text>
              <Switch
                value={isEnabled}
                onValueChange={setIsEnabled}
                trackColor={{ false: "#E5E7EB", true: "#3B82F6" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#F3F4F6"}
              />
            </View>

            <TouchableOpacity
              className="bg-indigo-500 py-3 px-6 rounded-lg"
              onPress={() =>
                Alert.alert(
                  "Form Submitted",
                  `Input: ${inputValue}, Switch: ${isEnabled}`
                )
              }
            >
              <Text className="text-white text-center font-semibold">
                Submit Form
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Layouts */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Card Layouts
          </Text>
          <View className="flex-row flex-wrap gap-4">
            <View className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
              <View className="w-12 h-12 bg-blue-500 rounded-full mb-3" />
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Card 1
              </Text>
              <Text className="text-gray-600 dark:text-gray-300 text-sm">
                This is a sample card with some content.
              </Text>
            </View>

            <View className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
              <View className="w-12 h-12 bg-green-500 rounded-full mb-3" />
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Card 2
              </Text>
              <Text className="text-gray-600 dark:text-gray-300 text-sm">
                Another card with different content.
              </Text>
            </View>
          </View>
        </View>

        {/* Grid Layout */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Grid Layout
          </Text>
          <View className="bg-white dark:bg-gray-800 p-4 rounded-xl">
            <View className="flex-row flex-wrap gap-2">
              {Array.from({ length: 12 }, (_, i) => (
                <View
                  key={i}
                  className={`w-8 h-8 rounded ${
                    i % 4 === 0
                      ? "bg-red-500"
                      : i % 4 === 1
                        ? "bg-blue-500"
                        : i % 4 === 2
                          ? "bg-green-500"
                          : "bg-yellow-500"
                  }`}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Border Radius Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Border Radius
          </Text>
          <View className="flex-row justify-around">
            <View className="w-16 h-16 bg-purple-500 rounded-none" />
            <View className="w-16 h-16 bg-purple-500 rounded-sm" />
            <View className="w-16 h-16 bg-purple-500 rounded" />
            <View className="w-16 h-16 bg-purple-500 rounded-lg" />
            <View className="w-16 h-16 bg-purple-500 rounded-xl" />
            <View className="w-16 h-16 bg-purple-500 rounded-full" />
          </View>
        </View>

        {/* Opacity Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Opacity
          </Text>
          <View className="flex-row justify-around">
            <View className="w-16 h-16 bg-orange-500 opacity-25 rounded-lg" />
            <View className="w-16 h-16 bg-orange-500 opacity-50 rounded-lg" />
            <View className="w-16 h-16 bg-orange-500 opacity-75 rounded-lg" />
            <View className="w-16 h-16 bg-orange-500 opacity-100 rounded-lg" />
          </View>
        </View>

        {/* Position Tests */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Positioning
          </Text>
          <View className="bg-gray-200 dark:bg-gray-700 h-32 rounded-lg relative">
            <View className="absolute top-2 left-2 w-8 h-8 bg-red-500 rounded" />
            <View className="absolute top-2 right-2 w-8 h-8 bg-blue-500 rounded" />
            <View className="absolute bottom-2 left-2 w-8 h-8 bg-green-500 rounded" />
            <View className="absolute bottom-2 right-2 w-8 h-8 bg-yellow-500 rounded" />
            <View className="absolute top-1/2 left-1/2 w-8 h-8 bg-purple-500 rounded -translate-x-4 -translate-y-4" />
          </View>
        </View>

        {/* Animation Hints */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Interactive Elements
          </Text>
          <View className="space-y-3">
            <TouchableOpacity
              className="bg-gradient-to-r from-pink-500 to-rose-500 py-4 px-6 rounded-lg active:scale-95"
              onPress={() => Alert.alert("Gradient Button Pressed")}
            >
              <Text className="text-white text-center font-semibold text-lg">
                Gradient Button
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-gray-100 dark:bg-gray-700 py-4 px-6 rounded-lg border-2 border-dashed border-gray-400 dark:border-gray-500"
              onPress={() => Alert.alert("Dashed Border Pressed")}
            >
              <Text className="text-gray-700 dark:text-gray-300 text-center font-medium">
                Dashed Border Button
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Status Indicators */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Status Indicators
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-green-500 rounded-full mr-3" />
              <Text className="text-gray-700 dark:text-gray-300">Online</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
              <Text className="text-gray-700 dark:text-gray-300">Away</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <Text className="text-gray-700 dark:text-gray-300">Offline</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
