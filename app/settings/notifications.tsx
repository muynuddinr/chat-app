import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const NotificationsScreen = () => {
  const router = useRouter();
  const [settings, setSettings] = useState({
    messageNotifications: true,
    groupNotifications: true,
    callNotifications: true,
    soundEnabled: true,
    vibrationEnabled: true,
  });

  const toggleSwitch = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Messages</Text>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Message Notifications</Text>
          <Switch
            value={settings.messageNotifications}
            onValueChange={() => toggleSwitch('messageNotifications')}
            trackColor={{ false: '#95A5A6', true: '#E74C3C' }}
          />
        </View>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Group Notifications</Text>
          <Switch
            value={settings.groupNotifications}
            onValueChange={() => toggleSwitch('groupNotifications')}
            trackColor={{ false: '#95A5A6', true: '#E74C3C' }}
          />
        </View>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Call Notifications</Text>
          <Switch
            value={settings.callNotifications}
            onValueChange={() => toggleSwitch('callNotifications')}
            trackColor={{ false: '#95A5A6', true: '#E74C3C' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sound & Vibration</Text>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Sound</Text>
          <Switch
            value={settings.soundEnabled}
            onValueChange={() => toggleSwitch('soundEnabled')}
            trackColor={{ false: '#95A5A6', true: '#E74C3C' }}
          />
        </View>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Vibration</Text>
          <Switch
            value={settings.vibrationEnabled}
            onValueChange={() => toggleSwitch('vibrationEnabled')}
            trackColor={{ false: '#95A5A6', true: '#E74C3C' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#95A5A6',
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  optionTitle: {
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default NotificationsScreen;