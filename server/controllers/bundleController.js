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
    res.status(500).json({ message: "Failed to create bundle" });
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

    res.status(201).json({ message: "Bit added to your Bundle" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add link to bundle" });
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

async function deleteBitFromBundle(req, res) {
  try {
    const bundleId = req.user.bundles[0];
    const { bitId } = req.params;

    if (!bundleId || !bitId) {
      return res.status(400).json({ error: "Missing bundleId, or bitId" });
    }

    const bundle = await Bundle.findById(bundleId);

    if (!bundle) {
      return res.status(404).json({ error: "Bundle not found" });
    }

    bundle.bits.pull({ _id: bitId });
    await bundle.save();

    res.status(200).json({ message: "Bit removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while deleting bit" });
  }
}

async function getPublicBundle(req, res) {
  try {
    const { username } = req.params;
    const bundle = await Bundle.findOne({ bundleName: username });

    if (!bundle || !bundle.isPublic) {
      return res.status(404).json({ message: "Bundle not found" });
    }

    res.json(bundle);
  } catch (error) {
    console.error("Error fetching public bundle:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export {
  createBundle,
  addBitToBundle,
  getBitsInBundle,
  deleteBitFromBundle,
  getPublicBundle,
};
