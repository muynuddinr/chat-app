import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PrivacyPolicyScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Collection</Text>
          <Text style={styles.text}>
            We collect information that you provide directly to us, including information provided at the time of registering to use our app, subscribing to our service, posting material, or requesting further services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Information Usage</Text>
          <Text style={styles.text}>
            We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our app and our users.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.text}>
            We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption of data in transit and at rest.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Third-party Services</Text>
          <Text style={styles.text}>
            Our app may contain links to and from third-party websites. If you follow a link to any of these websites, please note that they have their own privacy policies.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Rights</Text>
          <Text style={styles.text}>
            You have the right to access, correct, or delete your personal information. You can also object to processing and request data portability.
          </Text>
        </View>

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Privacy Team</Text>
        </TouchableOpacity>

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
  contactButton: {
    backgroundColor: '#F1C40F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#95A5A6',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default PrivacyPolicyScreen;