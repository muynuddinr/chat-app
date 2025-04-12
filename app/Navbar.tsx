import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Animated, Pressable } from 'react-native';
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

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.headerTitle}>chat aap</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.iconButton}
            activeOpacity={0.7}
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
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F4F4F4',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C3E50',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  addButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#3498DB',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tabContainer: {
    flexDirection: 'row',
    height: 60,
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabPressed: {
    opacity: 0.7,
  },
  tabText: {
    fontSize: 12,
    color: '#95A5A6',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#3498DB',
  },
});

export default Navbar;