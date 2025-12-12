import { Suspense, lazy } from "react";

export default function App() {
  const Profile = lazy(() => import("profile_remote/Profile"));
  return (
    <div style={{ padding: 20 }}>
      <h1>Host App</h1>
      <Suspense fallback={<div>fallback</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}
