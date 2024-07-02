import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const IndexingPage: React.FC = () => {
  const initialCheckboxState = {
    standingBothLegs: null,
    standingAffectedLeg: null,
    walkingPlainSurfaces: null,
    sittingChair: null,
    climbingStairs: null,
    gettingDownStairs: null,
    takingTurns: null,
    squattingFloor: null,
    kneelingDown: null,
    holdingPen: null,
  };

  const [checkboxValues, setCheckboxValues] = useState(initialCheckboxState);
  const [name, setName] = useState('');

  const handleCheckboxPress = (category: string, value: number) => {
    setCheckboxValues(prevState => ({
      ...prevState,
      [category]: prevState[category] === value ? null : value, // Toggle the checkbox value
    }));
  };

  const renderCategory = (categoryKey: string, categoryLabel: string) => (
    <View style={styles.section}>
      <View style={styles.sectionContent}>
        <Text style={styles.label}>{categoryLabel}</Text>
        <View style={styles.checkboxContainer}>
          {Array(5).fill(null).map((_, index) => {
            const value = index === 0 ? 0 : (index === 1 ? 3 : (index === 2 ? 5 : (index === 3 ? 7 : 9)));
            return (
              <View key={index} style={styles.checkboxWrapper}>
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    checkboxValues[categoryKey] === value && styles.selectedCheckbox,
                    {
                      backgroundColor: `rgba(255, ${200 - index * 40}, ${200 - index * 40}, 1)`, // Reducing red tone gradually
                    },
                  ]}
                  onPress={() => handleCheckboxPress(categoryKey, value)}
                >
                  {checkboxValues[categoryKey] === value && <View style={styles.checkIcon} />}
                </TouchableOpacity>
                <Text style={styles.buttonValue}>{value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.component}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.header}>Stability Component</Text>
            <Text style={styles.title}>ROM strength and Mobility</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Enter name"
            />
          </View>
        </View>

        {renderCategory('standingBothLegs', 'Standing on both legs:')}
        {renderCategory('standingAffectedLeg', 'Standing on the affected leg:')}
        {renderCategory('walkingPlainSurfaces', 'Walking on plain surfaces:')}
        {renderCategory('sittingChair', 'Sitting on a chair:')}
        {renderCategory('climbingStairs', 'Climbing up stairs:')}
        {renderCategory('gettingDownStairs', 'Getting Down stairs:')}
        {renderCategory('takingTurns', 'Taking turns to right and left side:')}
        {renderCategory('squattingFloor', 'Squatting on the floor:')}
        {renderCategory('kneelingDown', 'Kneeling Down:')}
        {renderCategory('holdingPen', 'Holding a Pen/Pencil and write:')}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0D4FF',
    padding: 16,
  },
  component: {
    backgroundColor: '#4B0082',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxWrapper: {
    alignItems: 'center',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  selectedCheckbox: {
    backgroundColor: '#000000', // Black tick mark
  },
  checkIcon: {
    width: 18,
    height: 18,
    backgroundColor: 'black',
    borderRadius: 2,
  },
  buttonValue: {
    textAlign: 'center',
    marginTop: 4,
  },
});

export default IndexingPage;
