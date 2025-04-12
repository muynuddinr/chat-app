import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const NewScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.title}>New</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-add-outline" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.optionText}>New Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.optionText}>New Group</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconContainer}>
            <Ionicons name="megaphone-outline" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.optionText}>New Channel</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
  },
  content: {
    padding: 16,
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default NewScreen; 