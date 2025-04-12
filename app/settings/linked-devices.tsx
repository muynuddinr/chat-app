import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LinkedDevicesScreen = () => {
  const router = useRouter();
  const devices = [
    {
      name: 'iPhone 13 Pro',
      type: 'phone',
      lastActive: 'Active now',
      location: 'New York, USA',
    },
    {
      name: 'MacBook Pro',
      type: 'laptop',
      lastActive: '2 hours ago',
      location: 'New York, USA',
    },
    {
      name: 'iPad Air',
      type: 'tablet',
      lastActive: '1 day ago',
      location: 'New York, USA',
    },
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'phone':
        return 'phone-portrait-outline';
      case 'laptop':
        return 'laptop-outline';
      case 'tablet':
        return 'tablet-portrait-outline';
      default:
        return 'hardware-chip-outline';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Linked Devices</Text>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.addDeviceButton}>
          <Ionicons name="add-circle-outline" size={24} color="#3498DB" />
          <Text style={styles.addDeviceText}>Link New Device</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Current Device</Text>
        <View style={styles.deviceItem}>
          <View style={styles.deviceIcon}>
            <Ionicons name="phone-portrait-outline" size={24} color="#3498DB" />
          </View>
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>iPhone 13 Pro (This Device)</Text>
            <Text style={styles.deviceStatus}>Active now • New York, USA</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Other Devices</Text>
        {devices.map((device, index) => (
          <TouchableOpacity key={index} style={styles.deviceItem}>
            <View style={styles.deviceIcon}>
              <Ionicons name={getDeviceIcon(device.type)} size={24} color="#3498DB" />
            </View>
            <View style={styles.deviceInfo}>
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceStatus}>
                {device.lastActive} • {device.location}
              </Text>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Ionicons name="ellipsis-vertical" size={20} color="#95A5A6" />
            </TouchableOpacity>
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
  addDeviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    marginBottom: 24,
  },
  addDeviceText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#3498DB',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#95A5A6',
    marginBottom: 16,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  deviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBF5FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
    marginBottom: 4,
  },
  deviceStatus: {
    fontSize: 14,
    color: '#95A5A6',
  },
  moreButton: {
    padding: 8,
  },
});

export default LinkedDevicesScreen;