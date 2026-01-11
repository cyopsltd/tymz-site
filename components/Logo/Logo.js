import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "28px",
            color: "#0066FF",
            letterSpacing: "0.5px",
          }}
        >
          TYMZ
        </span>
      </Link>
    </div>
  );
}
