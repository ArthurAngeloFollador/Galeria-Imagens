import { Bottom } from "../../style.tsx";

export default function BottomComponent() {
  return (
    <Bottom>
      <div style={{ display: "flex", gap: "40px" }}>
        <p>About</p>
        <p>Contact</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>© 2025 Photo Gallery. All rights reserved</p>
      </div>
    </Bottom>
  );
}
