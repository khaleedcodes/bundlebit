import Bundle from "../models/bundleModel.js";
import sendAuthResponse from "../helpers/sendAuthResponse.js";

async function createBundle(req, res) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { _id: ownerId, username, displayName, bio, profilePicture } = user;

  if (!ownerId || !username) {
    return res.status(400).json({ error: "Missing user information" });
  }

  try {
    const newBundle = new Bundle({
      ownerId,
      bundleName: username,
      displayName: displayName || username,
      bio,
      profilePicture,
    });

    await newBundle.save();

    await user.bundles.push(newBundle._id);
    await user.save();

    sendAuthResponse(res, user);
  } catch (error) {
    console.error(error);
  }
}

async function getBitsInBundle(req, res) {
  try {
    const bundleId = req.user.bundles[0];
    if (!bundleId) {
      return res.status(400).json({ error: "Missing bundleId, title, or url" });
    }
    const bundle = await Bundle.findById(bundleId);

    if (!bundle) {
      return res.status(404).json({ error: "Bundle not found" });
    }

    const bits = bundle.bits;
    res.status(200).json({ bits });
  } catch (err) {
    console.error(err);
  }
}

async function addBitToBundle(req, res) {
  try {
    const bundleId = req.user.bundles[0];
    const { title, url } = req.body;

    if (!bundleId || !title || !url) {
      return res.status(400).json({ error: "Missing bundleId, title, or url" });
    }

    const bundle = await Bundle.findById(bundleId);

    if (!bundle) {
      return res.status(404).json({ error: "Bundle not found" });
    }

    bundle.bits.push({ title, url });
    await bundle.save();

    res.status(201).json({ message: "Bundle created with bit" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add link to bundle" });
  }
}

export { createBundle, getBitsInBundle, addBitToBundle };
