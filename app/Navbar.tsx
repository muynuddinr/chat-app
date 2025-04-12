import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Platform, 
  Animated, 
  Pressable,
  Modal,
  TextInput,
  FlatList
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ChatsScreen from '@/app/(tabs)/chats';
import StatusScreen from '@/app/(tabs)/status';
import CallsScreen from '@/app/(tabs)/calls';
import SettingsScreen from '@/app/(tabs)/settings';

const Navbar: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('Chats');
  const [scaleAnim] = useState(new Animated.Value(1));
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { name: 'Chats', icon: 'chatbubbles-outline', component: ChatsScreen },
    { name: 'Status', icon: 'time-outline', component: StatusScreen },
    { name: 'Calls', icon: 'call-outline', component: CallsScreen },
    { name: 'Settings', icon: 'settings-outline', component: SettingsScreen },
  ];

  const renderActiveScreen = () => {
    const activeTabData = tabs.find(tab => tab.name === activeTab);
    const ScreenComponent = activeTabData?.component;
    return ScreenComponent ? <ScreenComponent /> : null;
  };

  const handleAddPress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.push('/new');
    });
  };

  // Sample data for search (you can replace this with your actual data)
  const searchData = [
    { id: '1', name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { id: '2', name: 'Jane Smith', lastMessage: 'The meeting is scheduled for tomorrow' },
    { id: '3', name: 'Mike Johnson', lastMessage: 'Please check the documents I sent' },
  ];

  const filteredData = searchData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSearchItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.searchItem}
      onPress={() => {
        setIsSearchVisible(false);
        router.push({
          pathname: '/(tabs)/chat/[id]',
          params: { id: item.id }
        });
      }}
    >
      <Text style={styles.searchItemName}>{item.name}</Text>
      <Text style={styles.searchItemMessage} numberOfLines={1}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.headerTitle}>Cyphernix</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => setIsSearchVisible(true)}
          >
            <Ionicons name="search-outline" size={24} color="#2C3E50" />
          </TouchableOpacity>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={handleAddPress}
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>

      <View style={styles.content}>
        {renderActiveScreen()}
      </View>

      {/* Search Modal */}
      <Modal
        visible={isSearchVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.searchModal}>
          <View style={[styles.searchHeader, { paddingTop: insets.top }]}>
            <TouchableOpacity 
              onPress={() => {
                setIsSearchVisible(false);
                setSearchQuery('');
              }}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#2C3E50" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
          </View>
          <FlatList
            data={filteredData}
            renderItem={renderSearchItem}
            keyExtractor={item => item.id}
            style={styles.searchList}
          />
        </View>
      </Modal>

      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <Pressable
              key={tab.name}
              style={({ pressed }) => [
                styles.tab,
                pressed && styles.tabPressed
              ]}
              onPress={() => setActiveTab(tab.name)}
            >
              <Ionicons 
                name={tab.icon as any} 
                size={24} 
                color={activeTab === tab.name ? '#3498DB' : '#95A5A6'} 
              />
              <Text style={[
                styles.tabText,
                activeTab === tab.name && styles.activeTabText
              ]}>
                {tab.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A73E8',
    letterSpacing: 0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#F0F4F8',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  addButton: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#1A73E8',
    ...Platform.select({
      ios: {
        shadowColor: '#1A73E8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tabContainer: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#FFFFFF',
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  tabPressed: {
    opacity: 0.7,
    backgroundColor: '#F0F4F8',
  },
  tabText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#1A73E8',
  },
  searchModal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  backButton: {
    marginRight: 16,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#F0F4F8',
  },
  searchInput: {
    flex: 1,
    height: 44,
    backgroundColor: '#F0F4F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1E293B',
  },
  searchList: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    backgroundColor: '#FFFFFF',
  },
  searchItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  searchItemMessage: {
    fontSize: 14,
    color: '#64748B',
  },
});

export default Navbar;