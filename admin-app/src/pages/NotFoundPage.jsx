import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      <h2>Page Not Found</h2>
      <p>The requested page does not exist in the admin app.</p>
      <p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </p>
    </section>
  );
}
