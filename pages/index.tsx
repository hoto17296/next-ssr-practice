interface Entry {
  title: string
}

const dummyEntries: Entry[] = [{ title: 'foo' }, { title: 'bar' }]

export async function getServerSideProps() {
  return { props: { entries: dummyEntries } }
}

interface HomePageProps {
  entries: Entry[]
}

export default function Home({ entries }: HomePageProps) {
  return (
    <ul>
      {entries.map((entry, idx) => (
        <li key={idx}>{entry.title}</li>
      ))}
    </ul>
  )
}
