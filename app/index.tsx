import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMsj, setModalMsj] = useState<string>("");

  useEffect(() => {
    setModalMsj(
      "Aviso de privacidad sobre Cookies: \n\n Está página web utiliza cookies para mejorar tu experiencia de navegación y analizar patrones de uso. Al continuar navegando, aceptas nuestra política de cookies. Para más información, consulta nuestro Aviso de Privacidad Integral"
    );
    setModalVisible(true);
  }, []);

  const handleRegistro = () => {
    setModalMsj(
      "Aviso de privacidad sobre Datos Personales: \n\n En cumplimiento con la Ley Federal de Protección de Datos Personales, informamos que recopilamos información como tu nombre y correo electrónico con la finalidad de ofrecerte nuestros servicios, informar sobre cambios y realizar análisis internos. Puedes ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) contactándonos en nuestro correo electrónico: al20760686@ite.edu.mx. Consulta más detalles en nuestro Aviso de Privacidad Integral"
    );
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.styleText}>Bienvenido, comienza tu registro</Text>
      <View style={styles.subcontainer}>
        <TextInput placeholder="Nombre" style={styles.styleInput} />
        <TextInput
          placeholder="Correo electrónico"
          style={styles.styleInput}
          keyboardType="email-address"
        />
        <Button title="Registrar" onPress={handleRegistro} />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalStyle}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMsj}</Text>
            <Pressable onPress={closeModal} style={styles.modalBoton}>
              <Text style={styles.textPressable}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  styleText: {
    textAlign: "justify",
    fontSize: 20,
    fontWeight: "300",
    margin: 15,
  },
  subcontainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
  },
  styleInput: {
    borderRadius: 5,
    borderColor: "#ccc",
    width: "100%",
    height: 50,
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 12,
  },
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba( 0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  modalBoton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textPressable: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
