import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const StorageScreen = () => {
  const router = useRouter();
  const storageItems = [
    {
      title: 'Photos & Videos',
      icon: 'images-outline',
      size: '2.1 GB',
      color: '#FF9800',
      items: '243 items'
    },
    {
      title: 'Documents',
      icon: 'document-outline',
      size: '156 MB',
      color: '#FF9800',
      items: '45 items'
    },
    {
      title: 'Audio Files',
      icon: 'musical-notes-outline',
      size: '350 MB',
      color: '#FF9800',
      items: '128 items'
    },
    {
      title: 'Downloads',
      icon: 'download-outline',
      size: '1.3 GB',
      color: '#FF9800',
      items: '86 items'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Storage</Text>
      </View>

      <View style={styles.storageInfo}>
        <View style={styles.usageContainer}>
          <Text style={styles.usageText}>Storage Used</Text>
          <Text style={styles.usageAmount}>3.9 GB / 15 GB</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '26%' }]} />
          </View>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {storageItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.storageItem}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
              <Ionicons name={item.icon as any} size={24} color={item.color} />
            </View>
            <View style={styles.itemContent}>
              <View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.items}</Text>
              </View>
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeText}>{item.size}</Text>
                <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.cleanupButton}>
        <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
        <Text style={styles.cleanupButtonText}>Clean Up Storage</Text>
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
  storageInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  usageContainer: {
    marginBottom: 8,
  },
  usageText: {
    fontSize: 14,
    color: '#95A5A6',
    marginBottom: 4,
  },
  usageAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#F4F4F4',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF9800',
    borderRadius: 3,
  },
  content: {
    flex: 1,
  },
  storageItem: {
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
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#95A5A6',
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sizeText: {
    fontSize: 14,
    color: '#2C3E50',
    fontWeight: '500',
  },
  cleanupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9800',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  cleanupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StorageScreen;