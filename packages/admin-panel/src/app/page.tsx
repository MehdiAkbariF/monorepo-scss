"use client"
import { Button } from "@my-admin/ui-components";

export default function HomePage() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Button
        label="Click Me"
        variant="primary"
        onClick={() => alert("Clicked")}
      />
    </div>
  );
}
