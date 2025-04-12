import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SecurityScreen = () => {
  const router = useRouter();
  const [settings, setSettings] = useState({
    twoFactor: false,
    biometric: true,
    activeSession: true,
    loginAlerts: true,
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
        <Text style={styles.headerTitle}>Security</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Authentication</Text>
          
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionTitle}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
          </TouchableOpacity>

          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Two-Factor Authentication</Text>
            <Switch
              value={settings.twoFactor}
              onValueChange={() => toggleSwitch('twoFactor')}
              trackColor={{ false: '#95A5A6', true: '#3498DB' }}
            />
          </View>

          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Biometric Login</Text>
            <Switch
              value={settings.biometric}
              onValueChange={() => toggleSwitch('biometric')}
              trackColor={{ false: '#95A5A6', true: '#3498DB' }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security Alerts</Text>
          
          <View style={styles.optionItem}>
            <Text style={styles.optionTitle}>Login Alerts</Text>
            <Switch
              value={settings.loginAlerts}
              onValueChange={() => toggleSwitch('loginAlerts')}
              trackColor={{ false: '#95A5A6', true: '#3498DB' }}
            />
          </View>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionTitle}>Manage Trusted Devices</Text>
            <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out of All Devices</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
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
  logoutButton: {
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SecurityScreen;