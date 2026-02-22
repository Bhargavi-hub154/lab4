

import Card from "./Card";

const ProfileSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-orange-600 mb-6">
   Profile
</h2>

      <Card>
        <p><strong>Name:</strong> Bhargavi</p>
        <p><strong>Role:</strong> Frontend Learner</p>
        <p><strong>Status:</strong> Improving UI Engineering ☀️</p>
      </Card>
    </div>
  );
};

export default ProfileSection;
