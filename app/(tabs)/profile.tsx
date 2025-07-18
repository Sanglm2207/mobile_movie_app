import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    const router = useRouter();

    const [reminderEnabled, setReminderEnabled] = useState(true);
    const [backgroundPlay, setBackgroundPlay] = useState(false);

    const renderItem = (iconName: string, label: string, onPress?: () => void) => (
        <TouchableOpacity
            className="flex-row items-center justify-between py-3 border-b border-gray-800"
            onPress={onPress}
        >
            <View className="flex-row items-center gap-3">
                <Ionicons name={iconName as any} size={20} color="#999" />
                <Text className="text-white text-base">{label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
    );
    return (
        <SafeAreaView className="bg-primary flex-1">
            {/* Header */}
            <View className="flex-row items-center justify-between px-5 py-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>

                <Text className="text-white text-lg font-semibold">Cá nhân</Text>

                <View style={{ width: 24 }} />
            </View>


            {/* Nội dung Profile */}
            <ScrollView className="px-5 pb-28">
                {/* Tài khoản */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-3 mb-5">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-3">
                            <Ionicons name="person-circle" size={40} color="tomato" />
                            <View>
                                <Text className="text-gray-300">Tài khoản</Text>
                                <View className="flex-row items-center gap-1 mt-1">
                                    <Ionicons name="call" size={16} color="tomato" />
                                    <Text className="text-white font-medium bg-[#333] px-2 py-1 rounded-lg">
                                        84342xxx037
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Text className="text-gray-500">ID: 1891844</Text>
                    </View>
                </View>
                {/* Tài khoản */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-2 mb-5">
                    {renderItem("lock-closed-outline", "Đổi mật khẩu")}
                    {renderItem("wifi", "Đăng nhập nhanh")}
                </View>

                {/* Gói dịch vụ */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-2 mb-5">
                    <View className="flex-row items-center gap-2 mb-2">
                        <Ionicons name="folder" size={20} color="#3F79FF" />
                        <Text className="text-white font-semibold">Thông tin gói dịch vụ</Text>
                    </View>
                    {renderItem("card", "Gói cước")}
                    {renderItem("pricetag", "Nhập mã kích hoạt")}
                </View>

                {/* Danh sách cá nhân */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-2 mb-10">
                    <View className="flex-row items-center gap-2 mb-2">
                        <Ionicons name="person" size={20} color="#48C774" />
                        <Text className="text-white font-semibold">Danh sách cá nhân</Text>
                    </View>
                    {renderItem("reader", "Lịch sử xem")}
                    {renderItem("thumbs-up", "Yêu thích")}
                    {renderItem("add-circle-outline", "Xem sau")}
                    {renderItem("download", "Tải xuống")}
                    {renderItem("remove-circle-outline", "Xoá tài khoản")}
                </View>

                {/* Cài đặt */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-3 mb-5">
                    <View className="flex-row items-center justify-between mb-2">
                        <View className="flex-row items-center gap-2">
                            <Ionicons name="settings" size={20} color="#EF4444" />
                            <View>
                                <Text className="text-white font-semibold">Cài đặt</Text>
                                <Text className="text-gray-500 text-xs mt-0.5">Phiên bản 5.2.2</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-down" size={18} color="#666" />
                    </View>

                    {renderItem("desktop-outline", "Quản lý thiết bị sử dụng")}
                    {renderItem("images-outline", "Tuỳ chọn chất lượng")}
                    {renderItem("download-outline", "Tuỳ chọn tải xuống")}
                    {renderItem("people", "Lan toả TV360")}

                    {/* Nhắc dừng xem với switch */}
                    <View className="flex-row items-center justify-between py-3 border-b border-gray-800">
                        <View className="flex-row items-center gap-3">
                            <Ionicons name="stop-circle-outline" size={20} color="#999" />
                            <Text className="text-white text-base">
                                Nhắc dừng xem (02:00)
                            </Text>
                        </View>
                        <Switch
                            value={reminderEnabled}
                            onValueChange={setReminderEnabled}
                            trackColor={{ true: "#EF4444", false: "#444" }}
                            thumbColor="#fff"
                        />
                    </View>

                    {renderItem("language", "Ngôn ngữ")}

                    {/* Phát trong nền */}
                    <View className="flex-row items-center justify-between py-3">
                        <View className="flex-row items-center gap-3">
                            <Ionicons name="volume-medium-outline" size={20} color="#999" />
                            <Text className="text-white text-base">Phát trong nền</Text>
                        </View>
                        <Switch
                            value={backgroundPlay}
                            onValueChange={setBackgroundPlay}
                            trackColor={{ true: "#EF4444", false: "#444" }}
                            thumbColor="#fff"
                        />
                    </View>
                </View>

                {/* Hỗ trợ */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-3 mb-10">
                    <View className="flex-row items-center gap-2 mb-2">
                        <Ionicons name="information-circle" size={20} color="#FBBF24" />
                        <Text className="text-white font-semibold">Hỗ trợ</Text>
                    </View>
                    {renderItem("document-text-outline", "Điều khoản")}
                    {renderItem("shield-checkmark-outline", "Chính sách dữ liệu cá nhân")}
                    {renderItem("construct-outline", "Trợ giúp")}
                </View>

                {/* Đăng xuất */}
                <View className="bg-[#1C1C1E] rounded-xl px-4 py-3">
                    <TouchableOpacity
                        className="flex-row items-center justify-between"
                        onPress={() => Alert.alert(
                            "Đăng xuất",
                            "Bạn có chắc chắn muốn đăng xuất?",
                            [
                                { text: "Huỷ", style: "cancel" },
                                { text: "Đăng xuất", onPress: () => router.push("/") },        
                            ]
                        )}
                    >
                        <View className="flex-row items-center gap-5">
                            <Ionicons name="log-out-outline" size={25} color="#DC3C22" />
                            <Text className="text-white font-bold text-[#DC3C22]">Đăng xuất</Text>     
                            </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;