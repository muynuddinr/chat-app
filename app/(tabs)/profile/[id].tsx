import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.status}>Online</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={24} color="#3498DB" />
            <Text style={styles.infoText}>+1 234 567 890</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={24} color="#3498DB" />
            <Text style={styles.infoText}>john.doe@example.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#95A5A6',
  },
  infoSection: {
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#2C3E50',
  },
});