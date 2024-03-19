import Link from 'next/link';
import './page.less';

export default function Page() {
  return (
    <div>
      <h1 className='page'>Hello, Next.js!</h1><br />
      <Link href="/login">to Login</Link>
    </div>
  );
}
