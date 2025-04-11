import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const statusData = [
  {
    id: '1',
    name: 'My Status',
    time: 'Tap to add status update',
    isMyStatus: true,
    avatar: 'https://i.pravatar.cc/150?img=0', // Using a default avatar URL instead
  },
  {
    id: '2',
    name: 'John Doe',
    time: '20 minutes ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
    hasUnseenStatus: true,
  },
  // Add more status items
];

export default function StatusScreen() {
  const renderStatusItem = ({ item }: { item: { id: string; name: string; time: string; isMyStatus?: boolean; avatar?: string; hasUnseenStatus?: boolean } }) => (
    <TouchableOpacity style={styles.statusItem}>
      <View style={styles.avatarContainer}>
        <Image 
          source={item.isMyStatus ? { uri: item.avatar } : { uri: item.avatar }}
          style={[styles.avatar, item.hasUnseenStatus && styles.unseenStatus]}
        />
        {item.isMyStatus && (
          <View style={styles.addButton}>
            <Ionicons name="add-circle" size={20} color="#3498DB" />
          </View>
        )}
      </View>
      <View style={styles.statusContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={statusData}
        renderItem={renderStatusItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  unseenStatus: {
    borderWidth: 2,
    borderColor: '#3498DB',
  },
  addButton: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  statusContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
  },
  time: {
    fontSize: 14,
    color: '#95A5A6',
  },
});