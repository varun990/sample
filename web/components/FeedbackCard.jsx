export default function FeedbackCard({ fb }) {
  return (
    <div className="border p-3 rounded">
      <p><strong>From:</strong> {fb.from_user}</p>
      <p>{fb.comment}</p>
      <p className="text-sm text-gray-500">{fb.sentiment}</p>
    </div>
  );
}