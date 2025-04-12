import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

interface StatusItem {
  id: string;
  name: string;
  time: string;
  isMyStatus?: boolean;
  avatar?: string;
  hasUnseenStatus?: boolean;
  statusImage?: string;
}

const statusData: StatusItem[] = [
  {
    id: '1',
    name: 'My Status',
    time: 'Tap to add status update',
    isMyStatus: true,
    avatar: 'https://i.pravatar.cc/150?img=0',
  },
  {
    id: '2',
    name: 'John Doe',
    time: '20 minutes ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
    hasUnseenStatus: true,
    statusImage: 'https://picsum.photos/400/800',
  },
  {
    id: '3',
    name: 'Sarah Wilson',
    time: '35 minutes ago',
    avatar: 'https://i.pravatar.cc/150?img=3',
    hasUnseenStatus: true,
    statusImage: 'https://picsum.photos/400/801',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    time: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=4',
    hasUnseenStatus: false,
    statusImage: 'https://picsum.photos/400/802',
  },
  {
    id: '5',
    name: 'Emily Brown',
    time: '5 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=5',
    hasUnseenStatus: true,
    statusImage: 'https://picsum.photos/400/803',
  },
  {
    id: '6',
    name: 'David Clark',
    time: 'Today, 9:30 AM',
    avatar: 'https://i.pravatar.cc/150?img=6',
    hasUnseenStatus: false,
    statusImage: 'https://picsum.photos/400/804',
  },
  {
    id: '7',
    name: 'Lisa Anderson',
    time: 'Today, 8:15 AM',
    avatar: 'https://i.pravatar.cc/150?img=7',
    hasUnseenStatus: true,
    statusImage: 'https://picsum.photos/400/805',
  },
];

export default function StatusScreen() {
  const router = useRouter();

  const handleStatusPress = async (item: StatusItem) => {
    if (item.isMyStatus) {
      // Handle status upload
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });

        if (!result.canceled) {
          // Here you would typically upload the image to your backend
          console.log('Selected image:', result.assets[0].uri);
          // Update status data with new status
          // This is where you'd make an API call to update the status
        }
      } catch (error) {
        console.error('Error picking image:', error);
      }
    } else if (item.statusImage) {
      // View other's status
      router.push({
        pathname: '/(tabs)/status/[id]',
        params: { id: item.id }
      });
    }
  };

  const renderStatusItem = ({ item }: { item: StatusItem }) => (
    <TouchableOpacity 
      style={styles.statusItem}
      onPress={() => handleStatusPress(item)}
    >
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: item.avatar }}
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