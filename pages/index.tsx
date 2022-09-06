interface Entry {
  title: string
}

const dummyEntries: Entry[] = [{ title: 'foo' }, { title: 'bar' }]

export async function getServerSideProps() {
  return {
    props: {
      sitename: process.env.SITENAME,
      entries: dummyEntries,
    },
  }
}

interface HomePageProps {
  sitename: string
  entries: Entry[]
}

export default function Home({ sitename, entries }: HomePageProps) {
  return (
    <>
      <h1>{sitename}</h1>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>{entry.title}</li>
        ))}
      </ul>
    </>
  )
}
