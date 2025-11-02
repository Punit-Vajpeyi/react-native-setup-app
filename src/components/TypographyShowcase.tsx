import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, typography } from '../config/theme';

export const TypographyShowcase = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Headers</Text>

        <Text style={styles.label}>H1 Semibold</Text>
        <Text style={[styles.text, typography.h1Semibold]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H1 Medium</Text>
        <Text style={[styles.text, typography.h1Medium]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H1 Regular</Text>
        <Text style={[styles.text, typography.h1Regular]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H2 Semibold</Text>
        <Text style={[styles.text, typography.h2Semibold]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H2 Medium</Text>
        <Text style={[styles.text, typography.h2Medium]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H2 Regular</Text>
        <Text style={[styles.text, typography.h2Regular]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H3 Semibold</Text>
        <Text style={[styles.text, typography.h3Semibold]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H3 Medium</Text>
        <Text style={[styles.text, typography.h3Medium]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H3 Regular</Text>
        <Text style={[styles.text, typography.h3Regular]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H4 Semibold</Text>
        <Text style={[styles.text, typography.h4Semibold]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H4 Medium</Text>
        <Text style={[styles.text, typography.h4Medium]}>
          The quick brown fox
        </Text>

        <Text style={styles.label}>H4 Regular</Text>
        <Text style={[styles.text, typography.h4Regular]}>
          The quick brown fox
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Body</Text>

        <Text style={styles.label}>B1 Semibold</Text>
        <Text style={[styles.text, typography.b1Semibold]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B1 Medium</Text>
        <Text style={[styles.text, typography.b1Medium]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B1 Regular</Text>
        <Text style={[styles.text, typography.b1Regular]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B2 Semibold</Text>
        <Text style={[styles.text, typography.b2Semibold]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B2 Medium</Text>
        <Text style={[styles.text, typography.b2Medium]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B2 Regular</Text>
        <Text style={[styles.text, typography.b2Regular]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B3 Semibold</Text>
        <Text style={[styles.text, typography.b3Semibold]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B3 Medium</Text>
        <Text style={[styles.text, typography.b3Medium]}>
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text style={styles.label}>B3 Regular</Text>
        <Text style={[styles.text, typography.b3Regular]}>
          The quick brown fox jumps over the lazy dog.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutrals.white,
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.prime.main,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.neutrals.g50,
    marginTop: 16,
    marginBottom: 4,
  },
  text: {
    color: colors.neutrals.g10,
  },
});
