import { 
  Alert,
  FlatList, 
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
    if (participants.includes("Jhonny")) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleRemoveParticipant(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Ninguém chegou ao evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}