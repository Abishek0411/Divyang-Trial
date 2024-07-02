import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const IndexingPage: React.FC = () => {
  const initialCheckboxState = {
    standingBothLegs: 0,
    standingAffectedLeg: 0,
    walkingPlainSurfaces: 0,
    sittingChair: 0,
    climbingStairs: 0,
    gettingDownStairs: 0,
    takingTurns: 0,
    squattingFloor: 0,
    kneelingDown: 0,
    holdingPen: 0,
  };

  const [checkboxValues, setCheckboxValues] = useState(initialCheckboxState);
  const [name, setName] = useState('');

  const handleCheckboxPress = (category: string, value: number) => {
    setCheckboxValues(prevState => ({
      ...prevState,
      [category]: prevState[category] === value ? 0 : value, // Toggle the checkbox value
    }));
  };

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

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.label}>Standing on both legs:</Text>
            <View style={styles.checkboxContainer}>
              {Array(5).fill(null).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.checkbox,
                    checkboxValues.standingBothLegs === 9 - index * 2 && styles.selectedCheckbox,
                    {
                      backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                    },
                  ]}
                  onPress={() => handleCheckboxPress('standingBothLegs', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
                >
                  {checkboxValues.standingBothLegs === 9 - index * 2 && <View style={styles.checkIcon} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.label}>Standing on the affected leg:</Text>
            <View style={styles.checkboxContainer}>
              {Array(5).fill(null).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.checkbox,
                    checkboxValues.standingAffectedLeg === 9 - index * 2 && styles.selectedCheckbox,
                    {
                      backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                    },
                  ]}
                  onPress={() => handleCheckboxPress('standingAffectedLeg', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
                >
                  {checkboxValues.standingAffectedLeg === 9 - index * 2 && <View style={styles.checkIcon} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.label}>Walking on plain surfaces:</Text>
            <View style={styles.checkboxContainer}>
              {Array(5).fill(null).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.checkbox,
                    checkboxValues.walkingPlainSurfaces === 9 - index * 2 && styles.selectedCheckbox,
                    {
                      backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                    },
                  ]}
                  onPress={() => handleCheckboxPress('walkingPlainSurfaces', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
                >
                  {checkboxValues.walkingPlainSurfaces === 9 - index * 2 && <View style={styles.checkIcon} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.label}>Sitting on a chair:</Text>
            <View style={styles.checkboxContainer}>
              {Array(5).fill(null).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.checkbox,
                    checkboxValues.sittingChair === 9 - index * 2 && styles.selectedCheckbox,
                    {
                      backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                    },
                  ]}
                  onPress={() => handleCheckboxPress('sittingChair', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
                >
                  {checkboxValues.sittingChair === 9 - index * 2 && <View style={styles.checkIcon} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.label}>Climbing up stairs:</Text>
            <View style={styles.checkboxContainer}>
              {Array(5).fill(null).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.checkbox,
                    checkboxValues.climbingStairs === 9 - index * 2 && styles.selectedCheckbox,
                    {
                      backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                    },
                  ]}
                  onPress={() => handleCheckboxPress('climbingStairs', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
                >
                  {checkboxValues.climbingStairs === 9 - index * 2 && <View style={styles.checkIcon} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Text style={styles.label}>Getting Down stairs:</Text>
          <View style={styles.checkboxContainer}>
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.checkbox,
                  checkboxValues.gettingDownStairs === 9 - index * 2 && styles.selectedCheckbox,
                  {
                    backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                  },
                ]}
                onPress={() => handleCheckboxPress('gettingDownStairs', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
              >
                {checkboxValues.gettingDownStairs === 9 - index * 2 && <View style={styles.checkIcon} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Text style={styles.label}>Taking turns to right and left side:</Text>
          <View style={styles.checkboxContainer}>
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.checkbox,
                  checkboxValues.takingTurns === 9 - index * 2 && styles.selectedCheckbox,
                  {
                    backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                  },
                ]}
                onPress={() => handleCheckboxPress('takingTurns', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
              >
                {checkboxValues.takingTurns === 9 - index * 2 && <View style={styles.checkIcon} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Text style={styles.label}>Squatting on the floor:</Text>
          <View style={styles.checkboxContainer}>
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.checkbox,
                  checkboxValues.squattingFloor === 9 - index * 2 && styles.selectedCheckbox,
                  {
                    backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                  },
                ]}
                onPress={() => handleCheckboxPress('squattingFloor', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
              >
                {checkboxValues.squattingFloor === 9 - index * 2 && <View style={styles.checkIcon} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Text style={styles.label}>Kneeling Down:</Text>
          <View style={styles.checkboxContainer}>
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.checkbox,
                  checkboxValues.kneelingDown === 9 - index * 2 && styles.selectedCheckbox,
                  {
                    backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                  },
                ]}
                onPress={() => handleCheckboxPress('kneelingDown', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
              >
                {checkboxValues.kneelingDown === 9 - index * 2 && <View style={styles.checkIcon} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Text style={styles.label}>Holding a Pen/Pencil and write:</Text>
          <View style={styles.checkboxContainer}>
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.checkbox,
                  checkboxValues.holdingPen === 9 - index * 2 && styles.selectedCheckbox,
                  {
                    backgroundColor: `rgba(255, ${255 - index * 20}, ${255 - index * 20}, 1)`, // Reducing red tone gradually
                  },
                ]}
                onPress={() => handleCheckboxPress('holdingPen', 9 - index * 2)} // Assigning values 0, 3, 5, 7, 9
              >
                {checkboxValues.holdingPen === 9 - index * 2 && <View style={styles.checkIcon} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
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
    marginBottom: 8,
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
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCheckbox: {
    backgroundColor: '#000000', // Black tick mark
  },
  checkIcon: {
    width: 12,
    height: 12,
    backgroundColor: 'black',
    borderRadius: 2,
  },
});

export default IndexingPage;
