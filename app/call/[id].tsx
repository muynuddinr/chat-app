import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface CallInfo {
  id: string;
  name: string;
  phoneNumber: string;
}

export default function CallScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [callDuration, setCallDuration] = useState(0);
  const [callInfo, setCallInfo] = useState<CallInfo | null>(null);

  useEffect(() => {
    // In a real app, you would fetch call info from your backend
    const info = {
      id: id as string,
      name: 'John Doe',
      phoneNumber: '+1234567890',
    };
    setCallInfo(info);

    // Start call duration timer
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [id]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    // Here you would implement the actual call ending logic
    router.back();
  };

  if (!callInfo) return null;

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{callInfo.name}</Text>
        <Text style={styles.status}>Ongoing call</Text>
        <Text style={styles.duration}>{formatDuration(callDuration)}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="mic-off" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="volume-high" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="videocam" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.endCallButton}
        onPress={handleEndCall}
      >
        <Ionicons name="call" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    justifyContent: 'space-between',
    padding: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#95A5A6',
    marginBottom: 16,
  },
  duration: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#34495E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 40,
    transform: [{ rotate: '135deg' }],
  },
});