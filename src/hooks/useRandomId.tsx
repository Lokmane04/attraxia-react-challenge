function useRandomId() {
  const generateRandomId = () => {
    const randomId = `random-id-${Math.random().toString(36).substring(7)}`;
    return randomId;
  };

  return { generateRandomId };
}

export default useRandomId;
