import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LicensesScreen = () => {
  const router = useRouter();
  const licenses = [
    {
      name: 'React Native',
      version: '0.72.6',
      license: 'MIT',
      description: 'A framework for building native applications using React',
    },
    {
      name: 'Expo',
      version: '49.0.0',
      license: 'MIT',
      description: 'An open-source platform for making universal native apps',
    },
    {
      name: 'React Navigation',
      version: '6.0.0',
      license: 'MIT',
      description: 'Routing and navigation for React Native apps',
    },
    {
      name: '@expo/vector-icons',
      version: '14.0.0',
      license: 'MIT',
      description: 'Icon library for Expo apps',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Licenses</Text>
      </View>

      <ScrollView style={styles.content}>
        {licenses.map((item, index) => (
          <View key={index} style={styles.licenseItem}>
            <View style={styles.licenseHeader}>
              <Text style={styles.licenseName}>{item.name}</Text>
              <Text style={styles.licenseVersion}>v{item.version}</Text>
            </View>
            <Text style={styles.licenseType}>License: {item.license}</Text>
            <Text style={styles.licenseDescription}>{item.description}</Text>
          </View>
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
  licenseItem: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    marginBottom: 16,
  },
  licenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  licenseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  licenseVersion: {
    fontSize: 14,
    color: '#95A5A6',
  },
  licenseType: {
    fontSize: 14,
    color: '#3498DB',
    marginBottom: 8,
  },
  licenseDescription: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
  },
});

export default LicensesScreen;