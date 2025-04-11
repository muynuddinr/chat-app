import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PrivacySettings = () => {
  const router = useRouter();
  const [settings, setSettings] = React.useState({
    lastSeen: true,
    readReceipts: true,
    profilePhoto: true,
    groups: true,
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
        <Text style={styles.headerTitle}>Privacy</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Who can see my...</Text>
          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Last Seen</Text>
            <Switch
              value={settings.lastSeen}
              onValueChange={() => toggleSwitch('lastSeen')}
              trackColor={{ false: '#95A5A6', true: '#2ECC71' }}
            />
          </View>
          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Read Receipts</Text>
            <Switch
              value={settings.readReceipts}
              onValueChange={() => toggleSwitch('readReceipts')}
              trackColor={{ false: '#95A5A6', true: '#2ECC71' }}
            />
          </View>
          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Profile Photo</Text>
            <Switch
              value={settings.profilePhoto}
              onValueChange={() => toggleSwitch('profilePhoto')}
              trackColor={{ false: '#95A5A6', true: '#2ECC71' }}
            />
          </View>
          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Groups</Text>
            <Switch
              value={settings.groups}
              onValueChange={() => toggleSwitch('groups')}
              trackColor={{ false: '#95A5A6', true: '#2ECC71' }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.blockButtonText}>Blocked Contacts</Text>
          <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
        </TouchableOpacity>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
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
  blockButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F4F4F4',
  },
  blockButtonText: {
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: '500',
  },
});

export default PrivacySettings;