const selfPing = (req, res) => {
  try {
    res.status(200).json({ message: "Server is alive!" });
  } catch (error) {
    res.status(500).json({ error: "Server is not responding" });
  }
};

export default selfPing