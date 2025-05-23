import User from "../models/userModel.js";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
  colors,
} from "unique-names-generator";
import {
  fantasyCreatures,
  elements,
  actions,
  objects,
  stealthAdjectives,
  gamerNouns,
  sciFiAdjectives,
  sciFiNouns,
  gods,
  powers,
} from "./usernameWordBanks.js";

const generateUniqueUsername = async (emailPrefix) => {
  // Remove any non-alphanumeric characters and sanitize
  const sanitized = emailPrefix.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Split into base name and optional numeric suffix
  const match = sanitized.match(/^(.+?)(\d+)?$/);
  let base = match[1];
  let number = parseInt(match[2] || "0", 10);
  let candidate = sanitized.slice(0, 20); // initial attempt

  // Loop until we find an available username
  while (await User.exists({ username: candidate })) {
    number++;
    // Keep base + number within 20 characters
    const suffix = String(number);
    const maxBaseLength = 20 - suffix.length;
    const trimmedBase = base.slice(0, maxBaseLength);
    candidate = `${trimmedBase}${suffix}`;
  }

  return candidate;
};

const generateUsernameSuggestions = async (inputUsername) => {
  try {
    const MAX_LENGTH = 20;
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const base = inputUsername
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .slice(0, 15);

    // Suggestion 1: username + smallest available number
    const regex = new RegExp(`^${base}(\\d+)?$`, "i");
    const users = await User.find({ username: { $regex: regex } });

    const numbers = users
      .map((u) => u.username.match(new RegExp(`${base}(\\d+)$`)))
      .filter(Boolean)
      .map((match) => parseInt(match[1], 10))
      .sort((a, b) => a - b);

    let nextNumber = 1;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== i + 1) {
        nextNumber = i + 1;
        break;
      }
      nextNumber = numbers.length + 1;
    }

    let suggestion1 = `${base}${nextNumber}`;
    if (suggestion1.length > MAX_LENGTH) {
      const suffix = String(nextNumber);
      suggestion1 = `${base.slice(0, MAX_LENGTH - suffix.length)}${suffix}`;
    }

    // Ensure suggestion1 is unique (just in case)
    if (await User.exists({ username: suggestion1 })) {
      // If taken, fallback to generateUniqueUsername for suggestion1
      suggestion1 = await generateUniqueUsername(base);
    }

    // Exotic generator pool (all forced lowercase)
    const exoticGenerators = [
      () => `${random(adjectives)}${random(colors)}`,
      () => `${random(adjectives)}${random(objects)}`,
      () => `${random(animals)}${random(actions)}`,
      () => `${random(animals)}${random(colors)}`,
      () => `${random(fantasyCreatures)}${random(elements)}`,
      () => `${random(gods)}${random(powers)}`,
      () => `${random(stealthAdjectives)}${random(gamerNouns)}`,
      () => `${random(sciFiAdjectives)}${random(sciFiNouns)}`,
      () =>
        uniqueNamesGenerator({
          dictionaries: [adjectives, animals],
          separator: "",
          style: "lowerCase",
        }),
    ];

    const pickExotic = async () => {
      let name;
      let attempts = 0;
      do {
        if (attempts++ > 10) {
          // fallback to random alphanumeric if stuck
          name = base + Math.floor(Math.random() * 10000);
          name = name.slice(0, MAX_LENGTH);
          break;
        }
        name = exoticGenerators[exoticGenerators.length - 1]();
        if (name.length > MAX_LENGTH) {
          name = name.slice(0, MAX_LENGTH);
        }
        // Repeat until a unique name is found
      } while (await User.exists({ username: name }));
      return name;
    };

    const suggestion2 = await pickExotic();
    const suggestion3 = await pickExotic();

    return [suggestion1, suggestion2, suggestion3];
  } catch (err) {
    console.error("Error generating username suggestions:" + err);
    return [];
  }
};

export { generateUniqueUsername, generateUsernameSuggestions };
