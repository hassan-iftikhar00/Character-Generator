import character from "./character.js";
import express from "express";
const router = express.Router();
const Character = character;
// Moved from server.js to make it presentable
// this code checks if the server started. if started sends a message" Hello World!"
// also gets all the characters
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// post a new character
router.post("/", async (req, res) => {
  const character = new Character({
    name: req.body.name,
    profession: req.body.profession,
  });
  try {
    const newCharacter = await character.save();
    // if succeed
    res.status(201).json(newCharacter);
  } catch (err) {
    // if error
    res.status(400).json({ message: err.message });
  }
});
// delete a character
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    res.status(200).send({ message: "Character deleted successfully" });
  } catch (error) {
    console.error("Error deleting character:", error); // Log the error
    res.status(500).send({ message: "Error deleting character", error });
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
export default router;
