// Card.jsx
const Card = ({ children }) => {
  return (
    <div className="bg-orange-50 p-6 rounded-xl shadow-md border border-yellow-200">
      {children}
    </div>
  );
};

export default Card;
