import { View, Text, ScrollView, StyleSheet, StatusBar, SafeAreaView, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconButton from 'react-native-vector-icons/dist/Entypo';

const ProfileScreen = () => {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar backgroundColor='#FFFFFF'
                barStyle="dark-content"
            />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.textTitle}>Tài khoản </Text>
                    </View>
                    <View style={styles.avatarView}>
                        <View style={styles.avatarWrap}>
                            <Image
                                style={styles.avatar}
                                source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyYPpSOn_kpXBtE4wJ50MCIJ9J7bBAq8_swh03mb1kml7lGqF' }}
                            />

                            <View style={styles.iconView}>
                                <IconButton name="camera" size={25} color="#3D9C8A" style={styles.icon}/>
                            </View>
                        </View>


                        <Text style={styles.avatarText}>Ngo Quoc Bao</Text>
                        <Text style={{ marginTop: 5 }}>Hoc Vien</Text>
                    </View>

                    <View style={{ marginLeft: '5%', }}>
                        <Text style={styles.infoText}>Thông tin</Text>
                    </View>

                    <View style={styles.info}>
                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Domain</Text>
                            <Text >acb@gmail.com</Text>
                            <Text></Text>
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Tên Đăng Nhập</Text>
                            <Text style={{ marginRight: '30%' }}>abc123</Text>
                            <Text></Text>
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Mật Khẩu</Text>
                            <Text style={{ marginRight: '21%' }}>****</Text>
                            <IconButton name="chevron-thin-right" size={15} color="#000" />
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Ngày sinh</Text>
                            <Text style={{ marginRight: '9%' }}>10/09/1990</Text>
                            <IconButton name="chevron-thin-right" size={15} color="#000" />
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Giới tính</Text>
                            <Text style={{ marginRight: '18%' }}>Nam</Text>
                            <IconButton name="chevron-thin-right" size={15} color="#000" />
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Trường học</Text>
                            <Text style={{ marginRight: '13%' }}>Trường Đời</Text>
                            <IconButton name="chevron-thin-right" size={15} color="#000" />
                        </View>
                    </View>

                    <View style={{ marginTop: '3%', marginLeft: '5%', fontWeight: 'bold', }}>
                        <Text style={styles.infoText}>Cài đặt</Text>
                    </View>

                    <View style={styles.setting}>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Nhận thông báo</Text>

                            <Text style={{ marginLeft: '50%' }}>{isEnabled ? 'Bật' : 'Tắt'}</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#1FAD95" }}
                                thumbColor={isEnabled ? '#FFFFFF' : "#f4f3f4"}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Báo lỗi</Text>
                        </View>

                        <View style={styles.inforrow}>
                            <Text style={styles.settingText}>Thông tin phần mềm</Text>
                        </View>

                    </View>

                    <View style={{ marginTop: '3%', marginLeft: '5%', fontWeight: 'bold', }}>
                        <Text style={styles.infoText}>Chuyển tài khoản</Text>
                    </View>

                    <View style={styles.changeAc}>
                        <View style={styles.changeAc1}>
                            <TouchableOpacity style={styles.button1}>
                                <Text style={{ color: 'white' }}>Học viên</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.changeAc2}>
                            <TouchableOpacity style={styles.button2}>
                                <Text style={{ color: '#1FAD95' }}>Giảng viên</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="poweroff" size={30} color="#F7980D" style={{ marginLeft: '5%' }} />
                        <Text style={{ fontSize: 20, color: "#F7980D", marginLeft: '2%', fontWeight: 'bold' }}>Đăng xuất</Text>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingBottom: 100
    },
    safearea: {
        flex: 1,
    },
    title: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    textTitle: {
        color: '#0F0F0F',
        fontSize: 25,
        fontWeight: 'bold'
    },
    avatar: {
        width: '10%',
        height: '20%',
        borderRadius: 200,
        borderWidth: 70,
    },
    avatarView: {
        alignItems: 'center',
        marginTop: 10,
    },
    avatarWrap: {
        position: 'relative',
        padding: 5,
    },
    avatarText: {
        fontSize: 20,
        color: '#0F0F0F',
        fontWeight: 'bold',
        marginTop: '5%',
        marginLeft: '5%',
    },
    info: {
        marginTop: '3%',
        marginLeft: '5%',
        justifyContent: 'space-around'
    },
    infoText: {
        fontSize: 22,
        color: '#0F0F0F',
        fontWeight: 'bold',
    },
    inforrow: {
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#EFEFEF',
        paddingBottom: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    setting: {
        marginTop: '3%',
        marginLeft: '5%',
        justifyContent: 'space-around'
    },
    settingText: {
        fontSize: 15,
        color: '#0F0F0F',
        fontWeight: '500',
    },
    changeAc: {
        marginTop: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1FAD95',
        margin: '5%',
    },
    changeAc1: {
        flex: 1,
    },
    changeAc2: {
        flex: 1,
    },
    button1: {
        backgroundColor: '#1FAD95',
        padding: 10,
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        alignItems: 'center'
    },
    button2: {
        padding: 10,
        flex: 1,
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        alignItems: 'center'
    },
    iconView: {
        backgroundColor: "#FFF",
        borderRadius: 25,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    },
    icon: {
        backgroundColor: '#F2EFF0',
        padding: 5,
        borderRadius: 25,
    }

})

export default ProfileScreen;