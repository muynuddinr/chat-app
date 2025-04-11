import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FAQScreen = () => {
  const router = useRouter();
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login screen and click on "Forgot Password". Follow the instructions sent to your email.'
    },
    {
      question: 'How can I update my profile?',
      answer: 'Navigate to Settings > Profile to update your personal information, profile picture, and other account details.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security measures to protect your data. You can review our Privacy Policy for more details.'
    },
    {
      question: 'How do I delete my account?',
      answer: 'To delete your account, go to Settings > Account > Delete Account. Please note this action cannot be undone.'
    },
    {
      question: 'What devices are supported?',
      answer: 'Our app supports iOS and Android devices running the latest operating systems, as well as web browsers.'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FAQ</Text>
      </View>

      <ScrollView style={styles.content}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
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
  faqItem: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    color: '#34495E',
    lineHeight: 20,
  },
});

export default FAQScreen;