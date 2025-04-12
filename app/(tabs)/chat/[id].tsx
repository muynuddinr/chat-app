import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import * as VideoThumbnails from 'expo-video-thumbnails';

interface Message {
  id: string;
  text: string;
  time: string;
  isMe: boolean;
}

interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState<ChatUser>({
    id: id as string,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online'
  });

  const [messages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey, how are you?',
      time: '10:30 AM',
      isMe: false,
    },
    {
      id: '2',
      text: 'I\'m good, thanks! How about you?',
      time: '10:31 AM',
      isMe: true,
    },
    {
      id: '3',
      text: 'Great! Would you like to meet for coffee?',
      time: '10:32 AM',
      isMe: false,
    },
  ]);

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageContainer, item.isMe ? styles.myMessage : styles.theirMessage]}>
      <View style={[styles.messageBubble, item.isMe ? styles.myBubble : styles.theirBubble]}>
        <Text style={[styles.messageText, item.isMe ? styles.myMessageText : styles.theirMessageText]}>
          {item.text}
        </Text>
        <Text style={[styles.timeText, item.isMe ? styles.myTimeText : styles.theirTimeText]}>
          {item.time}
        </Text>
      </View>
    </View>
  );

  const handleSend = () => {
    if (newMessage.trim()) {
      // Add new message logic here
      setNewMessage('');
    }
  };

  const handleVideoCall = async () => {
    // Here you would typically integrate with a video call service
    // For example: WebRTC, Twilio, or Agora
    console.log('Starting video call with:', user.name);
    router.push({
      pathname: '/(tabs)/chat/video-call',
      params: { userId: user.id }
    });
  };

  const handleVoiceCall = async () => {
    // Here you would typically integrate with a voice call service
    console.log('Starting voice call with:', user.name);
    router.push({
      pathname: '/(tabs)/chat/video-call',
      params: { userId: user.id }
    });
  };

  const handleProfilePress = () => {
    router.push({
      pathname: '/(tabs)/profile/[id]',
      params: { id: user.id }
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.userInfo}
          onPress={handleProfilePress}
        >
          <Image
            source={{ uri: user.avatar }}
            style={styles.avatar}
            accessibilityLabel={`${user.name}'s avatar`}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.headerTitle}>{user.name}</Text>
            <Text style={styles.statusText}>{user.status}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={handleVideoCall}
          >
            <Ionicons name="videocam-outline" size={24} color="#2C3E50" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={handleVoiceCall}
          >
            <Ionicons name="call-outline" size={22} color="#2C3E50" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        inverted={false}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Ionicons name="add-circle-outline" size={24} color="#95A5A6" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, newMessage.trim() ? styles.sendButtonActive : null]}
          onPress={handleSend}
        >
          <Ionicons 
            name="send" 
            size={20} 
            color={newMessage.trim() ? "#FFFFFF" : "#95A5A6"} 
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    padding: 4,
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginVertical: 4,
    flexDirection: 'row',
  },
  myMessage: {
    justifyContent: 'flex-end',
  },
  theirMessage: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
  },
  myBubble: {
    backgroundColor: '#3498DB',
    borderTopRightRadius: 4,
  },
  theirBubble: {
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 4,
  },
  myMessageText: {
    color: '#FFFFFF',
  },
  theirMessageText: {
    color: '#2C3E50',
  },
  timeText: {
    fontSize: 12,
  },
  myTimeText: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'right',
  },
  theirTimeText: {
    color: '#95A5A6',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#F4F4F4',
    backgroundColor: '#FFFFFF',
  },
  attachButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    maxHeight: 100,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    fontSize: 16,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonActive: {
    backgroundColor: '#3498DB',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 12,
    color: '#95A5A6',
  },
});