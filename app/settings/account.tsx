import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AccountSettings = () => {
  const router = useRouter();
  const options = [
    { title: 'Profile', icon: 'person-circle-outline', color: '#3498DB' },
    { title: 'Security', icon: 'shield-checkmark-outline', color: '#3498DB' },
    { title: 'Linked Devices', icon: 'phone-portrait-outline', color: '#3498DB' },
    { title: 'Delete Account', icon: 'trash-outline', color: '#E74C3C' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <ScrollView style={styles.content}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
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

export default AccountSettings;