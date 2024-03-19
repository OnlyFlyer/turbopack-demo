import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h1>Please Login！</h1><br />
      <Link href="/user">to User</Link>
    </div>
  );
}
