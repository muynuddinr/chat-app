import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const TermsOfServiceScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms of Service</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={styles.text}>
            By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Use License</Text>
          <Text style={styles.text}>
            Permission is granted to temporarily download one copy of the application for personal, non-commercial transitory viewing only.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. User Account</Text>
          <Text style={styles.text}>
            To use certain features of the application, you must register for an account. You must provide accurate and complete information and keep your account information updated.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Privacy</Text>
          <Text style={styles.text}>
            Your use of the application is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the application and informs users of our data collection practices.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Modifications</Text>
          <Text style={styles.text}>
            We reserve the right to modify or discontinue, temporarily or permanently, the application with or without notice at any time.
          </Text>
        </View>

        <Text style={styles.lastUpdated}>Last Updated: March 2024</Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#34495E',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#95A5A6',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
});

export default TermsOfServiceScreen;