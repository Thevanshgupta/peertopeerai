import User from "../models/User.js";
import PeerGroup from "../models/PeerGroup.models.js"; 
const CalculatePeer = async (req, res) => {
  try {
    const { course } = req.body;
    if (!course) {
      return res.status(400).json({ success: false, message: "Course name is required" });
    }

    // Get users who have this course in their knowledge array
    const users = await User.find({
      knowledge: { $elemMatch: { title: course } }
    });

    console.log(`Total users found for course ${course}:`, users.length);

    if (users.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Not enough users with this course knowledge"
      });
    }

    // Extract course knowledge score for each user
    const courseUsers = users.map(user => {
      const courseData = user.knowledge.find(k => k.title.toLowerCase() === course.toLowerCase());
      return {
        _id: user._id,
        email: user.email,
        name: user.name,
        score: courseData ? courseData.knowledgebase : 0
      };
    });

    // Sort users by knowledge (low to high)
    courseUsers.sort((a, b) => a.score - b.score);

    // Generate peer pairs: low knowledge with high knowledge
    const peerPairs = [];
    let i = 0;
    let j = courseUsers.length - 1;

    while (i < j) {
      peerPairs.push({
        course,
        userA: courseUsers[i]._id,
        userB: courseUsers[j]._id,
        gap: Math.abs(courseUsers[i].score - courseUsers[j].score)
      });
      i++;
      j--;
    }

    // Remove old peer groups for this course
    await PeerGroup.deleteMany({ course });

    // Save new peer groups
    const savedGroups = await PeerGroup.insertMany(peerPairs);

    // Populate userA and userB for returning detailed info
    const populatedGroups = await PeerGroup.find({
      _id: { $in: savedGroups.map(g => g._id) }
    })
      .populate("userA", "name email")
      .populate("userB", "name email");

    res.status(200).json({
      success: true,
      message: `Peer groups generated for course '${course}'`,
      pairs: populatedGroups.length,
      peerGroups: populatedGroups
    });

  } catch (err) {
    console.error("Error generating peers:", err);
    res.status(500).json({
      success: false,
      message: "Server error while generating peer groups"
    });
  }
};

export default CalculatePeer;

export {CalculatePeer};
