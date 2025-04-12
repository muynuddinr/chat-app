import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function VideoCallScreen() {
  const { userId } = useLocalSearchParams();
  const router = useRouter();

  const handleEndCall = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.remoteVideo}>
        <Text style={styles.connectingText}>Connecting video call...</Text>
      </View>
      
      <View style={styles.localVideo}>
        {/* Local video preview */}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="mic-off" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.controlButton, styles.endCallButton]}
          onPress={handleEndCall}
        >
          <Ionicons name="call" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="videocam-off" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  remoteVideo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  localVideo: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 100,
    height: 150,
    backgroundColor: '#2C3E50',
    borderRadius: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2C3E50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallButton: {
    backgroundColor: '#E74C3C',
    transform: [{ rotate: '135deg' }],
  },
  connectingText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});