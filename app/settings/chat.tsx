import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ChatSettingsScreen = () => {
  const router = useRouter();
  const [settings, setSettings] = useState({
    enterToSend: true,
    mediaAutoDownload: true,
    saveToGallery: true,
    readReceipts: true,
    typing: true,
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
        <Text style={styles.headerTitle}>Chat Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chat Preferences</Text>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Enter to Send</Text>
          <Switch
            value={settings.enterToSend}
            onValueChange={() => toggleSwitch('enterToSend')}
            trackColor={{ false: '#95A5A6', true: '#9B59B6' }}
          />
        </View>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Media Auto-Download</Text>
          <Switch
            value={settings.mediaAutoDownload}
            onValueChange={() => toggleSwitch('mediaAutoDownload')}
            trackColor={{ false: '#95A5A6', true: '#9B59B6' }}
          />
        </View>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Save to Gallery</Text>
          <Switch
            value={settings.saveToGallery}
            onValueChange={() => toggleSwitch('saveToGallery')}
            trackColor={{ false: '#95A5A6', true: '#9B59B6' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Read Receipts</Text>
          <Switch
            value={settings.readReceipts}
            onValueChange={() => toggleSwitch('readReceipts')}
            trackColor={{ false: '#95A5A6', true: '#9B59B6' }}
          />
        </View>
        <View style={styles.optionItem}>
          <Text style={styles.optionTitle}>Show Typing</Text>
          <Switch
            value={settings.typing}
            onValueChange={() => toggleSwitch('typing')}
            trackColor={{ false: '#95A5A6', true: '#9B59B6' }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Chat History</Text>
      </TouchableOpacity>
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
  clearButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChatSettingsScreen;