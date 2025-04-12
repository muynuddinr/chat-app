import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const callsData = [
  {
    id: '1',
    name: 'John Doe',
    time: '10:30 AM',
    type: 'incoming',
    missed: false,
    phoneNumber: '+1234567890',
  },
  {
    id: '2',
    name: 'Jane Smith',
    time: 'Yesterday',
    type: 'outgoing',
    missed: false,
    phoneNumber: '+1987654321',
  },
  // Add more call items
];

export default function CallsScreen() {
  const router = useRouter();

  const handleCall = (id: string) => {
    router.push({
      pathname: '/call/[id]',
      params: { id }
    });
  };

  const renderCallItem = ({ item }: { item: { id: string; name: string; time: string; type: 'incoming' | 'outgoing'; missed: boolean; phoneNumber: string } }) => (
    <TouchableOpacity style={styles.callItem}>
      <View style={styles.callIcon}>
        <Ionicons
          name={item.type === 'incoming' ? 'arrow-down-outline' : 'arrow-up-outline'}
          size={24}
          color={item.missed ? '#E74C3C' : '#2ECC71'}
        />
      </View>
      <View style={styles.callContent}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.callDetails}>
          <Ionicons
            name={item.type === 'incoming' ? 'arrow-down' : 'arrow-up'}
            size={16}
            color="#95A5A6"
            style={styles.callTypeIcon}
          />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.callButton}
        onPress={() => handleCall(item.id)}
      >
        <Ionicons name="call" size={22} color="#3498DB" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={callsData as Array<{ id: string; name: string; time: string; type: 'incoming' | 'outgoing'; missed: boolean; phoneNumber: string }>}
        renderItem={renderCallItem}
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
  callItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  callIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  callContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callTypeIcon: {
    marginRight: 4,
  },
  time: {
    fontSize: 14,
    color: '#95A5A6',
  },
  callButton: {
    padding: 8,
  },
});