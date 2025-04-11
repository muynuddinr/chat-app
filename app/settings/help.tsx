import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HelpScreen = () => {
  const router = useRouter();
  const helpItems = [
    {
      title: 'FAQ',
      icon: 'help-circle-outline',
      color: '#F1C40F',
      route: '/settings/help/faq'
    },
    {
      title: 'Contact Support',
      icon: 'mail-outline',
      color: '#F1C40F',
      route: '/settings/help/contact'
    },
    {
      title: 'Report a Problem',
      icon: 'warning-outline',
      color: '#F1C40F',
      route: '/settings/help/report'
    },
    {
      title: 'Terms of Service',
      icon: 'document-text-outline',
      color: '#F1C40F',
      route: '/settings/help/terms'
    },
    {
      title: 'Privacy Policy',
      icon: 'shield-outline',
      color: '#F1C40F',
      route: '/settings/help/privacy'
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help</Text>
      </View>

      <ScrollView style={styles.content}>
        {helpItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.helpItem}
            onPress={() => router.push(item.route as any)}
          >
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
              <Ionicons name={item.icon as any} size={24} color={item.color} />
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#95A5A6" />
            </View>
          </TouchableOpacity>
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
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
  },
});

export default HelpScreen;