import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <ul>
        {router.locales.map((local, key) => (
          <Link
          href='/'
          locale={local}
          ><li key={key}><a>{local}</a></li></Link>
        ))}
      </ul>
    </>
  );
};

export default Nav;
