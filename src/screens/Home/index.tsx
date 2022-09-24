import { 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = [
    'Jhonny', 
    'Giovana', 
    'Andressa', 
    'Tito', 
    'Isis', 
    'Linda', 
    'Nilson', 
    'Léo', 
    'Aline', 
    'Fulano', 
    'Beltrano'
  ];

  function handleAddParticipant() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Remover participante ${name}!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta-feira, 23 de Setembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => (
          <Participant 
            key={participant} 
            name={participant} 
            onRemove={() => handleRemoveParticipant(participant)} 
          />
        ))}
      </ScrollView>

     
    </View>
  );
}