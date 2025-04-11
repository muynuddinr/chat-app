import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ReportProblemScreen = () => {
  const router = useRouter();
  const [problemType, setProblemType] = useState('');
  const [description, setDescription] = useState('');

  const problemTypes = [
    'Technical Issue',
    'Account Problem',
    'App Performance',
    'Feature Request',
    'Other'
  ];

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ problemType, description });
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report a Problem</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Type of Problem</Text>
        <View style={styles.problemTypesContainer}>
          {problemTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.problemTypeButton,
                problemType === type && styles.selectedProblemType
              ]}
              onPress={() => setProblemType(type)}
            >
              <Text
                style={[
                  styles.problemTypeText,
                  problemType === type && styles.selectedProblemTypeText
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Please describe the problem in detail"
          placeholderTextColor="#95A5A6"
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity 
          style={[
            styles.submitButton,
            (!problemType || !description) && styles.disabledButton
          ]}
          onPress={handleSubmit}
          disabled={!problemType || !description}
        >
          <Text style={styles.submitButtonText}>Submit Report</Text>
        </TouchableOpacity>
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
  problemTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  problemTypeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F1C40F',
    marginRight: 8,
    marginBottom: 8,
  },
  selectedProblemType: {
    backgroundColor: '#F1C40F',
  },
  problemTypeText: {
    color: '#F1C40F',
    fontSize: 14,
  },
  selectedProblemTypeText: {
    color: '#FFFFFF',
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
  descriptionInput: {
    height: 150,
  },
  submitButton: {
    backgroundColor: '#F1C40F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#F1C40F80',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReportProblemScreen;