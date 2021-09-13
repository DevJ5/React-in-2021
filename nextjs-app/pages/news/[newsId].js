import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();
  console.log(router.query.newsId);
  return (
    <h1>
      <a href="/news/aaa">The detail page</a>
    </h1>
  );
}

export default DetailPage;
