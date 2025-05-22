import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Image
      source={{ uri:'https://avatars.githubusercontent.com/u/121661785?v=4' }} className="w-32 h-32 rounded-full"
      />
      <Text className="text-5xl text-dark-200 font-bold">Eydi Nishimoto</Text>
      <Text className="text-2xl text-dark-100 font-light">Idade: 19 anos</Text>
      <Text className="text-2xl text-dark-100 font-light">Localização: Campo Grande, MS</Text>
      <TouchableOpacity
      className="bg-blue-500 py-2 px-4 rounded-full">
        <Text className="text-white font-bold">Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
