import Link from "next/link";

const WithLink = ({ link, className, children }) => {
  return (
    <Link href={link}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default WithLink;
