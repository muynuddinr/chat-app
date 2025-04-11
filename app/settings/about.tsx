import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AboutScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/icon.png')}
            style={styles.logo}
          />
          <Text style={styles.appName}>Cyphernix</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>

        <View style={styles.infoSection}>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoTitle}>What's New</Text>
            <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoTitle}>Licenses</Text>
            <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoTitle}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoTitle}>Terms of Service</Text>
            <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
          </TouchableOpacity>
        </View>
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
  },
  logoContainer: {
    alignItems: 'center',
    padding: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    color: '#95A5A6',
  },
  infoSection: {
    padding: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  infoTitle: {
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default AboutScreen;