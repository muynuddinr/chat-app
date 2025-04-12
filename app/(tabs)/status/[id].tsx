import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput, Text, PanResponder } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const statusData = [
  {
    id: '2',
    image: 'https://picsum.photos/400/800',
    userId: '2',
    userName: 'John Doe',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    timestamp: new Date().toISOString(),
    likes: 0,
  },
  {
    id: '3',
    image: 'https://picsum.photos/400/801',
    userId: '3',
    userName: 'Sarah Wilson',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    timestamp: new Date().toISOString(),
    likes: 0,
  },
  {
    id: '4',
    image: 'https://picsum.photos/400/802',
    userId: '4',
    userName: 'Mike Johnson',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    timestamp: new Date().toISOString(),
    likes: 0,
  },
];

export default function ViewStatusScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reply, setReply] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const index = statusData.findIndex(status => status.id === id);
    setCurrentIndex(index !== -1 ? index : 0);
    setCurrentStatus(statusData[index !== -1 ? index : 0]);
  }, [id]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -50 && currentIndex < statusData.length - 1) {
        // Slide left to next status
        setCurrentIndex(currentIndex + 1);
        setCurrentStatus(statusData[currentIndex + 1]);
        setIsLiked(false);
        setReply('');
      } else if (gestureState.dx > 50 && currentIndex > 0) {
        // Slide right to previous status
        setCurrentIndex(currentIndex - 1);
        setCurrentStatus(statusData[currentIndex - 1]);
        setIsLiked(false);
        setReply('');
      }
    },
  });

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true 
    });
  };

  return (
    <View style={styles.container}>
      {currentStatus && (
        <>
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            
            <View style={styles.userInfo}>
              <Image 
                source={{ uri: currentStatus.userAvatar }} 
                style={styles.userAvatar} 
              />
              <View style={styles.userTextInfo}>
                <Text style={styles.userName}>{currentStatus.userName}</Text>
                <Text style={styles.timestamp}>
                  {formatTime(currentStatus.timestamp)}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', padding: 16, position: 'absolute', top: 80, left: 0, right: 0, zIndex: 1 }}>
            {statusData.map((_, index) => (
              <View 
                key={index} 
                style={[
                  { flex: 1, height: 2, backgroundColor: '#FFFFFF', marginHorizontal: 2 },
                  { 
                    backgroundColor: index <= currentIndex ? '#FFFFFF' : 'rgba(255,255,255,0.3)',
                  }
                ]} 
              />
            ))}
          </View>

          <View {...panResponder.panHandlers} style={{ flex: 1 }}>
            <Image
              source={{ uri: currentStatus.image }}
              style={styles.statusImage}
              resizeMode="cover"
            />
          </View>
          
          <View style={styles.interactionContainer}>
            <View style={styles.likeButton}>
              <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                <Ionicons 
                  name={isLiked ? "heart" : "heart-outline"} 
                  size={24} 
                  color={isLiked ? "#E74C3C" : "#FFFFFF"} 
                />
              </TouchableOpacity>
            </View>

            <View style={styles.replyContainer}>
              <TextInput
                style={styles.replyInput}
                placeholder="Reply to status..."
                placeholderTextColor="#95A5A6"
                value={reply}
                onChangeText={setReply}
              />
              <TouchableOpacity 
                style={styles.sendButton} 
                onPress={() => {
                  if (reply.trim()) {
                    console.log('Sending reply:', reply);
                    setReply('');
                  }
                }}
              >
                <Ionicons name="send" size={24} color="#3498DB" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    marginRight: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userTextInfo: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    color: '#CCCCCC',
    fontSize: 12,
    marginTop: 2,
  },
  statusImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
  interactionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  likeButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    zIndex: 2,
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  replyInput: {
    flex: 1,
    height: 40,
    color: '#2C3E50',
  },
  sendButton: {
    padding: 8,
  },
});