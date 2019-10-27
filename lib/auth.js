export const login = async () => {
  try {
    const firebaseResponse = await firebaseInstance.auth.signInWithEmailAndPassword(
      "luisjgh1@gmail.com",
      "12345"
    );
  } catch (err) {}
};
