import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const WhatsNewScreen = () => {
  const router = useRouter();
  const updates = [
    {
      version: '1.0.0',
      date: 'March 2024',
      changes: [
        'Initial release',
        'End-to-end encryption for messages',
        'Group chat support',
        'Voice and video calls',
        'Custom themes and appearance settings',
        'Media sharing capabilities',
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>What's New</Text>
      </View>

      <ScrollView style={styles.content}>
        {updates.map((update, index) => (
          <View key={index} style={styles.updateContainer}>
            <View style={styles.versionHeader}>
              <Text style={styles.versionText}>Version {update.version}</Text>
              <Text style={styles.dateText}>{update.date}</Text>
            </View>
            {update.changes.map((change, changeIndex) => (
              <View key={changeIndex} style={styles.changeItem}>
                <Ionicons name="checkmark-circle" size={20} color="#3498DB" />
                <Text style={styles.changeText}>{change}</Text>
              </View>
            ))}
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
  updateContainer: {
    marginBottom: 24,
  },
  versionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  versionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  dateText: {
    fontSize: 14,
    color: '#95A5A6',
  },
  changeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  changeText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default WhatsNewScreen;