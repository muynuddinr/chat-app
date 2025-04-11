import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ContactSupportScreen = () => {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ subject, message });
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Support</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={setSubject}
          placeholder="Enter subject"
          placeholderTextColor="#95A5A6"
        />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={setMessage}
          placeholder="How can we help you?"
          placeholderTextColor="#95A5A6"
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>

        <View style={styles.contactInfo}>
          <Text style={styles.contactInfoTitle}>Other ways to reach us:</Text>
          <Text style={styles.contactInfoText}>Email: support@example.com</Text>
          <Text style={styles.contactInfoText}>Phone: +1 (555) 123-4567</Text>
          <Text style={styles.contactInfoText}>Hours: Mon-Fri, 9AM-6PM EST</Text>
        </View>
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
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 16,
  },
  messageInput: {
    height: 150,
  },
  submitButton: {
    backgroundColor: '#F1C40F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  contactInfo: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
  },
  contactInfoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  contactInfoText: {
    fontSize: 14,
    color: '#34495E',
    marginBottom: 4,
  },
});

export default ContactSupportScreen;