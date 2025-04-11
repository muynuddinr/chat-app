import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SettingsScreen = () => {
  const router = useRouter();
  const settingsOptions = [
    { title: 'Account', icon: 'person-outline', color: '#3498DB', route: '/settings/account' },
    { title: 'Privacy', icon: 'lock-closed-outline', color: '#2ECC71', route: '/settings/privacy' },
    { title: 'Notifications', icon: 'notifications-outline', color: '#E74C3C', route: '/settings/notifications' },
    { title: 'Storage', icon: 'folder-outline', color: '#FF9800', route: '/settings/storage' },
    { title: 'Chat Settings', icon: 'chatbox-outline', color: '#9B59B6', route: '/settings/chat' },
    { title: 'Help', icon: 'help-circle-outline', color: '#F1C40F', route: '/settings/help' },
    { title: 'About', icon: 'information-circle-outline', color: '#34495E', route: '/settings/about' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.optionItem}
            onPress={() => router.push(option.route as any)}
          >
            <View style={[styles.iconContainer, { backgroundColor: `${option.color}20` }]}>
              <Ionicons name={option.icon as any} size={24} color={option.color} />
            </View>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
  },
});

export default SettingsScreen;