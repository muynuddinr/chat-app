import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const DeleteAccountScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [reason, setReason] = useState('');

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            // Handle account deletion here
            router.push('/');
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delete Account</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.warningContainer}>
          <Ionicons name="warning-outline" size={48} color="#E74C3C" />
          <Text style={styles.warningTitle}>Delete Your Account</Text>
          <Text style={styles.warningText}>
            This action is permanent and cannot be undone. All your data, including messages, contacts, and settings will be permanently deleted.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />

          <Text style={styles.label}>Reason for Leaving (Optional)</Text>
          <TextInput
            style={[styles.input, styles.reasonInput]}
            value={reason}
            onChangeText={setReason}
            placeholder="Tell us why you're leaving"
            multiline
          />
        </View>

        <TouchableOpacity
          style={[styles.deleteButton, !password && styles.deleteButtonDisabled]}
          onPress={handleDeleteAccount}
          disabled={!password}
        >
          <Text style={styles.deleteButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
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
  warningContainer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FDEDEC',
    borderRadius: 12,
    marginBottom: 24,
  },
  warningTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E74C3C',
    marginVertical: 12,
  },
  warningText: {
    fontSize: 14,
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 20,
  },
  form: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#95A5A6',
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
  reasonInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonDisabled: {
    backgroundColor: '#F4F4F4',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DeleteAccountScreen;